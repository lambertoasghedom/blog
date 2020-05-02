import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <nav>
          <Link href="/">
            <a style={{ color: 'black'  }}>Lamberto</a>
          </Link>
          <ul>
            <li>
              <Link href="/writings">
                <a style={{ color: 'black'  }}>Writings</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a style={{ color: 'black'  }}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/newsletter">
                <a style={{ color: 'black'  }}>Newsletter</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <style jsx>{`
        nav {
          max-width: 800px;
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