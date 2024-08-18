//The exact param disables the partial matching for a route 
//and makes sure that it only returns the route if the path is an EXACT match to the current url.
const Routing = () => (
  <Routes>
    <Route exact path="/" component={() => {
      window.location.href = window.location.origin + "/#/home"
      return <></>
    }} />
    <Route exact path="/old" component={() => {
      window.location.href = window.location.origin + "/old"
      return <></>
    }} />
    <Route exact path="/home" component={DefaultWrapper(<Home />)} />
    <Route exact path="/cv" component={DefaultWrapper(<CV />)} />
    <Route exact path="/blogs" component={DefaultWrapper(<Blogs />)} />
    <Route exact path="/life" component={DefaultWrapper(<Life />)} />
    <Route exact path="/projects" component={DefaultWrapper(<Projects />)} />
    <Route exact path="/time_machine" component={TimeMachine} />
    <Route component={DefaultWrapper(<NotFound />)} />
  </Routes>
)

const SideBarElements = ({ hideSideBar = () => { }, isShowSideBar = false }) => {
  const styles = `
    .sidebar-wrapper {
      display: flex;
      justify-content: flex-start; /*space-between;*/
      list-style-type: none;
      background-color: var(--navBarBGColor);
    }
    .sidebar-wrapper a {
      opacity: 0.6;
      font-weight: 500;
    }
    .sidebar-wrapper a.active {
      text-decoration: underline;
      text-underline-offset: 7px;
      text-decoration-thickness: 3px;
      opacity: 1;
      font-weight: 500;
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
    }
    .sidebar-wrapper .navlink {
      margin-right: 6px;
    }
   `)

  const { lang, currentLanguage: l } = useContext(Context)

  return <>
    <style>{styles}</style>
    <div className={`sidebar-wrapper ${isShowSideBar ? "active" : ""}`}>
      <NavLink className="navlink text-l whitespace-nowrap" to="/home" onClick={hideSideBar}>{lang.home?.[l]}</NavLink>
      <NavLink className="navlink text-l whitespace-nowrap" to="/cv" onClick={hideSideBar}>{lang.cv?.[l]}</NavLink>
      <NavLink className="navlink text-l whitespace-nowrap" to="/blogs" onClick={hideSideBar}>{lang.blogs?.[l]}</NavLink>
      <NavLink className="navlink text-l whitespace-nowrap" to="/life" onClick={hideSideBar}>{lang.life?.[l]}</NavLink>
      <NavLink className="navlink text-l whitespace-nowrap" to="/time_machine" onClick={hideSideBar}>{lang.time_machine?.[l]}</NavLink>
    </div>
  </>
}

