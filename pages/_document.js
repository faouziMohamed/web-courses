/* eslint-disable class-methods-use-this */

import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="theme-light" lang="fr">
        <Head />
        <body className="line-numbers">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
