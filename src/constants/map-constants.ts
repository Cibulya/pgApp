interface MarkerStyles {
  backgroundColor: string;
  border: string;
  borderRadius: string;
  width: string;
  transform: string;
  cursor: string;
  zIndex: string;
}

export const markerStyles: MarkerStyles = {
  backgroundColor: 'white',
  border: '0.5px solid rgba(196, 196, 196, 0.3)',
  borderRadius: '8px',
  width: '440px',
  transform: 'translateY(-60px)',
  cursor: 'pointer',
  zIndex: '100',
};

interface PinStyles {
  background: string;
  borderColor: string;
  glyphColor: string;
}

export const pinStyles: PinStyles = {
  background: 'rgba(195, 8, 115, 1)',
  borderColor: 'rgba(255, 255, 255, 1)',
  glyphColor: 'white',
};

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

export const enum MapControls {
  center = 'https://raw.githubusercontent.com/Cibulya/pgApp/674452487e22a342c2c68862bfafd6813fa75c7d/src/assets/map-controls/Current-position.svg',
  navToCenter = 'https://raw.githubusercontent.com/Cibulya/pgApp/674452487e22a342c2c68862bfafd6813fa75c7d/src/assets/map-controls/center.svg',
  zoomIn = 'https://raw.githubusercontent.com/Cibulya/pgApp/674452487e22a342c2c68862bfafd6813fa75c7d/src/assets/map-controls/Plus.svg',
  zoomOut = 'https://raw.githubusercontent.com/Cibulya/pgApp/674452487e22a342c2c68862bfafd6813fa75c7d/src/assets/map-controls/Minus.svg',
  find = 'https://raw.githubusercontent.com/Cibulya/pgApp/8af0d0e518a510a5705ebb2b454c7b24d2e2996f/src/assets/map-controls/find.svg',
}
