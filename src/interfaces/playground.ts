export interface Playground {
  id: number;
  is_enable: number;
  is_show_on_map: number;
  is_published: number;
  is_show_sertificate: number;
  owner_id: number;
  title: string;
  image: string;
  imageBig: string;
  url: string;
  address: string;
  discription: string;
  inspection_block: string;
  features: Feature[];
  gps: {
    lat: number;
    lng: number;
  };
}

export interface PlaygroundsArray {
  playgrounds: Playground[];
}

export type Feature = {
  title: string;
  img: string;
};

export interface Position {
  lat: number;
  lng: number;
}

export type PGPick = Pick<
  Playground,
  'title' | 'features' | 'address' | 'image' | 'id'
>;
