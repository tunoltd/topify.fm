import Link from 'next/link';

import Meta from './shared/Meta';
import Footer from './shared/Footer';

import '../styles/index.css';

const NavLink = props => (
  <Link href={props.href}>
    <a className={props.className ? props.className : null}>{props.label}</a>
  </Link>
);

const WebsiteLayout = props => (
  <div>
    <Meta />
    <header className="bg-black">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a className="font-semibold text-xl tracking-tight">topify.fm</a>
          </Link>
        </div>
        <div className="lg:flex-grow"></div>
        <div>
          <NavLink
            href="/auth"
            label="Sign in with Spotify"
            className="inline-block text-sm px-4 py-2 leading-none rounded-full text-white bg-green-500 hover:text-white hover:bg-green-600 mt-4 lg:mt-0"
          />
        </div>
      </nav>
    </header>
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default WebsiteLayout;
