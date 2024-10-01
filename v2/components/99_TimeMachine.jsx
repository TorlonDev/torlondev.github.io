const langTimeMachine = {
  time_machine_starting: {
    EN: 'Time Machine is Starting.',
    TH: 'เครื่องย้อนเวลากำลังทำงาน',
    CN: '时光机器正在启动，',
    JP: 'タイムマシン（タイムマシン）が起動しています。'
  },
  are_you_ready: {
    EN: 'Are you ready?',
    TH: 'คุณพร้อมหรือยัง?',
    CN: '你准备好了吗?',
    JP: '準備はいいですか？' 
  },
  go_to_old_version: {
    EN: "Let's go to old version of torlondev website.",
    TH: 'ผมจะพาคุณไปสู่เว็บไซต์ torlondev เวอร์ชันเก่า',
    CN: '让我们访问旧版本的 torlondev 网站。',
    JP: 'torlondevのウェブサイトの古いバージョンに行きましょう。' 
  },
  go_back_2015: {
    EN: 'Going back to 2015-2018 in...',
    TH: 'เตรียมตัวย้อนเวลาสู่ อดีต ปี 2015-2018 ใน...',
    CN: '回顾 2015 年至 2018 未来...',
    JP: '2015年から2018年までの過去に戻ります...' 
  }
}

const TimeMachine = () => {
  const [counter, setCounter] = useState(10)
  const { currentLanguage: l } = useContext(Context)

  let xr = setInterval(() => {
    setCounter(counter - 1)
    if (counter === 2) {
      clearInterval(xr)
      if (window.location.hash === '#/time_machine') {
        window.location.href = window.location.origin + "/old"
      }
    }
  }, 1000)

  return <div style={{
    minHeight: 'unset',
    backgroundImage: 'url(v2/img/timemachine.jpg)',
    backgroundPosition: 'center',
    textShadow: 'var(--BGColor) -1px 0px, var(--BGColor) 0px 1px, var(--BGColor) 1px 0px, var(--BGColor) 0px -1px',
  }} className="wrapper_content text-xl text-center">
      <br/>
      <h1>{langTimeMachine.time_machine_starting?.[l]}</h1><br />
      <h1>{langTimeMachine.are_you_ready?.[l]}</h1><br />
      <h1>{langTimeMachine.go_to_old_version?.[l]}</h1><br />
      <h1>{langTimeMachine.go_back_2015?.[l]} <br /><br />
        <span className="text-3xl" id="time_machine_counter">{counter}</span></h1><br />

  </div>;
}