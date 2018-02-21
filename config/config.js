// 具体参数配置
var OUTPUT_ENV = {
    DEV: { // 开发环境配置
        IP: "127.0.0.1", // 可以配置你自己的IP，局域网下方便手机调试
        PROJECTPATH: "example-base" // 项目开发路径
    },
    PRODUCTION: { // 线上环境配置
        PUBLICPATH: "./",
        PROJECTPATH: "example-base" // 项目发布路径
    }
};

module.exports = OUTPUT_ENV;
