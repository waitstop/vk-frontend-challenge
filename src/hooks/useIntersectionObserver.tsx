import { useEffect, useState, RefObject, useMemo } from "react";

type Props = {
  ref: RefObject<Element>;
};

const useIntersectionObserver = ({ ref }: Props) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }),
    []
  );

  useEffect(() => {
    if (!ref.current) return;

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return { isIntersecting };
};

export default useIntersectionObserver;
