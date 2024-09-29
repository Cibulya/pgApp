import './overlays.scss';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const mountElement = document.getElementById(
  'overlays'
) as unknown as HTMLDivElement;

interface ModalWindow {
  isOpenState: boolean;
  Component: JSX.Element;
}

const Overlays = ({ ...modal }: ModalWindow) => {
  const { isOpenState, Component } = modal;
  const [state, setState] = useState<boolean>(isOpenState);

  return createPortal(
    <>
      {state && (
        <div onClick={() => setState(!isOpenState)} className="overlay">
          {Component}
        </div>
      )}
    </>,

    mountElement
  );
};

export default Overlays;
