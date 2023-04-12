// const fs = require("fs");

// fs.open("./fichiertest.txt", "a+", (err, fd) => {
//   if (err) throw err;
//   console.log(fd);
//   fs.write(fd, "bonjour123", (err, written, str) => {
//     console.log({ err, written, str });
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//   });
// });

const buffer = Buffer.alloc(5);

console.log(buffer);
// <Buffer 00 00 00 00 00>

const fs = require("fs");

fs.open("./test.txt", "w", (err, fd) => {
  if (err) throw err;
  const buf1 = Buffer.from("têst");
  fs.write(fd, buf1, (err, written, buffer) => {
    if (err) throw err;
    console.log(err, written, buffer);
    fs.close(fd, () => {
      console.log("Done");
    });
  });
});
