import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, prettyPrint, colorize, simple } =
  format;

// winston document - https://www.npmjs.com/package/winston

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `[${level}-${timestamp}]: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'winston log' }), timestamp(), logFormat),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/info.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), logFormat),
    })
  );
}

export default logger;
