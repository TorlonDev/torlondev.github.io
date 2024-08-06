const Home = () => {
  const { lang, currentLanguage: l, isShowSideBar } = useContext(Context)

  const styleTextMobile = `clamp(20px, ${isShowSideBar ? '4vw' : '6vw'}, 36px)`
  const styleTextMobileFB = `clamp(16px, ${isShowSideBar ? '1vw' : '5vw'}, 42px)`

  // componentDidMount
  useEffect(() => {
    raining()
  }, []);

  return <>
    <style>
      {
        ` 
          /*.cover_home {
            white-space: nowrap;
            -ms-overflow-style: none; 
            scrollbar-width: none;
          }
          .cover_home::-webkit-scrollbar {
            display: none;
          }*/
          .cover_home {
            text-shadow: var(--BGColor) -3px 0px, var(--BGColor) 0px 3px, var(--BGColor) 3px 0px, var(--BGColor) 0px -3px;
          }
          .raindrop {
              position: absolute;
              width: 2px;
              height: 15px;
              background: rgba(255, 255, 255, 0.6); /* Light color for the raindrops */
              border-radius: 50%;
              opacity: 0.7;
              animation: fall linear infinite;
          }
          @keyframes fall {
              from {
                  transform: translateY(0); /* Start above the viewport */
              }
              to {
                  transform: translateY(90vh); /* End below the viewport */
              }
          }
        ` + mobileCSS(`
          .cover_home {
            font-size: ${isFBApp ? styleTextMobileFB : styleTextMobile};
            border: 5px solid var(--color);
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
      <div id="rain_falling" style={{
        backgroundImage: 'url(v2/img/cover1.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}
      ><div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_like_coding[l].toUpperCase()}</span>
        </div>
      </div>
      <div style={{
        backgroundImage: 'url(v2/img/cover2.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
        textAlign: 'center',
      }}>
      </div>


      {/* <div style={{ width: '100%', height: '100%', 
        whiteSpace: 'nowrap', overflow: 'hidden', 
        overflowX: 'hidden', overflowY: 'hidden' }}> */}
      {/* <img src="v2/img/cover1.jpg"
          style={{ display: 'inline', width: '100%', height: '100%' }}
          loading="eager"
        />
        <img src="v2/img/cover2.jpg"
          style={{ display: 'inline', width: '100%', height: '100%' }}
          loading="eager"
        /> */}

      {/* <div style={{
          backgroundImage: 'url(v2/img/cover1.jpg)',
          display: 'inline-block',
          aspectRatio: '1000 / 550',
          width: '100%', height: '100%',
          backgroundSize: '100% 100%',
          textAlign: 'center', 
        }}> */}
      {/* <div className="flex flex-col items-center"
            style={{
              justifyContent: 'space-around',
              position: 'absolute', top: 0,
              width: '100%', height: '90%',
              backgroundColor: 'rgba(0,0,0,0.2)'
            }}> */}
      {/* <span>{lang.hello_world[l].toUpperCase()}</span><br/>
            <span>{lang.i_am_developer[l].toUpperCase()}</span><br/>
            <span>{lang.i_like_coding[l].toUpperCase()}</span> */}
      {/* </div> */}
      {/* <div id="rain_falling" className="animationFalling"
            style={{
              position: 'absolute', top: 0,
              width: '100%', height: '90%',
              backgroundColor: 'transparent'
            }}
          >
          </div> */}
      {/* </div> */}
      {/* <div style={{
          backgroundImage: 'url(v2/img/cover2.jpg)',
          display: 'inline-block',
          width: '100%', height: '100%',
          backgroundSize: '100% 100%',
        }}>
          
        </div> */}
      {/* </div> */}
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--BGColor)'
    }}>
    </div>
  </>
}
