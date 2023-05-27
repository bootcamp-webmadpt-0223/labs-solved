const Greetings = ({ lang, children }) => {
  const greet = {
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour',
    de: 'Hallo',
  }

  return (
    <p className="greetings" lang={lang}>
      {greet[lang]} {children}
    </p>
  )
}

export default Greetings
