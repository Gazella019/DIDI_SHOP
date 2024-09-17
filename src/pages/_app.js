import { Fragment, useEffect, useRef } from "react";
import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import fetchProducts from "../redux/actions/productActions";
import products from "../data/products.json";
import "../assets/scss/styles.scss";
import Preloader from "../components/Preloader";
import BackgroundMusic from "../components/BackgroundMusic";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    props.reduxStore.dispatch(fetchProducts(products));
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Fragment>
        <Head>
          <div className="didi-main-header">
            <title>DIDI Shop</title>
            <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
          </div>
        </Head>
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate loading={<Preloader />} persistor={this.persistor}>
              <BackgroundMusic />
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
