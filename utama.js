const { User1, User2, User3 } = require("./dataUser");
const { Status1, Status2 } = require("./status");

data = [User1, User2, User3];

const { respon, dataUser, dataStatus } = require("./handler.js");

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      if (pathname === "/") {
        respon(res);
      } else if (pathname === "/users") {
        dataUser(res, data);
      } else {
        dataStatus(res, Status1);
      }
    } else {
      err;
    }
  } catch (err) {
    dataStatus(res, Status2);
  }
});

server.listen(3000, () => {
  console.log("CONSOLE LOG RUNNING ON PORT 3000");
});
