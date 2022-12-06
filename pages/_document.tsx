import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Navbar from '../components/Navbar';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
