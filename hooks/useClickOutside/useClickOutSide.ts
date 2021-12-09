import React from 'react';

type EventType = DocumentEventMap['click'];
type Handler = (evt: EventType) => void;

export const useClickOutSide = <E extends HTMLElement>(handler: Handler): React.RefObject<E> => {
  const innerRef = React.useRef<E>(null);

  React.useEffect(() => {
    const listener = (evt: EventType): void => {
      if (!innerRef.current || innerRef.current.contains(evt.target as Node)) {
        return;
      }

      handler(evt);
    };

    document.addEventListener('click', listener);

    return (): void => {
      document.removeEventListener('click', listener);
    };
  });

  return innerRef;
};
