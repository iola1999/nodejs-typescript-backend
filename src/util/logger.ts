const log4js = require("log4js");

log4js.configure({
    appenders: {
        console: {
            type: "console",
        },
        app: {
            type: "dateFile",
            filename: "log/app",
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true,
        },
    },
    categories: {
        default: {
            appenders: ["console", "app"],
            level: "trace",
        },
    },
    pm2: true,
    replaceConsole: true,
});

module.exports = (name) => log4js.getLogger(`[${name}]`);
