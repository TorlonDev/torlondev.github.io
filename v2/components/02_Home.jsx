const Home = () => {
  const { lang, currentLanguage: l, isShowSideBar } = useContext(Context)

  return <>
    <style>
      {
        ` .text_banner {
            white-space: nowrap;
          }
        ` + mobileCSS(`
          .text_banner {
            font-size: clamp(16px, ${isShowSideBar ? '3vw': isFBApp ? '4vw': '5vw'}, 28px);
          }
        `) + desktopCSS(`
          .text_banner {
            font-size: clamp(36px, 5vw, 50px);
          }
        `)
      }
    </style>
    <div style={{
      aspectRatio: '1100 / 550',
      position: 'relative',
      textAlign: 'center'
    }}>
      <img src="v2/img/cover1.jpg"
        style={{ width: '100%', height: '100%' }}
        loading="eager"
      />
      <div className="text_banner flex flex-col justify-center items-center"
        style={{
          position: 'absolute', top: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
        <div>{lang.hello_world[l].toUpperCase()}</div><br/>
        <div>{lang.i_am_developer[l].toUpperCase()}</div><br/>
        <div>{lang.new_ver_developing[l].toUpperCase()}</div>
      </div>
    </div>
  </>
}
