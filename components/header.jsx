import Link from 'next/link';

import { socialLinks } from '../lib/utils';

export default function Header() {
  return (
    <>
      <header className="app-header">
        <nav className="app-header-nav flex">
          <Link href="/home">
            <a className="app-header-left-items flex">
              <HeaderLogo />
            </a>
          </Link>

          <div className="app-header-right-items-parent flex">
            <HeaderLeftItems />
          </div>
        </nav>
      </header>
    </>
  );
}
function HeaderLogo() {
  return (
    <>
      <div className="app-nav-title flex">
        <span className="app-nav-title-item label_header_1">Faouzi</span>
        <span className="app-nav-title-item label_header_2">Web</span>
        <span className="app-nav-title-item label_header_3">Courses</span>
      </div>
    </>
  );
}

function HeaderLeftItems() {
  return (
    <div className="app-header-right-items flex">
      <label
        id="switch"
        className="switch flex"
        style={{ visibility: 'visible', display: 'block' }}>
        <input type="checkbox" id="slider" className="hidden" />
        <span className="slider round flex"></span>
      </label>
      <div className="app-header-social-container">
        <Link href={socialLinks.github}>
          <a className="app-header-social up app-header-github-icon">
            <i className="fab fa-github-square"></i>
          </a>
        </Link>
        <Link href={socialLinks.facebook}>
          <a className="app-header-social up app-header-facebook-icon">
            <i className="fab fa-facebook-square "></i>
          </a>
        </Link>
        <Link href={socialLinks.linkedin}>
          <a className="app-header-social up app-header-facebook-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}
