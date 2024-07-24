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
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="28" height="40" viewBox="0 0 58.000000 84.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)">
              <path d="M313 795 c-10 -11 -5 -13 27 -10 25 2 43 -2 48 -10 4 -8 14 -10 27
 -4 19 7 19 8 -2 8 -12 1 -25 6 -28 11 -4 6 -11 8 -16 5 -5 -4 -9 -1 -9 6 0 9
 -3 9 -14 0 -8 -7 -16 -8 -18 -2 -1 5 -8 3 -15 -4z"/>
              <path d="M196 785 c10 -8 23 -15 28 -15 6 0 1 7 -10 15 -10 8 -23 15 -28 15
 -6 0 -1 -7 10 -15z"/>
              <path d="M244 788 c10 -6 22 -6 26 -2 5 5 -3 10 -18 11 -22 1 -24 0 -8 -9z" />
              <path d="M450 790 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4
 -4 -4 -10z"/>
              <path d="M82 784 c3 -3 21 -7 39 -9 18 -3 37 -9 43 -15 13 -13 26 -13 26 0 0
 6 -3 9 -7 8 -5 -1 -21 4 -36 10 -29 12 -75 17 -65 6z"/>
              <path d="M472 767 c-6 -7 -7 -19 -3 -26 6 -9 10 -5 13 13 6 30 5 31 -10 13z" />
              <path d="M50 740 c-10 -6 -3 -13 25 -24 21 -9 39 -15 40 -14 1 2 -10 13 -24
 25 -18 14 -32 18 -41 13z"/>
              <path d="M500 744 c0 -13 18 -39 24 -34 2 3 -2 14 -10 24 -8 11 -14 16 -14 10z" />
              <path d="M135 730 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
 -8 -4 -11 -10z"/>
              <path d="M60 679 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5
 -10 -11z"/>
              <path d="M500 668 c0 -4 6 -8 14 -8 8 0 17 4 20 8 2 4 -4 8 -15 8 -10 0 -19
 -4 -19 -8z"/>
              <path d="M70 652 c0 -7 -7 -12 -15 -12 -8 0 -15 -4 -15 -10 0 -5 7 -10 15 -10
 17 0 32 27 21 37 -3 4 -6 1 -6 -5z"/>
              <path d="M193 633 c-27 -40 -26 -192 1 -222 27 -29 43 -26 62 12 36 68 13 237
 -31 237 -8 0 -23 -12 -32 -27z"/>
              <path d="M343 633 c-25 -38 -25 -178 0 -216 42 -64 82 -10 82 108 0 119 -41
 172 -82 108z"/>
              <path d="M56 583 c5 -23 2 -32 -9 -35 -14 -2 -13 -7 4 -28 18 -22 19 -23 9 -2
 -7 15 -7 22 0 22 13 0 13 40 0 60 -7 11 -8 6 -4 -17z"/>
              <path d="M536 587 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" />
              <path d="M530 550 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0 -16
 -4 -16 -10z"/>
              <path d="M530 510 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3 -15
 1 -15 -4z"/>
              <path d="M90 433 c0 -6 9 -21 21 -34 l20 -24 -17 30 c-24 39 -24 40 -24 28z" />
              <path d="M487 407 l-17 -32 20 24 c17 20 26 41 18 41 -2 0 -11 -15 -21 -33z" />
              <path d="M210 360 c0 -14 29 -20 93 -20 58 0 100 12 81 22 -15 9 -174 7 -174
 -2z"/>
              <path d="M422 340 c-75 -50 -182 -49 -248 3 l-26 20 -21 -22 c-12 -11 -16 -21
 -10 -21 6 0 9 -9 6 -20 -9 -34 18 -110 52 -146 41 -43 91 -64 142 -59 97 9
 158 73 172 180 l7 50 16 -30 c10 -16 17 -25 18 -19 0 10 -56 94 -63 94 -1 0
 -21 -14 -45 -30z m47 -60 c1 -49 -37 -120 -78 -147 -41 -28 -108 -30 -158 -6
 -60 28 -103 117 -88 182 l6 30 42 -22 c63 -33 170 -31 223 4 44 30 52 24 53
 -41z"/>
              <path d="M531 173 c0 -13 -13 -30 -27 -40 -25 -16 -27 -16 -40 2 -15 20 -18
 17 -8 -9 16 -42 93 6 81 51 -4 14 -5 13 -6 -4z"/>
              <path d="M71 160 c-1 -26 29 -60 53 -60 23 0 37 18 35 43 0 7 -4 2 -9 -10 -15
 -37 -51 -27 -69 17 -5 14 -10 18 -10 10z"/>
              <path d="M182 68 c-2 -38 2 -49 17 -58 24 -12 78 -13 85 -1 3 4 -6 6 -19 3
 -14 -2 -36 -1 -49 2 -21 5 -25 13 -29 54 l-3 47 -2 -47z"/>
              <path d="M432 68 c-2 -42 -5 -48 -27 -54 -14 -3 -36 -4 -50 -2 -13 3 -22 1
 -19 -3 8 -14 68 -11 88 4 13 10 16 23 13 57 l-4 45 -1 -47z"/>
              <path d="M292 50 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
              <path d="M322 50 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
            </g>
          </svg>
          {/* <img src="./v2/img/logo.png"
            style={{ ...imgStyles }} /> */}
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
