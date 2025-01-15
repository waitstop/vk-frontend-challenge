import useCats from "@/hooks/useCats";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useLocalStorage from "@/hooks/useLocalStorage";
import CatCard from "@/components/cat-card";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: cats, hasNextPage, fetchNextPage } = useCats();
  const [favoritesCats, setFavoriteCats] = useLocalStorage<Cat[]>(
    "favoritesCats",
    []
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { isIntersecting } = useIntersectionObserver({ ref: loaderRef });

  function handleFavorite(cat: Cat) {
    if (favoritesCats.some((favCat) => favCat.id === cat.id)) {
      setFavoriteCats(favoritesCats.filter((favCat) => favCat.id !== cat.id));
      return;
    }
    setFavoriteCats([...favoritesCats, cat]);
  }

  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isIntersecting]);

  return (
    <main className="container mx-auto px-6 md:px-0 py-12">
      <div className="grid grid-cols-3 gap-12">
        {cats?.pages
          .flat()
          ?.map((c) => (
            <CatCard
              key={`${c.id}_${c.url}`}
              img={c.url}
              onFavoriteClick={() => handleFavorite(c)}
              isFavorite={favoritesCats.some((favCat) => favCat.id === c.id)}
            />
          ))}
      </div>
      <div className="mx-auto w-fit mt-12" ref={loaderRef}>
        <span>... загружаем еще котиков ...</span>
      </div>
    </main>
  );
}
