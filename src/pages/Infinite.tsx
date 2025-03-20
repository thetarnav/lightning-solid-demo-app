import { createMemo, createSignal, Accessor, createEffect, onCleanup } from "solid-js";
import { ElementNode, View, Text, ElementText } from "@lightningtv/solid";
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
  const fromIndex = createMemo(() => clamp(cursor()-bufferSize(), 0, allItems().length-1-displayedSize()-bufferSize()))
  const toIndex   = createMemo(() => Math.min(allItems().length-1, cursor()+displayedSize()+bufferSize()))
  const items     = createMemo(() => allItems().slice(fromIndex(), toIndex()))
  const setCursor = (setter: number | ((prev: number) => number)): number =>
    setCursorRaw(
      cursor => clamp(typeof setter === 'function' ? setter(cursor) : setter, 0, allItems().length-1-1)
    )
  return {cursor, setCursor, fromIndex, toIndex, items}
}

export default function Infinite(props: {data: tmdb.TMDBData}) {

  const allItems = createMemo((): Item[] => props.data.rows.map((row) => row.items()).flat().slice(0, 26))

  setGlobalBackground("#000000");

  const displaySize = 5
  const bufferSize  = 2 // Number of items to load ahead on each side
  const animSpeed   = 0.16

  const [resetTrack, resetTrigger] = createSignal(undefined, {equals: false});

  function reset() {
    resetTrigger()
    return true
  }

  function animateOut(node: ElementNode) {
    return node
      .animate({ y: 200, alpha: 0 }, { duration: 500, easing: "ease-in-out" })
      .start()
      .waitUntilStopped();
  }

  function animateIn(node: ElementNode) {
    node.alpha = 0;
    node.y = -100;
    return node
      .animate({ y: 55, alpha: 1 }, { duration: 500, easing: "ease-in-out" })
      .start()
      .waitUntilStopped();
  }

  const titleRowStyles = {
    fontFamily: "Raleway",
    fontSize: 24,
    height: 32,
    lineHeight: 32,
  };

  return <>
    <View width={300} height={150} x={162} y={80} zIndex={105}>
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
      {(() => {

        resetTrack() // rerun on each reset signal change

        const itemsSlice = createSlice(allItems, () => displaySize, () => bufferSize)

        const [animCursor, setAnimCursor] = createSignal(0)
        function frame() {
          let goal = itemsSlice.cursor()
          let curr = animCursor()
          let next = curr + animSpeed * (goal-curr)
          setAnimCursor(goal < curr ? Math.max(goal, next) : Math.min(goal, next))

          raf = requestAnimationFrame(frame)
        }
        let raf = requestAnimationFrame(frame)
        onCleanup(() => cancelAnimationFrame(raf))

        function shiftLeft() {
          let isFirst = itemsSlice.cursor() === 0
          itemsSlice.setCursor(p => p - 1)
          return !isFirst;
        }

        function shiftRight() {
          itemsSlice.setCursor(p => p + 1)
          return true;
        }

        /* Focus cursor item */
        createEffect((prev: ElementNode | ElementText | undefined) => {
          itemsSlice.items() // view.children has an implicit dependency on items
          let item = view.children[itemsSlice.cursor()-itemsSlice.fromIndex()]
          if (item != null && item !== prev) {
            item.setFocus()
          }
          return item
        })

        let view!: ElementNode
        return <>
          <View
            ref={view}
            onCreate={animateIn} onDestroy={animateOut}
            onFocus={(elm) => elm.children[1]?.setFocus()}
            onLeft={shiftLeft} onRight={shiftRight} onUp={reset} onDown={reset}
            y={55}
          >
            <List each={itemsSlice.items()}>
              {(item, index) => {
                const normalIndex = () => index() - Math.min(animCursor(), allItems().length-1-displaySize) + itemsSlice.fromIndex()
                return <>
                  <Poster
                    item={item()}
                    x={normalIndex() * 210}
                    alpha={Math.max(0, Math.min(1, normalIndex() + 1, displaySize - normalIndex()))}
                  />
                </>
              }}
            </List>
          </View>
        </>
      })()}
    </View>
  </>
};
