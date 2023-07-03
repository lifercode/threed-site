import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContributeScreen from "./pages/Contribute";
import HomeScreen from "./pages/Home";
import CommunityScreen from "./pages/Community";
import RoadmapScreen from "./pages/Roadmap";
import CodeOfConductScreen from "./pages/CodeOfConduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/contribute",
    element: <ContributeScreen />,
  },
  {
    path: "/contribute/code-of-conduct",
    element: <CodeOfConductScreen />,
  },
  {
    path: "/community",
    element: <CommunityScreen />,
  },
  {
    path: "/roadmap",
    element: <RoadmapScreen />,
  },
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}