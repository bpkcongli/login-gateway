import Head from 'next/head';
import {
  LOGIN_ADMIN,
  LOGIN_CS,
  LOGIN_FUNDING,
  LOGIN_LENDING,
} from '../config';

export default function Home() {
  const test = [
    {
      id: 'loginAdmin',
      title: 'Login Admin',
      url: LOGIN_ADMIN,
    },
    {
      id: 'loginCs',
      title: 'Login CS',
      url: LOGIN_CS,
    },
    {
      id: 'loginFunding',
      title: 'Login Funding',
      url: LOGIN_FUNDING,
    },
    {
      id: 'loginLending',
      title: 'Login Lending',
      url: LOGIN_LENDING,
    },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login Backoffice - Digital Community Bank</title>
      </Head>
      <div className="kc-wrapper">
        <div className="kc-container">
          <div className="kc-login-title">
            <h1 className="kc-headline2">DCB</h1>
          </div>
          <div className="kc-content">
            {test.map((each) => (
              <a href={each.url} id={`navigation-${each.id}`} key={each.id}>
                <div className="kc-box-navigation">
                  <p className="kc-box-navigation--label kc-headline4">{each.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
