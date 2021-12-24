import { createLogger, format, transports } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
const { combine, timestamp, label, printf, colorize } = format;

// winston document - https://www.npmjs.com/package/winston

// eslint-disable-next-line
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `[${level}-${timestamp}]: ${message}`;
});

const logDir = 'logs';

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'winston log' }), timestamp(), logFormat),
  transports: [
    // new transports.File({ filename: 'logs/info.log', level: 'info' }),
    // new transports.File({ filename: 'logs/error.log', level: 'error' }),

    // eslint-disable-next-line
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      // eslint-disable-next-line
      filename: `%DATE%.info.log`,
      maxFiles: '30d',
      maxSize: '10m',
      zippedArchive: true,
    }),
    // eslint-disable-next-line
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: `${logDir}/errors`,
      // eslint-disable-next-line
      filename: `%DATE%.error.log`,
      maxFiles: '30d',
      maxSize: '10m',
      zippedArchive: true,
    }),
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
