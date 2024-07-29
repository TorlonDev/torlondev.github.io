const Home = () => {
  const { lang, currentLanguage: l } = useContext(Context)

  return <span>{lang.hello_world[l]}<br />
    {lang.i_am_developer[l]}<br />
    {lang.new_ver_developing[l]}
  </span>
}
