//The exact param disables the partial matching for a route 
//and makes sure that it only returns the route if the path is an EXACT match to the current url.
const Routing = () => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/cv" component={CV} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/old" component={() => {
      window.location.href = window.location.origin + "/old"
      return null; // return <></>
    }} />
    <Route component={NotFound} />
  </Routes>
)

const Navbar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false)

  const toggleSideBar = () => setIsShowSideBar(!isShowSideBar);
  const showSideBar = () => setIsShowSideBar(true)
  const hideSideBar = () => setIsShowSideBar(false)

  const styles = `
   .navbar {
      height: var(--navBarHeight);
      background-color: var(--navBarBGColor);
      position: fixed;
      top: 0;
      width: 100%
    }

    .navbar_container {
      display: flex;
      justify-content: center; /*space-between;*/
      align-items: center;
      margin: 0 auto;
      padding: 10px 10px;
    }

    .nav-elements ul {
      display: flex;
      justify-content: flex-start; /*space-between;*/
      list-style-type: none;
    }

    .nav-elements ul a {
      font-size: 16px;
      font-weight: 400;
      color: #2f234f;
      text-decoration: none;
    }

    .nav-elements ul a.active {
      color: #574c4c;
      font-weight: 500;
      position: relative;
    }

    .nav-elements ul a.active::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #574c4c;
    }

    .icon-darkmode {
      margin-left: auto;
      filter: invert(1);
    }

   /* Mobile First */
  @media only screen and (max-width: 649px) {
    /*.content-move {
      margin-left: 250px;
    }*/

    .nav-elements {
      margin-left: 0px;
    }

    .icon-hamburger {
      display: block;
      cursor: pointer;
      margin-left: 15px;
      border: 2px solid white;
    }

    .icon-darkmode {
      margin-right: 10px;
    }

    .nav-elements {
      position: absolute;
      left: 0;
      top: var(--navBarHeight);
      background-color: wheat;
      opacity: 0.98;
      width: 0px;
      height: calc(100vh - var(--navBarHeight));
      transition: all 0.1s ease-in;
      overflow: hidden;
      border: unset;
    }

    .nav-elements.active {
      width: 150px;
      border: 2px solid white;
    }
    .nav-elements ul {
      display: flex;
      flex-direction: column;
    }

    .nav-elements ul li {
      margin-right: unset;
      margin-top: 22px;
      margin-left: 22px;
    }

    .title_mobile {
      position: absolute;
    }
  }

  /* Desktop Later */
  @media only screen and (min-width: 650px) {

    /* Lock Navbar width to 1000px */
    .navbar_container {
      max-width: var(--navBarElementMaxWidth);
    }

    .logo {
      margin-left: 20px;
    }

    .icon-darkmode {
      margin-right: 20px;
    }

    .icon-hamburger {
      display: none;
      padding: 0 10px;
    }

    .nav-elements {
      margin-left: 60px;
    }

    .nav-elements ul li:not(:last-child) {
      margin-right: 40px;
    }

    .title_mobile {
      display: none;
    }
  }
`
  const changePathToTitle = (path = '/') => {
    if(path === '/' /*|| path === '/home'*/){
      //return 'TORLON DEV V2'
      return 'COMING SOON'
    }

    return path.split('/')[1].toUpperCase()
  }

  return (
    <>
      <style>{styles}</style>
      <nav className="navbar">
        <div className="navbar_container">
          <div className="logo">
            <NavLink to="/" onClick={() => setIsShowSideBar(false)}>
              <img src="./v2/img/logo.png" style={{ 'height': 'calc(var(--navBarHeight) - 20px)', 'width': '28px' }} />
            </NavLink>
          </div>
          <div className="icon-hamburger" onClick={toggleSideBar}>
            <Hamburger />
          </div>

          <div className="title_mobile text-xl font-semibold">
            <span>{changePathToTitle(useLocation().pathname)}</span>
          </div>
          <div className={`nav-elements ${isShowSideBar ? "active" : ""}`}>
            <ul>
              {
                // <li>
                //   <NavLink to="/home">Home</NavLink>
                // </li>
              }
              <li>
                <NavLink to="/cv" onClick={hideSideBar}>CV</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" onClick={hideSideBar}>Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={hideSideBar}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/old" target="_blank">Torlon Dev V1</NavLink>
              </li>

            </ul>
          </div>
          <div className="icon-darkmode" onClick={() => {}}>
              <DarkMode />
          </div>
        </div>
      </nav>
      <div alignItems="center" className={isShowSideBar ? "content-move m-auto" : 'm-auto'} style={{ paddingTop: 'var(--navBarHeight)', 'backgroundColor': 'white', "maxWidth": "1000px" }}>
        <Routing />
      </div>
    </>
  );
};

const Hamburger = () => {
  const props = {
    className: 'block h-8 w-8',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '1.9',
    stroke: 'currentColor',
    'aria-hidden': 'true'
  }

  return <svg {...props}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
}

const DarkMode = () => {
  return <img src="./v2/img/darkmode.png" style={{ 'height': '32px', 'width': '32px' }} />
}