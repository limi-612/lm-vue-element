import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';
import jaJP from './lang/ja-JP';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

// 国际化
// 自动设置语言
// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.lang || localLang || 'zh-CN';

Vue.config.lang = lang;


const mergeZH = Object.assign(zhCN, zhLocale);
const mergeJP = Object.assign(jaJP);
const mergeEN = Object.assign(enUS, enLocale);

Vue.locale('zh-CN', mergeZH);
Vue.locale('ja-JP', mergeJP);
Vue.locale('en-US', mergeEN);