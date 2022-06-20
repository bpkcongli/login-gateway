import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { APP_STYLE_PATH } from '../config';

export default class MyDocuments extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href={APP_STYLE_PATH} />
          <link rel="stylesheet" href="/adminlte/plugins/fontawesome/css/all.min.css" />
        </Head>

        <body className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed">
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
