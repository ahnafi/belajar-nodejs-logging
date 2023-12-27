import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("create new logger", () => {
  const logger = winston.createLogger({
    level:"info",
    transports:[
        new winston.transports.Console(),
        new DailyRotateFile({
            filename:"app-%DATE%.log",
            zippedArchive:"true",
            maxSize:"1m",
            maxFiles:"1d",
            dirname:"log"
        })
    ]
  });

for (let i = 0; i < 10; i++) {
    logger.info("hello info daily")
    
}

});
