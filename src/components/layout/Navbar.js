export default function Navbar() {
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Chat
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Login</a>
            </li>
            <li>
              <a href="badges.html">Singup</a>
            </li>
            <li>
              <a href="collapsible.html">Loguout</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Login</a>
        </li>
        <li>
          <a href="badges.html">Singup</a>
        </li>
        <li>
          <a href="collapsible.html">Logout</a>
        </li>
      </ul>
    </>
  );
}
