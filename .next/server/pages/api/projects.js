"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 9622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const data = [
        {
            id: 1,
            image: "https://cdn.discordapp.com/attachments/836225187132473364/1015323826512478290/Thunar_New_Era.png",
            name: "Thunar",
            description: "Discord'un modern ve gelişmiş yeni nesil sistemlerine sahip en iyi Discord bek\xe7i botu",
            link: "https://discord.com/api/oauth2/authorize?client_id=963406060150984764&permissions=8&scope=bot%20applications.commands"
        },
        {
            id: 2,
            image: "https://cdn.discordapp.com/attachments/938001122109558824/1035911961508073543/Baslksz.png",
            name: "Thunar Node Editor",
            description: "Thunar'ın geliştirildiği kendimize ait bir Node Motoru...",
            link: "#"
        },
        {
            id: 2,
            image: "https://cdn.discordapp.com/attachments/838751131684569129/1031666756940476497/BUG_An_icy_wolf_right_in_front_of_the_icy_moon_that_turns_night_07e9012e-708f-44d3-b368-aaaeb559d293.png",
            name: "Thunar Client",
            description: "Thunar'ı Discord \xfczerinden değil masa\xfcst\xfc programınız ile ayarlayın... \xc7ok yakında!",
            link: "#"
        }
    ];
    res.status(200).json(data);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9622));
module.exports = __webpack_exports__;

})();