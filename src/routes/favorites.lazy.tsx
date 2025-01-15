import CatCard from "@/components/cat-card";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/favorites")({
  component: RouteComponent,
});

function RouteComponent() {
  const [favoritesCats, setFavoriteCats] = useLocalStorage<Cat[]>(
    "favoritesCats",
    []
  );

  function handleFavorite(cat: Cat) {
    if (favoritesCats.some((favCat) => favCat.id === cat.id)) {
      setFavoriteCats(favoritesCats.filter((favCat) => favCat.id !== cat.id));
      return;
    }
    setFavoriteCats([...favoritesCats, cat]);
  }

  if (favoritesCats.length === 0)
    return (
      <div className="container mx-auto px-6 md:px-0 py-12">
        У вас нет любимых котиков(
      </div>
    );

  return (
    <main className="container mx-auto px-6 md:px-0 py-12">
      <div className="grid grid-cols-3 gap-12">
        {favoritesCats.map((c) => (
          <CatCard
            key={`${c.id}_${c.url}`}
            img={c.url}
            onFavoriteClick={() => handleFavorite(c)}
            isFavorite={favoritesCats.some((favCat) => favCat.id === c.id)}
          />
        ))}
      </div>
    </main>
  );
}
