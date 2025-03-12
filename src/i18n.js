import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 定义翻译数据
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      greeting: "Hello, {{name}}!",
    },
  },
  zh: {
    translation: {
      welcome: "欢迎",
      greeting: "你好, {{name}}!",
    },
  },
};

// 初始化 i18next
i18n.use(initReactI18next).init({
  resources, // 加载翻译数据
  lng: "zh", // 默认语言
  fallbackLng: "zh", // 回退语言
  interpolation: {
    escapeValue: false, // 禁用 HTML 转义
  },
});

export default i18n;
