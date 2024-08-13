const langHome = {
  TH: [
    'ความสุขของการเป็น นักพัฒนา คืออะไร?',
    'ตลอดหลายปีของการเป็น นักพัฒนา ที่ผ่านมา สิ่งที่ทำให้ผมมีความสุข ไม่ใช่ ตำแหน่งที่สูงขึ้น หรือเงินเดือนที่มากขึ้น ไม่ใช่สวัสดิการเว่อร์วัง แต่สิ่งที่ทำให้ผมมีความสุข ในการเป็น นักพัฒนา คือ ',
    '- เวลาที่ User บอกว่า ระบบที่ผมทำ ทำให้ User เลิกงานกลับบ้านได้ไวขึ้น',
    '- เวลาที่ Boss บอกว่า ผมช่วยบริษัทลดค่าใช้จ่ายรายเดือน ที่คนก่อนหน้าทำไว้เสียเงินเยอะๆได้',
    '- เวลาที่ Team Leader หรือเพื่อนร่วมทีม ชมผมเวลาที่จบงานได้ ในหลายๆครั้ง หลายๆ Feature ในช่วงหลายปีที่ผ่านมา',
    '- เวลาที่ เลิกงานดึกๆ แล้วยังไม่กลับบ้าน ฺBoss ซื้อพิซซ่า กับเบียร์เย็นๆ ให้กิน ปั่นงานให้เสร็จ, ถ้ากลับบ้านทั้งที่งานยังไม่เสร็จ ผมคงนอนไม่หลับ และก็คงเปิดคอมทำงานอยู่ดี',
  ],
  EN: [
    "What is the joy of being a developer?",
    "Throughout my years as a developer, what has brought me happiness is not the prospect of a higher position or increased salary, nor the extravagant benefits. Instead, the joy of being a developer comes from:",
    "- When users inform me that the system I developed allows them to leave work and return home earlier.",
    "- When the boss acknowledges that I have helped the company reduce monthly expenses that were previously high due to prior arrangements.",
    "- When the team leader or teammates commend me for completing tasks and features on numerous occasions over the years.",
    "- Working late into the night and not returning home, especially when the boss provides pizza and cold beer to help us finish the work. If I were to go home while the work remains incomplete, I would likely be unable to sleep and would end up continuing to work on the computer anyway.",
  ],
  CN: [
    "作为开发者的快乐是什么？",
    "在我作为开发者的这些年里，带给我快乐的不是职位的升迁或薪水的增加，也不是那些奢华的福利。真正让我感到快乐的是：",
    "- 当用户告诉我，我开发的系统让他们能够更早地结束工作回家。",
    "- 当老板承认我帮助公司减少了由于前任安排导致的高额月度开支。",
    "- 当团队领导或同事在这些年里多次赞扬我完成任务和功能时。",
    "- 工作到深夜而不回家，尤其是当老板提供比萨和冰啤酒来帮助我们完成工作时。如果我在工作未完成的情况下回家，我可能会睡不着觉，还会继续在电脑上工作。",
  ],
  JP: [
    '開発者としての喜びとは何ですか？',
    'これまでの開発者としての年月の中で、私に喜びをもたらしてくれるのは、高い地位や給料の増加、または豪華な福利厚生ではありません。開発者としての喜びは次のようなものです：',
    '- ユーザーから、私が開発したシステムが彼らが早く仕事を終えて帰れるようにしたと言われる時。',
    '- ボスから、私が以前の高額な月々の経費を削減する手助けをしたと認められる時。',
    '- チームリーダーや同僚から、これまでの何度も褒められる時、タスクや機能を完成させたことに対して。',
    '- 深夜まで働き、家に帰らない時、特にボスがピザや冷たいビールを提供してくれる時。もし仕事が終わらないまま家に帰ると、私は眠れず、結局パソコンで作業を続けることになります。',
  ]
}

