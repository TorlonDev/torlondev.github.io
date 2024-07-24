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

const SideBarElements = ({ hideSideBar = () => { }, isShowSideBar = false }) => {
  const styles = `
    .sidebar-wrapper {
      display: flex;
      justify-content: flex-start; /*space-between;*/
      list-style-type: none;
      background-color: wheat;
    }
    .sidebar-wrapper a.active {
      text-decoration: underline;
      text-underline-offset: 7px;
      text-decoration-thickness: 3px;
      font-weight: 600;
      position: relative;
    }` + mobileCSS(`
    .sidebar-wrapper {
      flex-direction: column;
      position: absolute;
      left: 0;
      top: var(--navBarHeight);
      opacity: 0.98;
      width: 0px;
      height: calc(100vh - var(--navBarHeight));
      overflow: hidden;
      border: unset;

      margin-left: 0px;
    }
    .sidebar-wrapper.active {
      width: var(--sideBarWidth);
      border: 2px solid white;
    }
    .sidebar-wrapper .navlink {
      margin-top: 22px;
      margin-left: 22px;
      margin-right: unset;
    }`)
    + desktopCSS(`
    .sidebar-wrapper {
      margin-left: 25px;
    }
    .sidebar-wrapper a {
      padding: 10px;
    }`)

  return <>
    <style>{styles}</style>
    <div className={`sidebar-wrapper ${isShowSideBar ? "active" : ""}`}>
      { /*<NavLink to="/home">Home</NavLink>*/}
      <NavLink className="navlink text-l" to="/blogs" onClick={hideSideBar}>Blogs</NavLink>
      <NavLink className="navlink text-l" to="/projects" onClick={hideSideBar}>Projects</NavLink>
      <NavLink className="navlink text-l" to="/cv" onClick={hideSideBar}>CV</NavLink>
      <NavLink className="navlink text-l hide_on_desktop" to="/old" target="_blank">Old Website</NavLink>
    </div>
  </>
}

const Logo = (props) => {
  const imgStyles = {
    height: 'calc(var(--navBarHeight) - 20px)',
    width: '28px'
  }

  const styles = desktopCSS(`
    .logo {
      margin-left: 20px;
    }
  `)

  return (
    <>
      <style>{styles}</style>
      <div className="logo">
        <NavLink to="/" {...props}>
          <img src="./v2/img/logo.png"
            style={{ ...imgStyles }} />
        </NavLink>
      </div>
    </>
  )
}

const Hamburger = (props) => {
  const propsSvg = {
    className: 'block h-8 w-8',
    fill: 'none',
    viewBox: '0 0 24 24',
    'stroke-width': '1.9',
    stroke: 'currentColor',
    'aria-hidden': 'true'
  }

  const styles = mobileCSS(`
    .icon_hamburger {
      display: block;
      cursor: pointer;
      margin-left: 15px;
      border: 2px solid white;
    }
  `) + desktopCSS(`
    .icon_hamburger {
      display: none;
      padding: 0 10px;
    }
  `)

  return <>
    <style>{styles}</style>
    <div className="icon_hamburger" {...props} >
      <svg {...propsSvg}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  </>
}

const TitleMobile = () => {
  /** Why not hook useEffect */
  const changePathToTitle = (path = '/') => {
    if (path === '/' /*|| path === '/home'*/) {
      //return 'TORLON DEV V2'
      return 'COMING SOON'
    }

    return path.split('/')[1].toUpperCase()
  }

  const styles = mobileCSS(`
    .title_mobile {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  `) + desktopCSS(`
    .title_mobile {
      display: none;
    }
  `)

  return <>
    <style>{styles}</style>

    <div className="title_mobile text-l font-semibold">
      <span>{changePathToTitle(useLocation().pathname)}</span>
    </div>
  </>
}

const MenuTopRight = () => {
  const wrapperStyles = `
    .top_right {
      margin-left: auto;
      margin-top: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 65px;
    }
  ` + desktopCSS(`
    .top_right {
      margin-right: 20px;
    }
  `)

  const DarkMode = () => {
    return <div onClick={() => { }}>
      <img src="./v2/img/darkmode.png"
        style={{ 'height': '32px', 'width': '32px' }} />
    </div>
  }

  return <>
    <style>{wrapperStyles}</style>
    <div className="top_right">
      <div className="language-change">
        <span>EN</span>
        <div
          className="language-choose"
          style={{
            "display": "none",
            "position": 'absolute', top: '50px', 'marginLeft': '-40px', backgroundColor: 'green',
            "width": '100px', 'textAlign': 'center'
          }}
        >
          <span>EN</span><br />
          <span>TH</span>
        </div>
      </div>
      <DarkMode />
    </div>
  </>
}

const Navbar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false)

  const toggleSideBar = () => setIsShowSideBar(!isShowSideBar);
  const hideSideBar = () => setIsShowSideBar(false)

  const ContentWrapper = () => {
    const stylesContentWrapper = mobileCSS(`
      .content_move {
        margin-left: var(--sideBarWidth);
      }
    `)

    return <>
      <style>{stylesContentWrapper}</style>
      <div
        className={`m-auto ${isShowSideBar ? "content_move" : ''}`}
        onClick={hideSideBar}>
        <Routing />
      </div>
    </>
  }

  return (
    <>
      <style>{stylesNavBar}</style>
      <nav className="navbar">
        <div className="navbar_container">
          <Logo onClick={hideSideBar} />
          <Hamburger onClick={toggleSideBar} />
          <TitleMobile />
          <SideBarElements {...{ hideSideBar, isShowSideBar }} />
          <MenuTopRight />
        </div>
      </nav>
      <ContentWrapper />
    </>
  )
};

const stylesNavBar = `
.navbar {
   height: var(--navBarHeight);
   background-color: var(--navBarBGColor);
   color: var(--navBarColor);
   position: fixed;
   top: 0;
   width: 100%;
   max-width: 100vw;
 }

 .navbar_container {
   display: flex;
   justify-content: flex-start; /*center;space-between;*/
   align-items: center;
   margin: 0 auto;

   max-width: var(--navBarElementMaxWidth);
   padding: 8px;
 }
}`
