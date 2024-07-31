const Home = () => {
  const { lang, currentLanguage: l, isShowSideBar } = useContext(Context)

  const styleTextMobile =  `clamp(20px, ${isShowSideBar ? '4vw': '6vw'}, 36px)`
  const styleTextMobileFB =  `clamp(16px, ${isShowSideBar ? '1vw': '5vw'}, 44px)`
  return <>
    <style>
      {
        ` .cover_home {
            white-space: nowrap;
          }
        ` + mobileCSS(`
          .cover_home {
            font-size: ${isFBApp ? styleTextMobileFB: styleTextMobile};
            border: 5px solid var(--color);
          }
        `) + desktopCSS(`
          .cover_home {
            font-size: clamp(36px, 6vw, 60px);
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
        <div>{lang.hello_world[l].toUpperCase()}</div><br/>
        <div>{lang.i_am_developer[l].toUpperCase()}</div><br/>
        <div>{lang.i_like_coding[l].toUpperCase()}</div>
      </div>
    </div>
  </>
}
