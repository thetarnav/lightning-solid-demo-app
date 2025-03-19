import { createMemo, createSignal, For, Show, Accessor, Setter, createEffect, createComputed, onCleanup } from "solid-js";
import { ElementNode, View, Text, ElementText, AnimationSettings } from "@lightningtv/solid";
import { Poster } from "../components";
import { setGlobalBackground } from "../state";
import { List } from "@solid-primitives/list";
import * as tmdb from "../api/tmdbData";

export type Item = tmdb.Movie | undefined

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function createSlice<T>(
  allItems:      Accessor<T[]>,
  displayedSize: Accessor<number>,
  bufferSize:    Accessor<number>,
  initialCursor: number = 0,
) {
  const [cursor, setCursorRaw] = createSignal(initialCursor)
  const fromIndex = createMemo(() => Math.max(0, cursor()-bufferSize()))
  const toIndex = createMemo(() => Math.min(allItems().length-1, cursor()+displayedSize()+bufferSize()))
  const items = createMemo(() => allItems().slice(fromIndex(), toIndex()))
  const setCursor = (setter: number | ((prev: number) => number)): number =>
    setCursorRaw(
      cursor => clamp(typeof setter === 'function' ? setter(cursor) : setter, 0, allItems().length-1 - displayedSize())
    )
  return {cursor, setCursor, fromIndex, toIndex, items}
}

const Loops = (props: {data: tmdb.TMDBData}) => {
  const allItems = createMemo((): Item[] => props.data.rows.map((row) => row.items()).flat())
  const [resetCounter, setResetCounter] = createSignal(1);
  const displaySize = 5;
  const bufferSize = 2; // Number of items to load ahead
  const itemsSlice = createSlice(
    allItems,
    () => displaySize,
    () => bufferSize,
  )
  let solidLogo;

  const speed = 0.2
  const [animationCursor, setAnimationCursor] = createSignal(0)

  function frame() {

    let target = itemsSlice.cursor()
    let current = animationCursor()
    if (target < current) {
      current = Math.max(target, current + speed * (target-current))
    } else {
      current = Math.min(target, current + speed * (target-current))
    }
    setAnimationCursor(current)

    raf = requestAnimationFrame(frame)
  }
  let raf = requestAnimationFrame(frame)
  onCleanup(() => cancelAnimationFrame(raf))

  function reset(_e, elm: ElementNode) {
    setResetCounter(r => r + 1);
    itemsSlice.setCursor(0);
    elm.children[1].setFocus();
    return true;
  }

  function shiftLeft(_e, elm: ElementNode) {
    let isLeft = itemsSlice.cursor() === 0
    itemsSlice.setCursor(p => p - 1)
    return !isLeft;
  }

  function shiftRight(_e, elm: ElementNode) {
    itemsSlice.setCursor(p => p + 1)
    return true;
  }
  
  createEffect((prev: ElementNode | ElementText | undefined) => {
    itemsSlice.items() // view.children has an implicit dependency on items
    let item = view.children[Math.min(itemsSlice.cursor(), bufferSize)]
    if (item != null && item !== prev) {
      item.setFocus()
    }
    return item
  })

  function animateOut(node) {
    return node
      .animate({ y: 200, alpha: 0 }, { duration: 500, easing: "ease-in-out" })
      .start()
      .waitUntilStopped();
  }

  function animateIn(node) {
    node.alpha = 0;
    node.y = -100;
    return node
      .animate({ y: 55, alpha: 1 }, { duration: 500, easing: "ease-in-out" })
      .start()
      .waitUntilStopped();
  }

  setGlobalBackground("#000000");

  const titleRowStyles = {
    fontFamily: "Raleway",
    fontSize: 24,
    height: 32,
    lineHeight: 32,
  };

  // x is animated with animationCursor
  const withTransition: Record<string, boolean | AnimationSettings>
    // = { x: { duration: 250 }, alpha: { duration: 250 } };
    = { alpha: { duration: 250 } };

  let view!: ElementNode
  return (
    <>
      <View ref={solidLogo} width={300} height={150} x={162} y={80} zIndex={105}>
        <Text x={80} fontSize={28} color={0xf6f6f699}>
          Built With:
        </Text>
        <View y={32} src="./assets/solidWord.png" width={280} height={52} />
        <View x={0} y={110} src="./assets/tmdb.png" width={80} height={41} />
        <Text x={90} y={110} contain="width" width={160} fontSize={12} color={0xf6f6f699}>
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </Text>
      </View>
      
      <View x={160} y={300} height={300}>
        <Text style={titleRowStyles}>Infinite Item List</Text>
        <Show when={resetCounter()} keyed>
          <View
            ref={view}
            onDestroy={animateOut}
            onCreate={animateIn}
            onFocus={(elm) => elm.children[1]?.setFocus()}
            onLeft={shiftLeft} onRight={shiftRight} onUp={reset} onDown={reset} y={55}>
            <List each={itemsSlice.items()}>
              {(item, index) => {
                const isEdgeItem = () => index() < Math.min(itemsSlice.cursor(), bufferSize)
                                                || index() >= bufferSize+displaySize
                return (
                  <Poster
                    item={item()}
                    x={(index()-(animationCursor()-itemsSlice.fromIndex())) * 210}
                    alpha={isEdgeItem() ? 0 : 1}
                    transition={withTransition}
                  />
                );
              }}
            </List>
          </View>
        </Show>
      </View>
    </>
  );
};

export default Loops;
