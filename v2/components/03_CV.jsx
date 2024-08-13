const langCV = {
  cv_developing: {
    EN: 'New CV is developing.',
    TH: 'ซีวีเวอร์ชันใหม่กำลังอยู่ในระหว่างการพัฒนา',
    CN: '新的简历正在开发中',
    JP: '新しいシーブイが開発中です。'
  },
  go_old_cv: {
    EN: 'Go to old version',
    TH: 'ไปที่ซีวีเวอร์ชันเก่า',
    CN: '转到旧版本',
    JP: '古いバージョンに移動する'
  },
  my_full_name: {
    EN: 'NATTHAKORN NAKHASENO',
    TH: 'ณัฐกรณ์ นาคะเสโน',
    CN: 'NATTHAKORN NAKHASENO',
    JP: 'NATTHAKORN NAKHASENO',
  },
  my_role: {
    EN: 'Full Stack Developer / Software Engineer.',
    TH: 'นักพัฒนาเต็มระบบ / วิศวกรซอฟต์แวร์',
    CN: '全栈开发者 / 软件工程师.',
    JP: 'フルスタック開発者 / ソフトウェア技術者。',
  },
  nickname: {
    EN: 'Nickname',
    TH: 'ชื่อเล่น',
    CN: '昵称',
    JP: '愛称',
  },
  nationality: {
    EN: 'Nationality',
    TH: 'สัญชาติ',
    CN: '国籍',
    JP: '国籍',
  },
  address: {
    EN: 'Address',
    TH: 'ที่อยู่',
    CN: '地址',
    JP: '住所',
  },
}

const CV = () => {
  const { currentLanguage: l } = useContext(Context)

  useEffect(() => {
    initMap()
  }, [])

  return <>
    <style>
      {
        `

        ` + mobileCSS(`

        `) + desktopCSS(`
          .wrapper_myself_img {
            height: 280px;
            background-color: var(--navBarBGColor);
            max-width: 250px;
          }
          .name_and_job {
            height: 220px;
            width: 100%;
            background-color: var(--nameCoverColor);
            margin-top: 30px;
            
          }
          .wrapper_under_image {
            min-width: 250px;
            max-width: 250px;
            background-color: var(--navBarBGColor);
            height: 100vh;
          }
        `)
      }
    </style>
    <div className={`${isFBApp ? 'text-lg': 'text-xl'} px-2 sm:px-4 flex !flex-col sm:!flex-row`}>
      <div className="wrapper_myself_img p-3 self-center items-center flex flex-col sm:self-start" style={{ minWidth: '250px' }}>
        <img className="self-center text-nowrap" src="v2/img/tron_lum.jpg" style={{ minWidth: '200px', height: '250px', borderRadius: '50%' }} />
      </div>

      <div className="name_and_job self-center flex flex-col items-center justify-start sm:self-start sm:items-start sm:justify-center sm:px-4 md:px-5">
        <p class={`text-nowrap ${isFBApp? 'text-lg sm:text-xl md:text-2xl lg:text-4xl': 'text-xl sm:text-2xl md:text-3xl lg:text-5xl'}`}>{langCV.my_full_name[l]}</p>
        <p class="text-base md:text-xl text-nowrap m-1">{langCV.my_role[l]}</p>
        <p class="text-base md:text-xl text-nowrap m-1 mt-0">tron.natthakorn@engineer.com</p>
        <hr style={{ 'borderTop': '3px solid ', 'width': '100%' }} class=" mx-auto my-4" />
      </div>
    </div>

    <div className={`${isFBApp ? 'text-lg': 'text-xl'} px-2 sm:px-4 flex !flex-col sm:!flex-row`}>
      <div style={{ flexWrap: 'wrap' }} className={`${isFBApp ? 'text-xs': 'text-sm'} wrapper_under_image flex flex-row items-center justify-center px-3 sm:px-0 sm:flex-col sm:justify-start`}>
        <p>{langCV.nickname[l]}: {l === 'TH' ? 'ต็อน' : 'Tron'}</p>
        <p className="ml-5 sm:ml-0">{langCV.nationality[l]}: {l === 'TH' ? 'ไทย' : 'Thai'}</p> <div className="basis-full sm:basis-0"></div>
        <div style={{ flexWrap: 'wrap' }} className="flex flex-row justify-center sm:flex-col sm:items-center my-1">
          <p className="whitespace-nowrap">{langCV.address[l]}: <span>{l === 'TH' ? 'ถนนวิทยุ เขตปทุมวัน' : 'Wireless Rd. Pathumwan'}</span></p><p class="ml-1 sm:ml-0">{l === 'TH' ? 'กรุงเทพฯ 10330.' : 'Bangkok 10330.'}</p>
        </div>
        <div id="map_tol" style={{ width: '90%', height: '120px' }}></div>
      </div>
      <div style={{ height: '500px' }} className="p-4 sm:pt-0 flex flex-col items-center sm:items-start">
        <span>{langCV.cv_developing[l]}</span>
        <a className="underline a_link" target="_blank" href="./old/#/cv">
          {langCV.go_old_cv[l]}</a>
      </div>
    </div>

  </>
}