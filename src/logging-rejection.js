import winston from "winston"

async function callAsync() {
  return Promise.reject("ups");
}

const logger = winston.createLogger({
  // handleExceptions:true,
  transports: [
    // new winston.transports.Console(),
    new winston.transports.File({
      filename: "exception.log",
      handleRejections: true,
      dirname: "log",
      handleExceptions: true,
    }),
  ],
});

hallo()
callAsync();
