const http = require("http");
http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Page d'accueil<h1>");
      res.end();
    } else if (url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contactez nous<h1>");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end();
    }
  })
  .listen(3000);
