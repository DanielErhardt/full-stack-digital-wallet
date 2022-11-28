import { useState, useEffect } from 'react';

export default function useKeyPress(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false);
  let prevKey = '';

  const downHandler = ({ key }: KeyboardEvent) => {
    if (prevKey === targetKey) return;

    if (key === targetKey) {
      setKeyPressed(true);
      prevKey = key;
    }
  };

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false);
      prevKey = '';
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
}
