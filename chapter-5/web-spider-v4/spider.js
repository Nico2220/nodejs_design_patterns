import { promises as fsPromises } from "fs";
import { dirname } from "path";
import superagent from "superagent";
import { mkdirp } from "mkdirp";
import { urlToFilename, getPageLinks } from "./utils.js";
import { TaskQueue } from "./TaskQueue.js";

function download(url, filename) {
  console.log(`Downloading ${url} into ${filename}`);
  let content;
  return superagent
    .get(url)
    .then((res) => {
      content = res.text;
      return mkdirp(dirname(filename));
    })
    .then(() => fsPromises.writeFile(filename, content))
    .then(() => {
      console.log(`Downloaded and saved ${url}`);
      return content;
    });
}

function spiderLinks(currentUrl, content, nesting, queue) {
  if (nesting === 0) {
    return Promise.resolve();
  }

  const links = getPageLinks(currentUrl, content);
  const promises = links.map((link) => spiderTask(link, nesting - 1, queue));

  return Promise.all(promises);
}

const spidering = new Set();
function spiderTask(url, nesting, queue) {
  if (spidering.has(url)) {
    return Promise.resolve();
  }
  spidering.add(url);

  const filename = urlToFilename(url);

  return queue
    .runTask(() => {
      return fsPromises.readFile(filename, "utf8").catch((err) => {
        if (err.code !== "ENOENT") {
          throw err;
        }

        // The file doesn't exist, so let’s download it
        return download(url, filename);
      });
    })
    .then((content) => spiderLinks(url, content, nesting, queue));
}

export function spider(url, nesting, concurrency) {
  const queue = new TaskQueue(concurrency);
  return spiderTask(url, nesting, queue);
}
