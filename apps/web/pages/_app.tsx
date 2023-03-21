import React from "react";
import type { AppProps } from "next/app";
import store from "../core/store";
import { Provider } from "react-redux";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
