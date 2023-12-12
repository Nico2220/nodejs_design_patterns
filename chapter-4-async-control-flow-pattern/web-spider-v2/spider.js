import fs from "fs";
import path from "path";
import superagent from "superagent";
import { mkdirp } from "mkdirp";
import { urlToFilename, getPageLinks } from "./utils.js";

const spidering = new Set();

export function spider(url, nesting, cb) {
  //"v3" fix race conditions with concurrent tasks
  if (spidering.has(url)) {
    return process.nextTick(cb);
  }
  spidering.add(url);

  const filename = urlToFilename(url);

  fs.readFile(filename, "utf8", (err, fileContent) => {
    if (err) {
      if (err.code !== "ENOENT") {
        return cb(err);
      }
      //The file does not exist, so let download it
      return download(url, filename, (err, requestContent) => {
        if (err) {
          return cb(err);
        }
        spiderLinks(url, requestContent, nesting, cb);
      });
    }
    spiderLinks(url, fileContent, nesting, cb);
  });
}

function saveFile(filename, contents, cb) {
  mkdirp(path.dirname(filename))
    .then((_) => {
      fs.writeFile(filename, contents, cb);
    })
    .catch((err) => cb(err));
}

function download(url, filename, cb) {
  console.log(`Downloading ${url} into ${filename}`);
  superagent.get(url).end((err, res) => {
    if (err) {
      return cb(err);
    }
    saveFile(filename, res.text, (err) => {
      if (err) {
        return cb(err);
      }
      console.log(`Downloaded and saved: ${url}`);
      cb(null, res.text);
    });
  });
}

function spiderLinks(currentUrl, body, nesting, cb) {
  if (nesting === 0) {
    // Remember Zalgo?
    return process.nextTick(cb);
  }

  const links = getPageLinks(currentUrl, body);
  if (links.length === 0) {
    return process.nextTick(cb);
  }

  /** v2 */
  //   function iterate(index) {
  //     if (index === links.length) {
  //       return cb();
  //     }

  //     spider(links[index], nesting - 1, function (err) {
  //       if (err) {
  //         return cb(err);
  //       }
  //       iterate(index + 1);
  //     });
  //   }

  //   iterate(0);

  /** v3 */
  let completed = 0;
  let hasErrors = false;
  function done(err) {
    if (err) {
      hasErrors = true;
      return cb(err);
    }
    if (++completed === links.length && !hasErrors) {
      return cb();
    }
  }

  links.forEach((link) => spider(link, nesting - 1, done));
}
