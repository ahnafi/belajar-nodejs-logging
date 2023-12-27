import winston from "winston";
import TransportStream from "winston-transport";

test("create trnasport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase} : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    transports: [new MyTransport({})],
  });


  logger.info("hello world")
});
