import * as Axios from "axios";
import * as FS from "fs";

const cur = new Date();
console.log(cur);

Axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response => {
  console.log(response.data);
  console.log(new Date() - cur);
});

FS.readFile("database.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(new Date() - cur);
});
