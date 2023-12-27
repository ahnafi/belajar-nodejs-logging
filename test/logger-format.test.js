import winston from "winston";

test('create new logger', () => {
    const logger = winston.createLogger({
        format:winston.format.printf(info=>{
            return `${new Date()} : ${info.level.toLocaleUpperCase} : ${info.message}`
        }),
        transports:[
            new winston.transports.Console(),
            new winston.transports.File({filename:"app.log",dirname:"log"})
        ]
    })

    logger.debug("hello dbug")
    logger.info("hello info")

    


});