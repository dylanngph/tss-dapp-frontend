import React, { useState, useEffect, useRef } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "app/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
}

export default MyApp;
