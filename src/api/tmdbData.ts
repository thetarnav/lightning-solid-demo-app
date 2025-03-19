import api from ".";
import { convertItemsToTiles } from "./formatters/ItemFormatter";
import { createResource, Setter, Resource } from "solid-js";

const handleResults = (response) => {
  return response.then(({ results }) => {
    let filteredItems = results.filter((r) => !r.adult);
    return convertItemsToTiles(filteredItems);
  });
};


const fetchPopular = (type) => {
  return handleResults(api.get(`/${type}/popular`));
};

let genreListCache;
const fetchGenreMovies = (genres) => {
  const genreList =
    genreListCache || (genreListCache = api.get(`/genre/movie/list`));
  const targetGenre = Array.isArray(genres) ? genres : [genres];
  return genreList.then(({ genres }) => {
    let targetGenreIds: number[] = [];
    genres.forEach((item) => {
      if (targetGenre.includes(item.name)) targetGenreIds.push(item.id);
    });
    return handleResults(
      api.get(`/discover/movie?with_genres=${targetGenreIds.join()}`)
    );
  });
};

export type EntityInfo = {
  type: string
  id:   number
}

export type HeroContent = {
  title:       string
  description: string
}

export type Item = {
  id:                number
  name:              string
  first_air_date:    string
  adult:             boolean
  backdrop_path:     string
  genre_ids:         number[]
  origin_country:    string[]
  original_language: string
  original_name:     string
  overview:          string
  popularity:        number
  poster_path:       string
  vote_average:      number
  vote_count:        number
}

export type Movie = {
  src:         string
  tileSrc:     string
  title:       string
  shortTitle:  string
  overview:    string
  backdrop:    string
  href:        string
  entityInfo:  EntityInfo
  item:        Item
  heroContent: HeroContent
}

export type RowItem = {
  title: string;
  items: Resource<Movie>;
  setItems?: Setter<Movie>;
  type: "Poster" | "Hero" | "PosterTitle";
  height: number;
};

export type TMDBData = {rows: RowItem[]}

export function destroyData() {
  const heroRow = {
    title: "Best Adventure and Action movies",
    items: createResource(() => fetchGenreMovies(["adventure", "action"]))[0],
    type: "Hero",
    height: 800,
  } as const;

  return {
    heroRow,
  };
}
export function tmdbData(): TMDBData {
  const rows: RowItem[] = [];
  const popularMovies = createResource(() => fetchPopular("movie"));
  rows.push({
    title: "Popular Movies",
    items: popularMovies[0],
    setItems: popularMovies[1].mutate,
    type: "Poster",
    height: 328,
  });

  rows.push({
    title: "Best Western movies",
    items: createResource(() => fetchGenreMovies(["Western"]))[0],
    type: "Hero",
    height: 720,
  });

  rows.push({
    title: "Best Comedy movies",
    items: createResource(() => fetchGenreMovies(["Comedy"]))[0],
    type: "PosterTitle",
    height: 400,
  });

  rows.push({
    title: "Popular TV shows",
    items: createResource(() => fetchPopular("tv"))[0],
    type: "PosterTitle",
    height: 400,
  });

  const heroRow = {
    title: "Best Adventure and Action movies",
    items: createResource(() => fetchGenreMovies(["adventure", "action"]))[0],
    type: "Hero",
    height: 720,
  } as const;
  rows.push(heroRow);

  rows.push({
    title: "Best Documentaries",
    items: createResource(() => fetchGenreMovies("Documentary"))[0],
    type: "PosterTitle",
    height: 400,
  });

  rows.push({
    title: "Best Western movies 2",
    items: createResource(() => fetchGenreMovies("Western"))[0],
    type: "PosterTitle",
    height: 400,
  });

  return {
    rows
  };
}
