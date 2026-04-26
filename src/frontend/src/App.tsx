import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NewsEvents } from "./pages/NewsEvents";
import { Programs } from "./pages/Programs";
import { Services } from "./pages/Services";

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

// Page routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/programs",
  component: Programs,
});

const newsEventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news-events",
  component: NewsEvents,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Router
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  programsRoute,
  newsEventsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
