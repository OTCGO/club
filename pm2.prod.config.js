module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [{
        name: 'club',
        script: 'app.js',
        'instances': 'max', // 如果是fork, 不用配置
        'exec_mode': 'cluster' // cluster or fork
    }]
}