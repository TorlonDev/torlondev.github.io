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
  download: {
    EN: 'Download as',
    TH: 'ดาวน์โหลด',
    CN: '下载',
    JP: 'ダウンロード'
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
  },
  work_experience: {
    EN: 'WORK EXPERIENCE',
    TH: 'ประสบการณ์ทำงาน',
    CN: '工作经验',
    JP: 'しょくむけいけん',
  },
  education: {
    EN: 'EDUCATION',
    TH: 'การศึกษา',
    CN: '教育',
    JP: 'きょういく',
  },
}

// Do Not PUT This Component in CV (inner scope) // + because for loop
const FilmStripRow = ({ isTop = false }) => {
  const arr_film_strip = []

  for (let i = 0; i <= 50; i++) {
    arr_film_strip[i] = <div id={`film_strip_${i}`}
      style={{
        backgroundColor: 'var(--cvFilmStripEl)', width: '12px', height: '12px', marginLeft: '14px',
        flexShrink: '0'
      }}></div>
  }

  return <div style={{ 
    overflow: 'hidden', width: '100%', backgroundColor: 'var(--cvFilmStripBG)', 
    ...(isTop ? { borderTop: '3px solid white' }: { borderBottom: '3px solid white' })
  }} 
    class="flex flex-row flex-nowrap py-2">
    {arr_film_strip}
  </div>
}

