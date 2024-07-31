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
        ` .cover_home {
            white-space: nowrap;
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
      aspectRatio: '1100 / 600',
      position: 'relative',
      textAlign: 'center',
      textShadow: 'var(--BGColor) -3px 0px, var(--BGColor) 0px 3px, var(--BGColor) 3px 0px, var(--BGColor) 0px -3px',
    }}>
      <img src="v2/img/cover1.jpg"
        style={{ width: '100%', height: '100%' }}
        loading="eager"
      />
      <div className="flex flex-col justify-center items-center"
        style={{
          position: 'absolute', top: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
        <div>{lang.hello_world[l].toUpperCase()}</div><br />
        <div>{lang.i_am_developer[l].toUpperCase()}</div><br />
        <div>{lang.i_like_coding[l].toUpperCase()}</div>
      </div>
      <div id="animation_falling" className="animationFalling"
        style={{
          position: 'absolute', top: 0,
          width: '100%', height: '100%',
          backgroundColor: 'transparent'
        }}
      >
      </div>
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
