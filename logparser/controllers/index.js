module.exports.logParser = async (req, res, next) => {
  //   console.log("file", req.file);

  const file = req.file; // all file details parsed with multer
  const fileContent = file.buffer.toString(); // convert buffer data tp string
  //   const data = JSON.stringify(fileContent);

  const logs = fileContent.split("\n"); // split file date with \n
  //   console.log("logs", logs);
  let parsedLogs = []; // to store final object of file data

  logs.forEach((log) => {
    if (log) {
      const [timestamp, level, detailsJSON] = log.split(" - "); // separate timestamp, level and object from file data
      //   console.log("detailsJSON", detailsJSON);

      if ((timestamp, level, detailsJSON)) {
        const { transactionId, err, userId, code, user } =
          JSON.parse(detailsJSON); // separate transactionId, err, userId, code, user from object

        // push formated data in 'parsedLogs' in array
        parsedLogs.push({
          timestamp: timestamp ? new Date(timestamp).getTime() : 0,
          loglevel: level ? level : 0,
          transactionId: transactionId ? transactionId : 0,
          err: err ? err : 0,
          userId: userId ? userId : 0,
          code: code ? code : 0,
          user: user ? user : 0,
        });
      }
    } else {
      if (parsedLogs.length == 0) {
        parsedLogs = [];
      }
    }
  });

  //   console.log("parsedLogs", parsedLogs);

  // send formated data to frontend

  if (parsedLogs.length > 0) {
    res.status(200).send({ parsedLogs: parsedLogs });
  } else {
    res.status(400).send({ msg: "Please Select valid file content" });
  }
};
