export interface MapParams {
  center: {
    lat: number;
    lng: number;
  };
  mapStyle: {
    width: string;
    height: string;
  };
}

export const mapPresets: MapParams = {
  center: { lat: 39.86626326395293, lng: -86.12409681693246 },
  mapStyle: { width: '100%', height: '790px' },
};
