// swiper 组件
var Swiper = require("../../common/js/swiper/swiper.js");

// 快速初始化项目配置组件
var Launcher = require("../../common/js/Launcher.js");

// 引用样式
require("../css/style.scss");

require("../plugin/bg.mp3");

Launcher({
    bgMusic: "./plugin/bg.mp3",
    hasMusic: true, // 是否有背景音乐
    loadResources: ["./img/sprite.icon.png", "./plugin/bg.mp3"], // 需要预加载的文件
    callback : start // 预加载完成的回调函数
});

function start() {
    // TODO 初始化滑屏幕组件
    // 更详细的配置可以参看 https://github.com/nolimits4web/Swiper
    var swiper = new Swiper("#J_swiper-pagination", {
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        direction: "vertical",
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        onSlideChangeEnd: function(swiper) {
            // TODO
        }
    });
}

