const langCV = {
  cv_developing: { EN: 'New CV is developing.', TH: 'ซีวีเวอร์ชันใหม่กำลังอยู่ในระหว่างการพัฒนา' },
  go_old_cv: { EN: 'Go to old version', TH: 'ไปที่ซีวีเวอร์ชันเก่า' },
}

const CV = () => {
  const { currentLanguage: l } = useContext(Context)
    return <div className="wrapper_content text-xl">
        <span>{langCV.cv_developing[l]}</span><br /><br />
        <a className="underline a_link" target="_blank" href="./old/#/cv">
        {langCV.go_old_cv[l]}</a>
    </div>
}