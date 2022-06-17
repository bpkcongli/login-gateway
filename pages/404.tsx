import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="page-notfound">
        <div className="wrapper d-flex align-items-center justify-content-center">
          <h1>:(</h1>
          <div>
            <h2>404 - Page Not Found</h2>
            <p>
              Halaman yang kamu cari tidak tersedia,
              <Link href="/">Kembali ke halaman utama</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
