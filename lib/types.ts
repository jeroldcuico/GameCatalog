// Global Types
interface BaseCatalog {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background?: string;
  games?: GameData[];
}

export interface GameData {
  id: number;
  name: string;
  slug: string;
  added: number;
}

// Type aliases for these since they don't add new properties
export type VapourGenres = BaseCatalog;
export type VapourDevelopers = BaseCatalog;
export type VapourCreators = BaseCatalog;
export type VapourTags = BaseCatalog;

export interface VapourPlatforms extends BaseCatalog {
  platform?: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface VapourStores extends BaseCatalog {
  store?: {
    id: number;
    name: string;
    slug: string;
    domain: string;
  };
}

export interface VapourGameDetails extends BaseCatalog {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  metacritic: number;
  genres?: VapourGenres[];
  developers?: VapourDevelopers[];
  creators?: VapourCreators[];
  platforms?: VapourPlatforms[];
  tags: VapourTags[];
  stores: VapourStores[];
  released: string;
  description_raw: string;
  background_image: string;
  background_image_additional: string;
  rating?: number;
  ratings?: number[] | string[];
}

export interface VapourGames {
  id: number;
  name: string;
  slug: string;
  title: string;
  released: string;
  metacritic: number;
  genres?: VapourGenres[];
  image_background?: string;
  games_count?: string;
  tags?: VapourTags[];
  stores?: VapourStores[];
  platforms?: VapourPlatforms[]
  description: string;
  background_image: string;
  updated?: string;
}

export type CatalogItem =
  | VapourGames
  | VapourGenres
  | VapourPlatforms
  | VapourStores
  | VapourCreators;