const Home = () => {
  const {
    lang, currentLanguage: l, isShowSideBar,
  } = useContext(Context)

  const styleTextMobile = `clamp(20px, ${isShowSideBar ? '4vw' : '6vw'}, 36px)`
  const styleTextMobileFB = `clamp(16px, ${isShowSideBar ? '1vw' : '5vw'}, 42px)`

  const scrollToCover = (idCover = 'snow_falling') => {
    document.getElementById(idCover).scrollIntoView({
      block: 'nearest', inline: 'center'
    });
  }

  const ArrowChangeCover = ({ direction = 'right', idCoverTo = 'spring_falling', leftAbsolute = '90%' }) => {
    return <div className="cover_content_center change_cover" style={{ left: leftAbsolute }}
      onClick={() => { scrollToCover(idCoverTo) }}>
      <span class={`fa-solid fa-arrow-${direction}`}></span>
    </div>
  }

  // componentDidMount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    load_snow()
    spring_falling()
    raining()
    btc_falling()
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
          .leaf {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50% 50% 50% 0; /* Leaf shape */
            transform: rotate(-45deg); /* Rotate to make it more leaf-like */
            opacity: 0.8;
            animation: springfall linear infinite;
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
          @keyframes springfall {
            from {
                transform: translate(0, 0) rotate(1deg) scale(0.2);
            }
            to {
                transform: translate(-150px, 90vh) rotate(360deg) scale(0.8);
            }
          }
          @keyframes btcfall {
            from {
                transform: translateY(0) rotate(1deg);
            }
            to {
                transform: translateY(90vh) rotate(360deg);
            }
          }

          .fa-arrow-left {
            width: 100%;
            height: 100%;
          }

          .fa-arrow-right {
            width: 100%;
            height: 100%;
          }

          .fa-arrow-left > path {
            stroke: var(--BGColor);
            stroke-width: 25px;
          }

          .fa-arrow-right > path {
            stroke: var(--BGColor);
            stroke-width: 25px;
          }

          .cover_content_center {
            z-index: 99;
            position: absolute; 
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            align-content: center;
          }

          .change_cover {
            z-index: 100;
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
          .change_cover {
            width: 50px;
            height: 50px;
            cursor: pointer;
          }
        `) + desktopCSS(`
          .cover_home {
            font-size: clamp(36px, ${isFBApp ? '5vw' : '6vw'}, 60px);
            border: 10px solid var(--color);
          }
          .change_cover {
            width: 70px;
            height: 70px;
            cursor: pointer;
          }
        `)
      }
    </style>
    <div className="cover_home" style={{
      aspectRatio: '1000 / 550',
      position: 'relative',
      overflow: 'hidden', overflowX: 'hidden',
      whiteSpace: 'nowrap'
    }}>
      <div id="snow_falling" style={{
        backgroundImage: 'url(v2/img/cover2.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <canvas id="canvas_snow_falling" style={{ width: '100%', height: '100%', }} />
        <ArrowChangeCover direction='left' idCoverTo='btc_falling' leftAbsolute='10%' />
        <div className="cover_content_center" style={{ left: '50%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_cool[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='rain_falling' leftAbsolute='90%' />
      </div>

      <div id="rain_falling" style={{
        backgroundImage: 'url(v2/img/cover1.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <ArrowChangeCover direction='left' idCoverTo='snow_falling' leftAbsolute='110%' />
        <div className="cover_content_center" style={{ left: '150%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_love_coding[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='spring_falling' leftAbsolute='190%' />
      </div>

      <div id="spring_falling" style={{
        backgroundImage: 'url(v2/img/cover3.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <ArrowChangeCover direction='left' idCoverTo='rain_falling' leftAbsolute='210%' />
        <div className="cover_content_center" style={{ left: '250%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_developer[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_single[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='btc_falling' leftAbsolute='290%' />
      </div>

      <div id="btc_falling" style={{
        backgroundImage: 'url(v2/img/cover4.jpg)',
        display: 'inline-block',
        width: '100%', height: '100%',
        backgroundSize: '100% 100%',
      }}>
        <ArrowChangeCover direction='left' idCoverTo='spring_falling' leftAbsolute='310%' />
        <div className="cover_content_center" style={{ left: '350%' }}>
          <span>{lang.hello_world[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_am_trader[l].toUpperCase()}</span><br /><br />
          <span>{lang.i_love_trading[l].toUpperCase()}</span>
        </div>
        <ArrowChangeCover direction='right' idCoverTo='snow_falling' leftAbsolute='390%' />
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
      textShadow: 'unset',
      padding: '20px',
    }}>
      <article>
        <h3 className="text-3xl" >{langHome[l][0]}</h3><br />
        <p class="indent-8">{langHome[l][1]}</p><br />
        <ul class="indent-8">
          <li>{langHome[l][2]}</li>
          <li>{langHome[l][3]}</li>
          <li>{langHome[l][4]}</li>
          <li>{langHome[l][5]}</li>
        </ul>
        <br />
        <hr style={{ 'borderTop': '3px solid var(--color)' }} class="w-80 mx-auto my-4" />
      </article>
    </div>
  </>
}
