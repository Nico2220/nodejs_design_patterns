import path from "path";
import { URL } from "url";
import slug from "slug";

export function urlToFilename(url) {
  const parsedUrl = new URL(url);

  const urlPath = parsedUrl.pathname
    .split("/")
    .filter(function (component) {
      return component !== "";
    })
    // .map(function (component) {
    //   return slug(component, { remove: null });
    // });
    .join("/");
  console.log("filename=", urlPath);

  let filename = path.join(parsedUrl.hostname, urlPath);

  if (path.extname(filename).match("/html/")) {
    filename += ".html";
  }

  return filename;
}
