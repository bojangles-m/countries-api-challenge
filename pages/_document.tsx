import Document, { Html, Head, Main, NextScript } from 'next/document';
import { setInitialTheme } from '../hooks/useThemeToggle';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
