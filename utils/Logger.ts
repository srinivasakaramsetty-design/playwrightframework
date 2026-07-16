import log4js from "log4js";


log4js.configure({

    appenders: {

        file: {
            type: "file",
            filename: "logs/test.log",
            maxLogSize: 10485760,
            backups: 3
        },

        console: {
            type: "console"
        }

    },


    categories: {

        default: {
            appenders: [
                "file",
                "console"
            ],
            level: "info"
        }

    }

});


export const logger = log4js.getLogger();
