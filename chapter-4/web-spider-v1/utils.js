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

  let filename = path.join(parsedUrl.hostname, urlPath);

  if (path.extname(filename).match("/html/")) {
    filename += ".html";
    console.log("true");
  }
  console.log("filename=", urlPath);

  return filename;
}
// urlToFilename("https://nico2220.github.io/portfolio/");
