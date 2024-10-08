import { Feature, Playground } from '../interfaces/playground';

export const pgMock: Playground[] = [
  {
    id: 1,
    is_enable: 1,
    is_show_on_map: 1,
    is_published: 1,
    is_show_sertificate: 1,
    owner_id: 2,
    title: 'Magic Island Park',
    image:
      'https://github.com/Cibulya/pgApp/blob/map-feature/src/assets/pg-image/pg1.png?raw=true',
    imageBig:
      'https://github.com/Cibulya/pgApp/blob/playground-page/src/assets/pg-image/pg_big.png?raw=true',
    url: 'somesite.de',
    address: '1500 Broad Ripple Ave, Indianapolis, IN 46220, USA',
    discription:
      '<div><p>The play area in the Magic Island park is a great place for children and their parents, where everyone can find entertainment to their liking. Located in the shade of the green trees of the park, the play area offers various attractions and activities.</p><p style="font-weight: 600;">The main advantages of the “Magic Island” gaming zone:</p><p>A variety of attractions: there are trampolines, slides, play complexes, carousels and much more. This allows each child to find something of interest.</p><p>Safety: All attractions undergo regular inspections, and staff carefully monitor compliance with safety rules. In addition, all equipment meets quality and safety standards.</p><p>Convenient location: the play area is located in the center of the park, which makes it accessible to visitors from all corners.</p><p>Fresh Air: Being outdoors is not only good for your health, but it can also improve your mood.</p><p>Possibility of holding events: the play area hosts various events (for example, birthdays, master classes) for children of all ages.</p></div>',
    inspection_block: 'some inspection',
    // 39.87378503804782, -86.1313983949958
    gps: {
      lat: 39.871204752180155,
      lng: -86.13111653862002,
    },
    features: [
      {
        title: 'Pets allowed',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/dog.svg',
      },
      {
        title: 'Camera',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/security-camera.svg',
      },
      {
        title: 'Free wifi',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wifi.svg',
      },
      {
        title: 'Drinking water',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/drink.svg',
      },
      {
        title: 'Parking',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/parking.svg',
      },
      {
        title: 'ADA Complience',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wheelchair.svg',
      },
    ],
  },
  {
    id: 2,
    is_enable: 1,
    is_show_on_map: 1,
    is_published: 1,
    is_show_sertificate: 1,
    owner_id: 2,
    title: 'Hillside Park',
    image:
      'https://github.com/Cibulya/pgApp/blob/map-feature/src/assets/pg-image/pg2.png?raw=true',
    imageBig:
      'https://github.com/Cibulya/pgApp/blob/playground-page/src/assets/pg-image/pg_big.png?raw=true',
    url: 'somesite.de',
    address: '6049 Hillside AvenueDrive W, Indianapolis, IN 46220, USA',
    discription:
      '<div><p>The play area in the Magic Island park is a great place for children and their parents, where everyone can find entertainment to their liking. Located in the shade of the green trees of the park, the play area offers various attractions and activities.</p><p style="font-weight: 600;">The main advantages of the “Magic Island” gaming zone:</p><p>A variety of attractions: there are trampolines, slides, play complexes, carousels and much more. This allows each child to find something of interest.</p><p>Safety: All attractions undergo regular inspections, and staff carefully monitor compliance with safety rules. In addition, all equipment meets quality and safety standards.</p><p>Convenient location: the play area is located in the center of the park, which makes it accessible to visitors from all corners.</p><p>Fresh Air: Being outdoors is not only good for your health, but it can also improve your mood.</p><p>Possibility of holding events: the play area hosts various events (for example, birthdays, master classes) for children of all ages.</p></div>',
    inspection_block: 'some inspection',
    gps: {
      lat: 39.8649725274866,
      lng: -86.12391755092578,
    },
    features: [
      {
        title: 'Pets allowed',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/dog.svg',
      },
      {
        title: 'Camera',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/security-camera.svg',
      },
    ],
  },
  {
    id: 3,
    is_enable: 1,
    is_show_on_map: 1,
    is_published: 1,
    is_show_sertificate: 1,
    owner_id: 2,
    title: 'Ripple Park',
    image:
      'https://github.com/Cibulya/pgApp/blob/map-feature/src/assets/pg-image/pg3.png?raw=true',
    imageBig:
      'https://github.com/Cibulya/pgApp/blob/playground-page/src/assets/pg-image/pg_big.png?raw=true',
    url: 'somesite.de',
    address: 'Broad Ripple Ave, Indianapolis, IN 46220, USA',
    discription:
      '<div><p>The play area in the Magic Island park is a great place for children and their parents, where everyone can find entertainment to their liking. Located in the shade of the green trees of the park, the play area offers various attractions and activities.</p><p style="font-weight: 600;">The main advantages of the “Magic Island” gaming zone:</p><p>A variety of attractions: there are trampolines, slides, play complexes, carousels and much more. This allows each child to find something of interest.</p><p>Safety: All attractions undergo regular inspections, and staff carefully monitor compliance with safety rules. In addition, all equipment meets quality and safety standards.</p><p>Convenient location: the play area is located in the center of the park, which makes it accessible to visitors from all corners.</p><p>Fresh Air: Being outdoors is not only good for your health, but it can also improve your mood.</p><p>Possibility of holding events: the play area hosts various events (for example, birthdays, master classes) for children of all ages.</p></div>',
    inspection_block: 'some inspection',
    gps: {
      lat: 39.868905483220566,
      lng: -86.13111624147169,
    },
    features: [
      {
        title: 'Pets allowed',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/dog.svg',
      },
      {
        title: 'Camera',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/security-camera.svg',
      },
      {
        title: 'Free wifi',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wifi.svg',
      },
      {
        title: 'Drinking water',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/drink.svg',
      },
      {
        title: 'Parking',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/parking.svg',
      },
      {
        title: 'ADA Complience',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wheelchair.svg',
      },
    ],
  },
  {
    id: 4,
    is_enable: 1,
    is_show_on_map: 1,
    is_published: 1,
    is_show_sertificate: 1,
    owner_id: 2,
    title: 'Baur Dr Park',
    image:
      'https://github.com/Cibulya/pgApp/blob/map-feature/src/assets/pg-image/pg4.png?raw=true',
    imageBig:
      'https://github.com/Cibulya/pgApp/blob/playground-page/src/assets/pg-image/pg_big.png?raw=true',
    url: 'somesite.de',
    address: '2741 Baur Dr, Indianapolis, IN 46220, USA',
    discription:
      '<div><p>The play area in the Magic Island park is a great place for children and their parents, where everyone can find entertainment to their liking. Located in the shade of the green trees of the park, the play area offers various attractions and activities.</p><p style="font-weight: 600;">The main advantages of the “Magic Island” gaming zone:</p><p>A variety of attractions: there are trampolines, slides, play complexes, carousels and much more. This allows each child to find something of interest.</p><p>Safety: All attractions undergo regular inspections, and staff carefully monitor compliance with safety rules. In addition, all equipment meets quality and safety standards.</p><p>Convenient location: the play area is located in the center of the park, which makes it accessible to visitors from all corners.</p><p>Fresh Air: Being outdoors is not only good for your health, but it can also improve your mood.</p><p>Possibility of holding events: the play area hosts various events (for example, birthdays, master classes) for children of all ages.</p></div>',
    inspection_block: 'some inspection',

    gps: {
      lat: 39.86181328999016,
      lng: -86.11916737791022,
    },
    features: [
      {
        title: 'Pets allowed',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/dog.svg',
      },
      {
        title: 'ADA Complience',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wheelchair.svg',
      },
    ],
  },
  {
    id: 5,
    is_enable: 1,
    is_show_on_map: 1,
    is_published: 1,
    is_show_sertificate: 1,
    owner_id: 2,
    title: 'Evanston Park',
    image:
      'https://github.com/Cibulya/pgApp/blob/map-feature/src/assets/pg-image/pg6.png?raw=true',
    imageBig:
      'https://github.com/Cibulya/pgApp/blob/playground-page/src/assets/pg-image/pg_big.png?raw=true',
    url: 'somesite.de',
    address: '5741 Evanston Ave, Indianapolis, IN 46220, USA',
    discription:
      '<div><p>The play area in the Magic Island park is a great place for children and their parents, where everyone can find entertainment to their liking. Located in the shade of the green trees of the park, the play area offers various attractions and activities.</p><p style="font-weight: 600;">The main advantages of the “Magic Island” gaming zone:</p><p>A variety of attractions: there are trampolines, slides, play complexes, carousels and much more. This allows each child to find something of interest.</p><p>Safety: All attractions undergo regular inspections, and staff carefully monitor compliance with safety rules. In addition, all equipment meets quality and safety standards.</p><p>Convenient location: the play area is located in the center of the park, which makes it accessible to visitors from all corners.</p><p>Fresh Air: Being outdoors is not only good for your health, but it can also improve your mood.</p><p>Possibility of holding events: the play area hosts various events (for example, birthdays, master classes) for children of all ages.</p></div>',
    inspection_block: 'some inspection',
    gps: {
      lat: 39.85870277577092,
      lng: -86.12656401770224,
    },
    features: [
      {
        title: 'Free wifi',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wifi.svg',
      },
      {
        title: 'Drinking water',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/drink.svg',
      },
      {
        title: 'ADA Complience',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wheelchair.svg',
      },
    ],
  },
  {
    id: 6,
    is_enable: 1,
    is_show_on_map: 1,
    is_published: 1,
    is_show_sertificate: 1,
    owner_id: 2,
    title: 'Skibidi Park',
    image:
      'https://github.com/Cibulya/pgApp/blob/map-feature/src/assets/pg-image/pg5.png?raw=true',
    imageBig:
      'https://github.com/Cibulya/pgApp/blob/playground-page/src/assets/pg-image/pg_big.png?raw=true',
    url: 'somesite.de',
    address: '5741 Evanston Ave, Indianapolis, IN 46220, USA',
    discription:
      '<div><p>The play area in the Magic Island park is a great place for children and their parents, where everyone can find entertainment to their liking. Located in the shade of the green trees of the park, the play area offers various attractions and activities.</p><p style="font-weight: 600;">The main advantages of the “Magic Island” gaming zone:</p><p>A variety of attractions: there are trampolines, slides, play complexes, carousels and much more. This allows each child to find something of interest.</p><p>Safety: All attractions undergo regular inspections, and staff carefully monitor compliance with safety rules. In addition, all equipment meets quality and safety standards.</p><p>Convenient location: the play area is located in the center of the park, which makes it accessible to visitors from all corners.</p><p>Fresh Air: Being outdoors is not only good for your health, but it can also improve your mood.</p><p>Possibility of holding events: the play area hosts various events (for example, birthdays, master classes) for children of all ages.</p></div>',
    inspection_block: 'some inspection',

    gps: {
      lat: 39.869766776816036,
      lng: -86.12920974634656,
    },
    features: [
      {
        title: 'Free wifi',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wifi.svg',
      },
      {
        title: 'Drinking water',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/drink.svg',
      },
      {
        title: 'ADA Complience',
        img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wheelchair.svg',
      },
    ],
  },
];

const pgFeats: Feature[] = [
  {
    title: 'Pets allowed',
    img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/dog.svg',
  },
  {
    title: 'Camera',
    img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/security-camera.svg',
  },
  {
    title: 'Free wifi',
    img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wifi.svg',
  },
  {
    title: 'Drinking water',
    img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/drink.svg',
  },
  {
    title: 'Parking',
    img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/parking.svg',
  },
  {
    title: 'ADA Complience',
    img: 'https://raw.githubusercontent.com/Cibulya/pgApp/c6407219030b499faa64f4a29688d4d09aefaf6e/src/assets/pg-features/wheelchair.svg',
  },
];
