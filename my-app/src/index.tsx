import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/Common/_base.scss'
import {StoreProvider} from "./store";
import Test from "./Test";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <StoreProvider>
        <Test />
        {/*<App />*/}
    </StoreProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
