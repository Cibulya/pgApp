import './overlays.scss';
import { createPortal } from 'react-dom';
import { FC, useEffect, useState } from 'react';

const mountElement = document.getElementById(
  'overlays'
) as unknown as HTMLDivElement;

interface ModalWindow {
  isOpenState: boolean;
  Component: JSX.Element;
}

const Overlays: FC<ModalWindow> = (modal: ModalWindow) => {
  const { isOpenState, Component } = modal;
  const [state, setState] = useState<boolean>(isOpenState);

  useEffect(() => {
    const body = document.body;
    const paddingOffset = window.innerWidth - body.offsetWidth + 'px';
    body.style.overflow = state ? 'hidden' : 'auto';
    body.style.paddingRight = paddingOffset;
    return () => {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    };
  }, [state]);

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
