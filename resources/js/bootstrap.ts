import axios from 'axios';
window.axios = axios;

import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/es";

import en from "@/shared/assets/locales/en.json";
import es from "@/shared/assets/locales/es.json";

const language = window.navigator.language;

dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);

dayjs.locale(language);

i18n.use(initReactI18next).init({
//   compatibilityJSON: "v3",
  resources: { en, es },
  fallbackLng: "en",
  lng: language,
  interpolation: {
    prefix: "{",
    suffix: "}",
    escapeValue: false,
  },
});


window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
