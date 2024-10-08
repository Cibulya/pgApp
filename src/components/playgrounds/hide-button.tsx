import { FC } from 'react';

const enum ArrowImages {
  left = 'https://raw.githubusercontent.com/Cibulya/pgApp/refs/heads/map-feature/src/assets/icons/left.svg',
  right = 'https://raw.githubusercontent.com/Cibulya/pgApp/6e33e29b26666723384d90f09f10116950c5a196/src/assets/icons/right.svg',
  up = 'https://raw.githubusercontent.com/Cibulya/pgApp/6e33e29b26666723384d90f09f10116950c5a196/src/assets/icons/top.svg',
  down = 'https://raw.githubusercontent.com/Cibulya/pgApp/6e33e29b26666723384d90f09f10116950c5a196/src/assets/icons/arrow-down.svg',
}

interface HideState {
  isOpen: boolean;
}

export const HideButton: FC<HideState> = ({ ...isOpen }: HideState) => (
  <button type="button">
    <img src={isOpen ? ArrowImages.right : ArrowImages.left} alt="arrow" />
  </button>
);
