import './map-and-playgrounds.scss';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/redux-hook';
import { test } from '../../redux/slices/playground-slice';

const MapAndPlaygrounds: FC = () => {
  const playGrounds = useAppSelector(state => state.playgr.playgrounds);
  console.log(playGrounds);

  return <div className="maps-playgrounds">HERE BE MAPS AND PLAYGROUNDS</div>;
};

export default MapAndPlaygrounds;
