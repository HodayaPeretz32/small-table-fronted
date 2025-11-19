import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        home: 'Home',
        cart: 'Cart',
        addToCart: 'Add to Cart',
      },
    },
    he: {
      translation: {
        home: 'בית',
        cart: 'עגלה',
        addToCart: 'הוסף לעגלה',
      },
    },
  },
});

export default i18n;