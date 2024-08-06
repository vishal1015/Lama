import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/Routes";
// import Layout from "./Layout/Layout";
function RouterProvider() {
//   console.log(routes);
  return (
    <Router>
        <Routes >
          {routes.map((route, index) => (
            <Route
              key={index} // Each child in a list should have a unique "key" prop
              path={route.path}
              element={<route.component />}
              exact={route.exact} // Note: `exact` is not needed in v6, but kept for backward compatibility
            />
          ))}
        </Routes>
    </Router>
  );
}

export default RouterProvider;
