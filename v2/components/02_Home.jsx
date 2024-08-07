const Home = () => {
  const {
    lang, currentLanguage: l, isShowSideBar,
  } = useContext(Context)

  const styleTextMobile = `clamp(20px, ${isShowSideBar ? '4vw' : '6vw'}, 36px)`
  const styleTextMobileFB = `clamp(16px, ${isShowSideBar ? '1vw' : '5vw'}, 42px)`

  const scrollToCover = (idCover = 'snow_falling') => {
    document.getElementById(idCover).scrollIntoView({
      block: 'nearest', inline: 'center'
    });
  }

  const ArrowChangeCover = ({ direction = 'right', idCoverTo = 'spring_falling', leftAbsolute = '90%' }) => {
    return <div className="change_cover cover_content_center" style={{ left: leftAbsolute }}
      onClick={() => { scrollToCover(idCoverTo) }}>
      <span class={`fa-solid fa-arrow-${direction}`}></span>
    </div>
  }

  // componentDidMount
  useEffect(() => {
    load_snow()
    spring_falling()
    raining()
    btc_falling()
  }, []);

  return <>
    <style>
      {
        ` 
          .cover_home {
            text-shadow: var(--BGColor) -3px 0px, var(--BGColor) 0px 3px, var(--BGColor) 3px 0px, var(--BGColor) 0px -3px;
          }
          .leaf {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50% 50% 50% 0; /* Leaf shape */
            transform: rotate(-45deg); /* Rotate to make it more leaf-like */
            opacity: 0.8;
            animation: springfall linear infinite;
          }
          .raindrop {
            position: absolute;
            width: 2px;
            height: 15px;
            background: rgba(255, 255, 255, 0.9); /* Light color for the raindrops */
            border-radius: 50%;
            opacity: 0.9;
            animation: fall linear infinite;
          }
          .btc {
            position: absolute;
            width: 28px;
            height: 28px;
            animation: btcfall linear infinite;
          }
          @keyframes fall {
            from {
                transform: translateY(0); /* Start above the viewport */
            }
            to {
                transform: translateY(90vh); /* End below the viewport */
            }
          }
          @keyframes springfall {
            from {
                transform: translate(0, 0) rotate(1deg) scale(0.2);
            }
            to {
                transform: translate(-150px, 90vh) rotate(360deg) scale(0.8);
            }
          }
          @keyframes btcfall {
            from {
                transform: translateY(0) rotate(1deg);
            }
            to {
                transform: translateY(90vh) rotate(360deg);
            }
          }

          .fa-arrow-left {
            width: 100%;
            height: 100%;
          }

          .fa-arrow-right {
            width: 100%;
            height: 100%;
          }

          .fa-arrow-left > path {
            stroke: var(--BGColor);
            stroke-width: 25px;
          }

          .fa-arrow-right > path {
            stroke: var(--BGColor);
            stroke-width: 25px;
          }

          .cover_content_center {
            z-index: 99;
            position: absolute; 
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            align-content: center;
          }
        ` + mobileCSS(`
          .cover_home {
            font-size: ${isFBApp ? styleTextMobileFB : styleTextMobile};
            border: 5px solid var(--color);
          }
          .raindrop {
            width: 1px;
            height: 6px;
          }
          .btc {
            width: 18px;
            height: 18px;
          }
          .change_cover {
            width: 50px;
            height: 50px;
            cursor: pointer;
          }
        `) + desktopCSS(`
          .cover_home {
            font-size: clamp(36px, ${isFBApp ? '5vw' : '6vw'}, 60px);
            border: 10px solid var(--color);
          }
          .change_cover {
            width: 70px;
            height: 70px;
            cursor: pointer;
          }
        `)
      }
    </style>
    <div className="cover_home" style={{
      aspectRatio: '1000 / 550',
      position: 'relative',
      overflow: 'hidden', overflowX: 'hidden',
      whiteSpace: 'nowrap'
    }}>
      <div id="snow_falling" style={{
        backgroundImage: 'url(v2/img/cover2.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <canvas id="canvas_snow_falling" style={{ width: '100%', height: '100%', }} />
        <div className="cover_content_center" style={{ left: '50%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_cool[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='spring_falling' leftAbsolute = '90%'/>
      </div>

      <div id="spring_falling" style={{
        backgroundImage: 'url(v2/img/cover3.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <ArrowChangeCover direction='left' idCoverTo='snow_falling' leftAbsolute = '110%'/>
        <div className="cover_content_center" style={{ left: '150%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_single[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='rain_falling' leftAbsolute = '190%'/>
      </div>

      <div id="rain_falling" style={{
        backgroundImage: 'url(v2/img/cover1.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <ArrowChangeCover direction='left' idCoverTo='spring_falling' leftAbsolute = '210%'/>
        <div className="cover_content_center" style={{ left: '250%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_love_coding[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='btc_falling' leftAbsolute = '290%'/>
      </div>

      <div id="btc_falling" style={{
        backgroundImage: 'url(v2/img/cover4.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <ArrowChangeCover direction='left' idCoverTo='rain_falling' leftAbsolute = '310%'/>
        <div className="cover_content_center" style={{ left: '350%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_trader[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_love_trading[l].toUpperCase()}</span>
        </div>
      </div>
      {/* <img src="v2/img/cover1.jpg"
        style={{ display: 'inline', width: '100%', height: '100%' }}
        loading="eager"
      />
      <img src="v2/img/cover2.jpg"
        style={{ display: 'inline', width: '100%', height: '100%' }}
        loading="eager"
      /> */}
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--BGColor)',
      color: 'var(--color)',
      border: 'unset',
      textShadow: 'unset'
    }}>
      <span>{lang.coming_soon[l]}</span>
    </div>
  </>
}
