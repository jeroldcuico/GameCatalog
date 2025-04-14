//Global Types
interface BaseCatalog {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games?: GameData[];
}
export interface GameData {
  id: number;
  name: string;
  slug: string;
  added: number;
}

export interface VapourGenres extends BaseCatalog { }
export interface VapourDevelopers extends BaseCatalog { }
export interface VapourCreators extends BaseCatalog { }
export interface VapourPlatforms extends BaseCatalog { }
export interface VapourStores extends BaseCatalog { }

export interface VapourGames {
  id: number;
  name: string;
  slug: string;
  title: string;
  released: string;
  genres: VapourGenres[];
  image_background?: string;
  games_count?: string;
  description: string;
  background_image: string;
}

export type CatalogItem =
  | VapourGames
  | VapourGenres
  | VapourPlatforms
  | VapourStores
  | VapourCreators;
