import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

type Props = {
  params?: Record<string, unknown>;
};

const defaultParams = {
  limit: 10,
  order: "ASC",
};

export default function useCats({ params }: Props = { params: defaultParams }) {
  return useInfiniteQuery({
    queryKey: ["cats"],
    queryFn: async ({ pageParam }): Promise<Cat[]> =>
      (
        await axios.get("https://api.thecatapi.com/v1/images/search", {
          params: { ...params, pageParam },
        })
      ).data,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });
}
