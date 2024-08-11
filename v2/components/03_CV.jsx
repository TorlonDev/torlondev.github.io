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
    EN: 'Full stack developer.',
    TH: 'นักพัฒนาเต็มระบบ',
    CN: 'Full stack developer.',
    JP: 'Full stack developer.',
  },
}

const CV = () => {
  const { currentLanguage: l } = useContext(Context)
  return <>
    <style>
      {
        `` + mobileCSS(`

        `) + desktopCSS(`
          .wrapper_myself_img {
            height: 280px;
            background-color: var(--navBarBGColor);
            max-width: 250px;
          }
          .name_and_job {
            height: 250px;
            width: 100%;
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
    <div className="text-xl px-2 sm:px-4 flex !flex-col sm:!flex-row">
      <div className="wrapper_myself_img p-3 self-center items-center flex flex-col sm:self-start" style={{ minWidth: '250px' }}>
        <img className="self-center text-nowrap" src="v2/img/tron_lum.jpg" style={{ minWidth: '200px', height: '250px', borderRadius: '50%' }} />
      </div>

      <div className="name_and_job self-center flex flex-col items-center justify-start sm:self-start sm:items-start sm:justify-center sm:pl-4 md:pl-5">
        <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{langCV.my_full_name[l]}</p>
        <p class="text-lg sm:text-xl text-nowrap">{langCV.my_role[l]}</p>
        <hr style={{ 'borderTop': '3px solid ', 'width': '100%' }} class=" mx-auto my-4" />
      </div>
    </div>

    <div className="text-xl px-2 sm:px-4 flex !flex-col sm:!flex-row">
      <div className="wrapper_under_image"></div>
      <div className="sm:pl-4 md:pl-5">
        <span>{langCV.cv_developing[l]}</span><br />
        <a className="underline a_link" target="_blank" href="./old/#/cv">
          {langCV.go_old_cv[l]}</a>
      </div>
    </div>
  </>
}