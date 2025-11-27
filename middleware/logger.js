import { format } from "date-fns";
import { uuidv7 } from "uuidv7";
import fs from "fs-extra";
import * as path from "path";

export const logEvents = async (message, logName) => {
  const tagId = uuidv7();
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${tagId}\t${message}\n`;

  try {
    const logsDir = path.join(process.cwd(), "logs");
    const logFile = path.join(logsDir, logName);
    
    // ensureDir creates directory if it doesn't exist
    await fs.ensureDir(logsDir);
    
    // appendFile will create the file if it doesn't exist
    await fs.appendFile(logFile, logItem);
  } catch (err) {
    console.log(err);
  }
};

export const logger = (req, _, next) => {
  const sanitizedUrl = req.url.replace(
    /\/password\/\w+/g,
    "/password/[REDACTED]"
  );
  logEvents(
    `${req.method}\t${req.headers.origin}\t${sanitizedUrl}`,
    "reqLog.txt"
  );
  console.log(`${req.method} ${req.path}`);
  next();
};