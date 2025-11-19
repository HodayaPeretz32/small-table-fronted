import { useTranslation } from 'react-i18next';

function Lang() {
  const { i18n } = useTranslation();

  return (
    <nav>      
      <div className="language-switcher">
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('he')}>עברית</button>
      </div>
    </nav>
  );
}

export default Lang;