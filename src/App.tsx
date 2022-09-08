import React from 'react';
import {useRoutes } from 'react-router-dom';
import routes from "./routes";
import "@/phm/css/index.less";

function App() {
  const element = useRoutes(routes);
  return <div>{element}</div>
}

export default App;
