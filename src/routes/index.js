import { useRoutes } from "react-router-dom";
import CONSTANTS from "../constants";

function RouterComponent() {
  const routeObj = CONSTANTS.routesObject;
  const routes = useRoutes([...routeObj]);
  return routes;
}

export default RouterComponent;
