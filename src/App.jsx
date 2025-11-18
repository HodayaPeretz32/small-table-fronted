import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useEffect } from 'react';
// import AppRoutes from './routes';

// function App() {
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     // שנה את dir בהתאם לשפה
//     document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
//     document.documentElement.lang = i18n.language;
//   }, [i18n.language]);

//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// }

// export default App;