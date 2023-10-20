import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add any required meta tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="UTF-8" />
        </Head>
        <body style={{ "margin": 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
