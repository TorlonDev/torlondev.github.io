const Home = () => {
  const { lang, currentLanguage: l, isShowSideBar } = useContext(Context)

  const styleTextMobile = `clamp(20px, ${isShowSideBar ? '4vw' : '6vw'}, 36px)`
  const styleTextMobileFB = `clamp(16px, ${isShowSideBar ? '1vw' : '5vw'}, 42px)`

  // componentDidMount
  useEffect(() => {
    load_snow()
    spring_falling()
    raining()
    btc_falling()

    document.getElementById('btc_falling').scrollIntoView({
      behavior: 'smooth', block: 'nearest', inline: 'center'
    });

    setTimeout(()=> {
      document.getElementById('snow_falling').scrollIntoView({
        behavior: 'smooth', block: 'nearest', inline: 'center'
      });
    }, 1000)
  }, []);

  return <>
    <style>
      {
        ` 
          .cover_home {
            text-shadow: var(--BGColor) -3px 0px, var(--BGColor) 0px 3px, var(--BGColor) 3px 0px, var(--BGColor) 0px -3px;
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
          @keyframes btcfall {
              from {
                  transform: translateY(0) rotate(1deg); /* Start above the viewport */
              }
              to {
                  transform: translateY(90vh) rotate(360deg); /* End below the viewport */
              }
          }
          .leaf {
            position: absolute;
            width: 20px; /* Width of the leaf */
            height: 20px; /* Height of the leaf */
            border-radius: 50% 50% 50% 0; /* Leaf shape */
            transform: rotate(-45deg); /* Rotate to make it more leaf-like */
            opacity: 0.8; /* Slightly transparent */
            animation: springfall linear infinite;
          }

          @keyframes springfall {
              from {
                  transform: translate(0, 0) rotate(1deg) scale(0.2);
              }
              to {
                  transform: translate(-150px, 90vh) rotate(360deg) scale(0.8);
              }
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
        `) + desktopCSS(`
          .cover_home {
            font-size: clamp(36px, ${isFBApp ? '5vw' : '6vw'}, 60px);
            border: 10px solid var(--color);
          }
        `)
      }
    </style>
    <div className="cover_home" style={{
      aspectRatio: '1000 / 550',
      position: 'relative',
      overflow: 'hidden', overflowX: 'scroll',
      whiteSpace: 'nowrap'
    }}>
      <div id="snow_falling" style={{
        backgroundImage: 'url(v2/img/cover2.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <canvas id="canvas_snow_falling" style={{ width: '100%', height: '100%', }} />
        {/* <div style={{ zIndex: '999',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <span>{'Test'}</span><br /><br />
          <span>{'Test'}</span><br /><br />
          <span>{'Test'}</span>
        </div> */}
      </div>

      <div id="spring_falling" style={{
        backgroundImage: 'url(v2/img/cover3.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        {/* <div style={{ zIndex: '999', position: 'absolute', top: '50%', left: '150%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <span>{'Test 2'}</span><br /><br />
          <span>{'Test 2'}</span><br /><br />
          <span>{'Test 2'}</span>
        </div> */}
      </div>

      <div id="rain_falling" style={{
        backgroundImage: 'url(v2/img/cover1.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        {/* <div style={{ zIndex: '999',position: 'absolute', top: '50%', left: '250%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_like_coding[l].toUpperCase()}</span>
        </div> */}
      </div>

      <div id="btc_falling" style={{
        backgroundImage: 'url(v2/img/cover4.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        {/* <div style={{ zIndex: '999', position: 'absolute', top: '50%', left: '350%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <span>{'Test 3'}</span><br /><br />
          <span>{'Test 3'}</span><br /><br />
          <span>{'Test 3'}</span>
        </div> */}
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