const CV = () => {
  const { currentLanguage: l, isTH, isEN, isCN, isCalculateAge, setIsCalculateAge } = useContext(Context)
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
      const maxTimeLoop = 3000
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
          .btn_cv_pdf {
            cursor: pointer;
          }
          .img_work {
            /*transition: transform 2s;*/
            border-right: 14px solid black;
            cursor: pointer;
          }
          
          .img_work:active {
            pointer-events: none;
            position: absolute;
            z-index: 999;
            width: 100%;
            left: 0;
            /*transform: scale(1.5);*/
          }
        ` + mobileCSS(`
          .btn_cv_pdf {
            margin-right: 20px;
          }
          #map_tol {
            height: 140px;
            width: calc(var(--contentMinWidth) - 10px);
          }
        `) + desktopCSS(`
          .btn_cv_pdf {
            margin-right: 10px;
          }
          .fa-file-pdf {
            vertical-align: middle;
          }
          .wrapper_myself_img {
            height: 280px;
            background-color: var(--navBarBGColor);
            max-width: 250px;
          }
          .name_and_job {
            height: 160px;
            width: 100%;
            background-color: var(--cvCoverColor);
            margin-top: 30px;
          }

          #map_tol {
            height: 120px;
            width: 240px;
          }
          .cv_content {
            margin-top: -70px;
            min-width: var(--contentMinWidth);
            max-width: calc(var(--navBarElementMaxWidth) - 300px)
          }
          .wrapper_under_image {
            min-width: 250px;
            max-width: 250px;
            background-color: var(--navBarBGColor);

          }
        `)
      }
    </style>

    <style>
      {
        `
        /* TimeLine CSS */

        .timeline-left, .timeline-right {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        /* Vertical Time Line */
        .timeline-left::after, .timeline-right::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: var(--color);
          top: 0;
          bottom: 0;
        }

        /* Vertical Time Line */
        .timeline-left::after {
          margin-left: -3px;
          left: 31px;
        }

        /* Vertical Time Line */
        .timeline-right::after {
          margin-right: -3px;
          right: 31px;
        }

        /* Circle */
        .container-left::after, .container-right::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: white;
          border: 4px solid darkslategray;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        .container-left {
          padding: 10px 40px;
          position: relative;
          width: 100%;

          padding-left: 70px;
          padding-right: 25px;
        }

        .container-right {
          padding: 10px 40px;
          position: relative;
          width: 100%;

          padding-right: 70px;
          padding-left: 25px;
        }

        .content-left, .content-right {
          background-color: var(--BGColor);
          color: var(--color);
          position: relative;
          border-radius: 6px;
          border: 1px solid var(--color);
        }

        /* Triangle */
        .left-t::before, .right-t::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 22px;
          width: 0;
          z-index: 1;
          border: medium solid var(--color);
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent var(--color);
        }

        .left-t::before {
          left: 60px;
          right: 30px;
        }

        .right-t::before {
          /* left: 30px; */
          right: 60px;
        }

        /* Circle */
        .left-t::after {
          left: 15px;
        }
        .right-t::after {
          right: 15px;
        }`
      }
    </style>

    <div style={{ position: 'relative' }} className={`${isFBApp ? 'text-lg' : 'text-xl'} px-2 sm:px-4 flex !flex-col sm:!flex-row`}>

      <div className="wrapper_myself_img p-3 self-center items-center flex flex-col sm:self-start" style={{ minWidth: '250px' }}>
        <img className="self-center text-nowrap" src="v2/img/tron_lum.jpg" style={{ minWidth: '200px', height: '250px', borderRadius: '50%' }} />
      </div>

      <div className="name_and_job self-center flex flex-col items-center justify-start sm:self-start sm:items-start sm:justify-center sm:px-4 md:px-5">
        <p class={`text-nowrap ${isFBApp ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'}`}>{langCV.my_full_name[l]}</p>
        <p class="text-base md:text-xl text-nowrap m-1">{langCV.my_role[l]}</p>
        <hr style={{ 'borderTop': '3px solid ', 'width': '100%' }} class=" mx-auto my-4" />
      </div>
      <a target="_blank" href="doc/CV-TronNatthakorn.pdf" style={{ position: 'absolute', right: 0, top: 4, backgroundColor: '#B30B00' }} class="btn_cv_pdf rounded-lg text-white text-2xl sm:text-xl px-3 py-3 pr-2.5 pt-2 sm:pt-1 text-center"><span className="text-sm hidden sm:inline">{langCV.download[l]}</span><i class="fa-solid fa-file-pdf sm:ml-1"></i></a>

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
          <p className="whitespace-nowrap"><i class="fa-solid fa-house"></i> : <span>{isTH ? 'ถนนวิทยุ เขตปทุมวัน' : 'Wireless Rd. Pathumwan'}</span></p><p class="ml-1 sm:ml-0">{isTH ? 'กรุงเทพฯ 10330.' : 'Bangkok 10330.'}</p>
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
      <div style={{ position: 'relative' }} className="flex flex-col cv_content text-lg p-4 sm:pt-0">
        <div className="p-2 px-5 text-xl" style={{
          flexBasis: 'auto',
          'backgroundColor': 'var(--cvCoverColor)',
          borderBottomLeftRadius: '25px',
          borderTopRightRadius: '25px',
          borderBottomRightRadius: '25px',
        }}>{langCV.work_experience[l]}</div>

        <div class="timeline-left py-5 text-base">
          <div class="container-left left-t">
            <div class="content-left p-5">
              <p>Mar 2019 - Jun 2021: Luma Health Insurance.</p><br />
              <FilmStripRow isTop />
              <div style={{ overflow: 'hidden', overflowX: 'scroll', aspectRatio: '1020 / 500' }}
                class="flex flex-row flex-nowrap">
                <img class="img_work" src="old/img/luma1.jpg" />
                <img class="img_work" src="old/img/luma2.jpg" />
                <img class="img_work" src="old/img/luma3.jpg" />
              </div>
              <FilmStripRow />
            </div>
          </div>
          <div class="container-left left-t">
            <div class="content-left p-5">
              <p>Mar 2017 - Jul 2018: Scale360.</p><br />
              <FilmStripRow isTop />
              <div style={{ overflow: 'hidden', overflowX: 'scroll', aspectRatio: '930 / 500' }}
                class="flex flex-row flex-nowrap">
                <img class="img_work" src="old/img/scale1.jpg" />
                <img class="img_work" src="v2/img/scale2.jpg" />
              </div>
              <FilmStripRow />
            </div>
          </div>
          <div class="container-left left-t">
            <div class="content-left p-5">
              <p>May 2014 - Feb 2015: True Corporation.</p><br />
              <FilmStripRow isTop />
              <div style={{ overflow: 'hidden', overflowX: 'scroll', aspectRatio: '740 / 400' }}
                class="flex flex-row flex-nowrap">
                <img class="img_work" src="old/img/true.jpg" />
                <img class="img_work" src="v2/img/true2.jpg" />
              </div>
              <FilmStripRow />
            </div>
          </div>
        </div>

        <div className="p-2 px-5 text-xl" style={{
          'backgroundColor': 'var(--cvCoverColor)',
          borderBottomRightRadius: '25px',
          borderTopLeftRadius: '25px',
          borderBottomLeftRadius: '25px',
          textAlign: 'right'
        }}>{langCV.education[l]}</div>

        <div class="timeline-right py-5 text-base">
          <div class="container-right right-t">
            <div class="content-right p-5">
              <p>May 2011 - Apr 2015: Panyapiwat Institute Of Management.</p>
            </div>
          </div>
          <div class="container-right right-t">
            <div class="content-right p-5">
              <p>May 2008 - Apr 2011: Trimit Wittayalai School.</p>
            </div>
          </div>
          <div class="container-right right-t">
            <div class="content-right p-5">
              <p>May 2005 - Apr 2008: Benchamarachuthit Chanthaburi School.</p>
            </div>
          </div>
        </div>

        <br /><br /><br />
      </div>
    </div>
  </>
}
