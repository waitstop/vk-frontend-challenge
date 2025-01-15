import QueryProvider from "./query-provider";
import RouterProvider from "./router-provider";

export default function Providers(): React.ReactNode {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
}
