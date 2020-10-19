const path = require('path');

console.log(`当前环境：${process.env.NODE_ENV}`);
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                // '@api': path.resolve(__dirname, './src/api/index.js')
            }
        },
    },
    css: {
        // 预处理器 Loader scss全局变量注入
        // loaderOptions: {
        //     sass: {
        //         data: '@import "./scr/style.css"'
        //     }
        // }
    },
    // 开发环境代理
    devServer: {
        // proxy: 'http:192.168.0.1',
    },
    lintOnSave: undefined
};