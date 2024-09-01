const langAuto = {
  stydy_life: {
    EN: 'Student Life',
    TH: 'ชีวิตสมัยเรียน',
    JP: 'がくせいじだい',
    CN: '学生时代'
  }
}

const AutoBiography = () => {
  const { lang, currentLanguage: l } = useContext(Context)
  return <div className="py-4">
    <style>{`

    ` + mobileCSS(`
      .ifr1 {
        
      }
    `) + desktopCSS(`
      .ifr1 {

      }
    `)}</style>

    <div className="fb_wrapper" style={{ display: "flex", flexDirection: "row", gap: '6px', justifyContent: 'center', flexWrap: 'wrap', width: '100%', minHeight: '100vh' }}>
      <div style={{ width: '324px', height: `${isFBApp ? '623px' : '553px'}` }}>
        <span className="text-xl">2010-2015</span>
        <a href="https://www.facebook.com/tor.onlyalone" target="_blank">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D692949137434104%26set%3Da.255540504508305&show_text=false&width=324"
            width="324" height={`${isFBApp ? '623px' : '553px'}`} style={{ overflow: 'hidden', pointerEvents: 'none', border: 'none' }} frameborder="0" ></iframe>
        </a>
      </div>
      <div style={{ width: '324px', height: `${isFBApp ? '490px' : '440px'}` }}>
        <span className="text-xl">2016-2017</span>
        <a href="https://www.facebook.com/torn.onlyalone" target="_blank">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D378241239184959%26set%3Da.131442370531515&show_text=false&width=324"
            width="324" height={`${isFBApp ? '490px' : '440px'}`} style={{ overflow: 'hidden', pointerEvents: 'none', border: 'none' }} frameborder="0" ></iframe>
        </a>
      </div>
      <div style={{ width: '324px', height: `${isFBApp ? '403px' : '373px'}` }}>
        <span className="text-xl">2017-2023</span>
        <a href="https://www.facebook.com/tron.json" target="_blank">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D1359321627882023%26set%3Da.104674606680071&show_text=false&width=324"
            width="324" height={`${isFBApp ? '403px' : '373px'}`} style={{ overflow: 'hidden', pointerEvents: 'none', border: 'none' }} frameborder="0" ></iframe>
        </a>
      </div>
    </div>
    <br />< br /><br />< br />
  </div>
}