const Logo = (props) => {
  const [isFastLogoSVG, setFastLogoSVG] = useState(true)
  const hideFastLogoSVG = () => setFastLogoSVG(false)

  const styles = `
    .img_logo {
      height: calc(var(--navBarHeight) - 20px);
      width: 28px;
    }
  `+ desktopCSS(`
    .logo_wrapper {
      margin-left: 20px;
    }
  `)

  return (
    <>
      <style>{styles}</style>
      <div className="logo_wrapper">
        <NavLink to="/home" {...props}>
          {isFastLogoSVG ? <FastLogoSVG className="img_logo" /> : <></>}
          <img style={isFastLogoSVG ? { display: 'none' } : {}} className="img_logo" src="./v2/img/logo.png" onLoad={hideFastLogoSVG} />
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
      margin-top: 3px;
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

  const { lang, currentLanguage: l } = useContext(Context)

  /** Why not hook useEffect */
  const changePathToTitle = (path = '/') => {
    if (path === '/' || path === '/home') {
      return ''
    }

    const firstPathWithoutSub = path.split('/')[1]

    return (lang[firstPathWithoutSub] || {})[l]
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

    <div className="title_mobile text-2xl font-medium">
      <span>{`${changePathToTitle(useLocation().pathname) || ''}`.toUpperCase()}</span>
    </div>
  </>
}

const MenuTopRight = () => {
  const wrapperStyles = `
    .top_right {
      margin-left: auto;
      margin-top: 0;
      margin-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 120px;
    }
  ` + desktopCSS(`
    .top_right {
      margin-right: 20px;
    }
  `)

  const DarkMode = () => {
    const [isFastDarkModeSVG, setFastDarkModeSVG] = useState(true)
    const hideFastDarkModeSVG = () => setFastDarkModeSVG(false)
    const [invertColor, setInvertColor] = useState(theme === 'DARK' ? 1 : 0)

    const toggleTheme = () => {
      if (theme === 'LIGHT') {
        theme = 'DARK'
        setInvertColor(1)
      } else {
        theme = 'LIGHT'
        setInvertColor(0)
      }
      setTheme(theme)
    }

    const iconDarkModeStyles = { 'height': '32px', 'width': '32px', 'filter': `invert(${invertColor})` }

    return <div style={{ cursor: 'pointer', marginRight: '10px' }} onClick={toggleTheme}>
      {isFastDarkModeSVG ? <FastDarkModeSVG style={iconDarkModeStyles} /> : <></>}
      <img src="./v2/img/darkmode.png"
        style={
          isFastDarkModeSVG ? { display: 'none' } : iconDarkModeStyles
        }
        onLoad={hideFastDarkModeSVG}
      />
    </div>
  }

  const LanguageChange = () => {
    const {
      currentLanguage, setCurrentLanguage,
      // isShowLangChoose, setIsShowLangChoose,
      isEN, isTH, isCN, isJP,
    } = useContext(Context)

    const toggleLangChoose = () => {
      setIsShowLangChoose(!isShowLangChoose)
    }

    const changeLanguageTo = (language = 'EN') => {
      return (e) => {
        e.stopPropagation() // Stop Bubble Parent Onclick (toggleLangChoose)
        setCurrentLanguage(language)
        setIsShowLangChoose(false)
      }
    }

    const underLineStyle = "underline underline-offset-4"

    return (
      <div className="language_change"
        style={{ marginRight: '25px', cursor: 'pointer' }}
        onClick={toggleLangChoose}>
        <span>{currentLanguage}</span>
        <div className="language_choose" id="language_choose_wrapper"
          style={{
            display: "none",
            // "display": isShowLangChoose ? 'block' : 'none',
            "position": 'absolute',
            top: '50px',
            'marginLeft': '-60px',
            backgroundColor: 'var(--subNavBarColor)',
            "width": '120px',
            'textAlign': 'center',
            padding: '12px',
            borderRadius: '7%'
          }}
        >
          <div className={`p-1 ${isEN ? underLineStyle : ''}`} style={isEN ? { textUnderlineOffset: '6px', fontWeight: '600' } : { opacity: '0.8' }} onClick={changeLanguageTo('EN')}>English</div>
          <div className={`p-1 ${isTH ? underLineStyle : ''}`} style={isTH ? { textUnderlineOffset: '6px', fontWeight: '600' } : { opacity: '0.8' }} onClick={changeLanguageTo('TH')}>ไทย</div>
          <div className={`p-1 ${isJP ? underLineStyle : ''}`} style={isJP ? { textUnderlineOffset: '6px', fontWeight: '600' } : { opacity: '0.8' }} onClick={changeLanguageTo('JP')}>にほんご</div>
          <div className={`p-1 ${isCN ? underLineStyle : ''}`} style={isCN ? { textUnderlineOffset: '6px', fontWeight: '600' } : { opacity: '0.8' }} onClick={changeLanguageTo('CN')}>中文</div>
        </div>
      </div>
    )
  }

  return <>
    <style>{wrapperStyles}</style>
    <div className="top_right">
      <LanguageChange />
      <DarkMode />
    </div>
  </>
}

const AddToHomeScreen = () => {
  const { lang, currentLanguage: l } = useContext(Context)

  const iconStyles = { 'height': '28px', 'width': '60px', color: 'var(--color)' }

  return <div id="install-app-btn" class="install-app-btn" style={{
    cursor: 'pointer',
    display: 'none', justifyContent: 'center', alignItems: 'center',
    flexDirection: 'column',
    marginRight: '50px'
  }}>
    <SVG_MobileApp style={iconStyles} />
    <span style={{ color: 'var(--color)' }} class="text-sm">{lang.add_to_home?.[l]}</span>
  </div>
}

const BackToTop = () => {
  const { lang, currentLanguage: l } = useContext(Context)

  const iconStyles = { 'height': '28px', 'width': '50px', color: 'var(--color)' }

  return <div style={{
    cursor: 'pointer',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    flexDirection: 'column',
  }}
    onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <SVG_ArrowUp style={iconStyles} />
    <span style={{ color: 'var(--color)' }} class="text-sm">{lang.back_to_top?.[l]}</span>
  </div>
}

const Navbar = () => {
  const {
    // setIsShowLangChoose, 
    isShowSideBar, setIsShowSideBar } = useContext(Context)

  const hideSideBar = () => {
    setIsShowSideBar(false)
    setIsShowLangChoose(false)
  }
  const toggleSideBar = () => {
    setIsShowSideBar(!isShowSideBar);
    setIsShowLangChoose(false)
  }

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
      <nav className="navbar_footer">
        <div className="navbar_footer_container">
          <AddToHomeScreen />
          <BackToTop />
        </div>
      </nav>
      <>
      </>
    </>
  )
}

const stylesNavBar = `
.navbar {
   height: var(--navBarHeight);
   background-color: var(--navBarBGColor);
   color: var(--navBarColor);
   position: fixed;
   z-index: 999;
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
  .navbar_footer {
   height: var(--navBarHeight);
   background-color: var(--navBarBGColor);
   color: var(--navBarColor);
   position: fixed;
   z-index: 999;
   bottom: 0;
   width: 100%;
   max-width: 100vw;
   border: 1px solid white;
  }

  .navbar_footer_container {
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;

   max-width: var(--navBarElementMaxWidth);
   padding: 8px;
 }
}`+ desktopCSS(`
  .navbar_container {
    padding: 6px;
  }
`)
