export interface Playground {
  id: number;
  is_enable: number;
  is_show_on_map: number;
  is_published: number;
  is_show_sertificate: number;
  owner_id: number;
  title: string;
  image: string;
  url: string;
  address: string;
  discription: string;
  inspection_block: string;
  features: PlaygroundsFeatures;
}

export interface Playgrounds {
  playgrounds: Playground[];
}

export interface PlaygroundsFeatures {
  parking: boolean;
  camera: boolean;
  free_wifi: boolean;
  drinking_water: boolean;
  pets_allowed: boolean;
}
