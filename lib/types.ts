export interface GetGenre {
    id: number;
    name: string;
    slug: string;
    games_count: string;
    image_background: string;
    games?: {
      added: number;
      id: number;
      name: string;
      slug: string;
    }[];
  }
  

export interface getGameType {
  id: number;
  title: string;
  name: string;
  slug: string;
  released: string;
  genres: GetGenre[];
  description: string;
  background_image: string;
}
