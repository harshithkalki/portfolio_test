import { useRef } from 'react';

export const useScrollRefs = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    section1Ref,
    section2Ref,
    section3Ref,
    handleScroll,
  };
};
