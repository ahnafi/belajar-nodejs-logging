import winston from "winston";

test('create new logger', () => {
    const logger = winston.createLogger({
        level:"debug",
        transports:[
            new winston.transports.Console(),
            new winston.transports.File({filename:"app.log",dirname:"log"})
        ]
    })

    logger.log({
        level:"info",
        message:"hello logger"
    })
    logger.log({
        level:"verbose",
        message:"hello logger"
    })
    logger.log({
        level:"debug",
        message:"hello logger"
    })

    


});