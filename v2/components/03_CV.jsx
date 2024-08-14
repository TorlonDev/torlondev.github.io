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
  age: {
    EN: 'Age',
    TH: 'อายุ',
    CN: '年龄',
    JP: '年齢',
  },
  year: {
    EN: 'Year',
    TH: 'ปี',
    CN: '岁',
    JP: '歳',
  },
  month: {
    EN: 'Month',
    TH: 'เดือน',
    CN: '个月',
    JP: 'ヶ月',
  },
  day: {
    EN: 'Day',
    TH: 'วัน',
    CN: '天',
    JP: '日',
  }
}

const CV = () => {
  const { currentLanguage: l, isTH, isEN, isCalculateAge, setIsCalculateAge } = useContext(Context)
  const [age, setAge] = useState({ year: 2, month: 2, day: 2 })

  const setAgeAfterCalculate = () => {
    setAge(getAge("11/6/1992"))

    // No Server Attack No Socket Required.
    setInterval(() => {
      setAge(getAge("11/6/1992"))
    }, 7000)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initMap()

    if (!isCalculateAge) {
      const year_loop = (new Date().getFullYear() - 1992) - 1
      const maxTimeLoop = 5000
      const goodDevide = maxTimeLoop / year_loop

      for (let i = 1; i <= maxTimeLoop; i++) {
        setTimeout(function () {
          if (i < maxTimeLoop - 10) {
            setAge({
              year: Math.floor(i / goodDevide),
              month: randomIntFromInterval(2, 9),
              day: randomIntFromInterval(10, 28)
            })
          } else {
            setIsCalculateAge(true)
            setAgeAfterCalculate()
          }
        }, i)
      }
    } else {
      setAgeAfterCalculate()
    }
  }, [])

  return <>
    <style>
      {
        `

        ` + mobileCSS(`
          #map_tol {
            height: 140px;
            width: 300px;
          }

        `) + desktopCSS(`
          .wrapper_myself_img {
            height: 280px;
            background-color: var(--navBarBGColor);
            max-width: 250px;
          }
          .name_and_job {
            height: 160px;
            width: 680px;
            background-color: var(--nameCoverColor);
            margin-top: 30px;
          }

          #map_tol {
            height: 120px;
            width: 240px;
          }

          .cv_content {
            margin-top: -70px;
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
    <div className={`${isFBApp ? 'text-lg' : 'text-xl'} px-2 sm:px-4 flex !flex-col sm:!flex-row`}>
      <div className="wrapper_myself_img p-3 self-center items-center flex flex-col sm:self-start" style={{ minWidth: '250px' }}>
        <img className="self-center text-nowrap" src="v2/img/tron_lum.jpg" style={{ minWidth: '200px', height: '250px', borderRadius: '50%' }} />
      </div>

      <div className="name_and_job self-center flex flex-col items-center justify-start sm:self-start sm:items-start sm:justify-center sm:px-4 md:px-5">
        <p class={`text-nowrap ${isFBApp ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'}`}>{langCV.my_full_name[l]}</p>
        <p class="text-base md:text-xl text-nowrap m-1">{langCV.my_role[l]}</p>
        <hr style={{ 'borderTop': '3px solid ', 'width': '100%' }} class=" mx-auto my-4" />
      </div>
    </div>

    <div className={`${isFBApp ? 'text-lg' : 'text-xl'} px-2 sm:px-4 flex !flex-col sm:!flex-row`}>
      <div style={{ flexWrap: 'wrap' }} className={`${isFBApp ? 'text-xs' : 'text-sm'} wrapper_under_image flex flex-row items-center justify-center px-3 sm:px-0 sm:flex-col sm:justify-start`}>
        <p>{langCV.nickname[l]}: {isTH ? 'ต็อน' : 'Tron'}</p>
        <p className="ml-5 sm:ml-0 text-nowrap flex flex-row justify-center items-center sm:mt-1">{langCV.nationality[l]}: {isTH ? 'ไทย' : 'Thai'} <img src="v2/img/thai_flag.jpg" className="ml-1" style={{ width: '22px', height: '18px' }} /></p>
        <div className="basis-full sm:basis-0"></div>
        <p style={{ flexWrap: 'wrap' }} className="flex flex-row justify-center sm:flex-col sm:items-center mt-1">
          <p className="text-nowrap">
            {`${langCV.age[l]}`}: {`
            ${age.year > 0 ? `${age.year} ${langCV.year[l]}${isEN && age.year > 1 ? 's' : ''}` : ''}
            ${age.month > 0 ? `${age.month} ${langCV.month[l]}${isEN && age.month > 1 ? 's' : ''}` : ''} 
            ${age.day > 0 ? `${age.day} ${langCV.day[l]}${isEN && age.day > 1 ? 's' : ''}` : ''}
            `}
          </p>
        </p>
        <div className="basis-full sm:basis-0"></div>
        <p className="flex flex-row flex-wrap justify-center sm:flex-col sm:items-center mt-1">
          <p className="whitespace-nowrap">{/*langCV.address[l]*/}<i class="fa-solid fa-house"></i> : <span>{isTH ? 'ถนนวิทยุ เขตปทุมวัน' : 'Wireless Rd. Pathumwan'}</span></p><p class="ml-1 sm:ml-0">{isTH ? 'กรุงเทพฯ 10330.' : 'Bangkok 10330.'}</p>
        </p>
        <div className="basis-full sm:basis-0"></div>
        <div className="mt-2" id="map_tol"></div>
        <div className="basis-full sm:basis-0"></div>
        <p className="flex flex-row flex-wrap justify-center sm:flex-col sm:items-center mt-2">
          <p className="text-nowrap"><i class="fa-solid fa-envelope"></i> : tron.natthakorn@engineer.com</p>
        </p>
        <p className="mt-2 sm:mt-1 ml-2 sm:ml-0"><i class="fa-solid fa-phone"></i> : +66-XXX-XXX-XXX</p>
        <div className="basis-full sm:basis-0"></div>
      </div>
      <div style={{ height: '500px' }} className="cv_content p-4 sm:pt-0 flex flex-col items-center sm:items-start">
        <span>{langCV.cv_developing[l]}</span>
        <a className="underline a_link" target="_blank" href="./old/#/cv">
          {langCV.go_old_cv[l]}</a>
      </div>
    </div>
  </>
}
