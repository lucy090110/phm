import React,{Suspense} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from '@/phm/framework/store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root =  document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Suspense fallback={<div>加载中</div>}>
              <Router>
                  <App />
              </Router>
          </Suspense>
      </Provider>
  </React.StrictMode>
,root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
