import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
        </Head>
        {/* <Head /> */}
        <body>
          <Main />
          <NextScript />
          <audio>
            <source src={process.env.PUBLIC_URL + "assets/Spring-Flowers.mp3"} type="audio/mpeg"/>
          </audio>
        </body>
      </Html>
    );
  }
}
