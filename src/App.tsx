import React from 'react';
import { BrowserRouter as Router,useRoutes } from 'react-router-dom';
import routes from "./routes";
import logo from './logo.svg';
import './App.css';

function App() {

  // const element = useRoutes(routes);
  return useRoutes(routes);
}

export default App;
