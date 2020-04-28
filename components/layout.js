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
              <Link href="/">
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
          max-width: 1040px;
          margin: auto;
          padding: 1rem 2rem;
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