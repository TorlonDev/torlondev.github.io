const Blogs = () => {
  const { lang, currentLanguage: l } = useContext(Context)
  return <div>
    <span>{lang.coming_soon[l]}</span>
  </div>
}