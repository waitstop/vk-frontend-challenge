import Card from "@/components/ui/card";
import { InlineIcon } from "@iconify/react/dist/iconify.js";

type Props = {
  isFavorite: boolean;
  img: string;
  onFavoriteClick: () => void;
};

export default function CatCard({ img, isFavorite, onFavoriteClick }: Props) {
  return (
    <Card className="aspect-square relative col-span-3 md:col-span-1 group">
      <img className="w-full h-full object-cover" src={img} alt="Кот" />
      <button
        onClick={() => onFavoriteClick()}
        data-active={isFavorite}
        className="transition-all opacity-0 group-hover:opacity-100 absolute right-2 bottom-2 md:right-5 md:bottom-5 text-orange-600 text-3xl md:text-5xl group/favorite"
        type="button"
      >
        <InlineIcon
          icon="mdi-heart"
          strokeWidth={2}
          className="[&>*]:transition-colors stroke-current group-data-[active=true]/favorite:[&>*]:fill-current [&>*]:fill-transparent group-hover/favorite:[&>*]:fill-current"
        />
      </button>
    </Card>
  );
}
