const Home = () => {
  const { lang, currentLanguage: l } = useContext(Context)

  return <>
    <style>
      {
        ` .text_banner {
            white-space: nowrap;
          }
        ` + mobileCSS(`
          .text_banner {
            font-size: clamp(24px, 4vw, 36px);
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
        loading="lazy"
      />
      <div className="text_banner flex flex-col justify-center items-center"
        style={{
          position: 'absolute', top: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
        <div>{lang.hello_world[l].toUpperCase()}</div><br />
        <div>{lang.i_am_developer[l].toUpperCase()}</div><br />
        <div>{lang.new_ver_developing[l].toUpperCase()}</div>
      </div>
    </div>
  </>
}
