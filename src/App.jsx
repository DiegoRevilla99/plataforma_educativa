import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import AppProvider from "./hooks/AppProvider";

function getRoutes() {
  return createBrowserRouter(routes());
}

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={getRoutes()} />
      </AppProvider>
    </>
  );
}

export default App;
