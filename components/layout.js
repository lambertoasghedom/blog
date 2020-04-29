import Head from 'next/head';
import Link from 'next/Link';

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <nav>
          <Link href="/">
            <a>Lamberto</a>
          </Link>
          <ul>
            <li>
              <Link href="/">
                <a>Writings</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Newsletter</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <style jsx>{`
        .header {
          border-bottom: 1px solid #d8d8d8
        }
        nav {
          max-width: 800px;
          // margin: auto;
          padding: 3rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        ul {
          display: flex;
          list-style: none;
        }
        a {
          padding: 5px 10px;
          text-decoration: none;
        }
      `}</style>
    </>
  ) 
}