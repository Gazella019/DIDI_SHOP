import { Fragment } from "react";
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
            {/* <iframe src="silence.mp3" allow="autoplay" id="audio"></iframe> */}
            {/* <audio
              controls
              autoplay
              loop
              src="/bgm.mp3" className="didi-music-player">
                  Your browser does not support the
                  <code>audio</code> element.
            </audio> */}
          </div>
        </Head>
        {/* <BackgroundMusic /> */}
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate loading={<Preloader />} persistor={this.persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
