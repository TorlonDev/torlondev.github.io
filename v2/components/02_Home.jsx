const Home = () => {
  const { lang, currentLanguage: l } = useContext(Context)
  const isEN = l === 'EN'

  return <span>{lang.hello_world[l]}<br />
    {lang.i_am_developer[l]}<br />
    {isEN ? 'New Version is developing.' : 'เว็บไซต์เวอร์ชันใหม่อยู่ระหว่างการพัฒนา'}
  </span>
}
