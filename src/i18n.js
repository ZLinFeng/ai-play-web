import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 定义翻译数据
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      title: "Skytrix",
      greeting: "Hello, {{title}}!",
    },
  },
  zh: {
    translation: {
      welcome: "欢迎",
      title: "天机",
      greeting: "你好, {{title}}!",
    },
  },
};

// 初始化 i18next
i18n.use(initReactI18next).init({
  resources, // 加载翻译数据
  lng: "en", // 默认语言
  fallbackLng: "en", // 回退语言
  interpolation: {
    escapeValue: false, // 禁用 HTML 转义
  },
});

export default i18n;
