import winston from "winston";

test("create new logger", () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp(),
      winston.format.ms()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "error.log", dirname: "log" ,level:"error"}),
      new winston.transports.File({ filename: "app.log", dirname: "log" ,level:"info"}),
    ],
  });

  logger.debug("hello dbug");
  logger.info("hello info");
  logger.error("hello error");
});
