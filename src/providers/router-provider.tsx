import {
  RouterProvider as TanstackRouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

const router = createRouter({ routeTree, history: memoryHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function RouterProvider(): React.ReactNode {
  return <TanstackRouterProvider router={router} />;
}
