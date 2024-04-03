import languageConfig from "./language.json"

const i18n = (keyword)=>{
    const lang = localStorage.getItem("lang") || "en";
    return languageConfig[lang][keyword];

}

export default i18n;