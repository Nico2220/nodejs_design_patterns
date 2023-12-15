import { join, extname } from "path";
import { URL } from "url";
import slug from "slug";
import cheerio from "cheerio";

export function urlToFilename(url) {
  const parsedUrl = new URL(url);

  const urlPath = parsedUrl.pathname
    .split("/")
    .filter(function (component) {
      return component !== "";
    })
    // .map(function (component) {
    //   return slug(component, { remove: null });
    // })
    .join("/");

  let filename = join(parsedUrl.hostname, urlPath);

  if (extname(filename).match("/html/")) {
    filename += ".html";
  }

  return filename;
}

export function getPageLinks(currentUrl, body) {
  return Array.from(cheerio.load(body)("a"))
    .map(function (element) {
      return getLinkUrl(currentUrl, element);
    })

    .filter(Boolean);
}

// getPageLinks("https://nico2220.github.io/portfolio/index.html", body);

function getLinkUrl(currentUrl, element) {
  const parsedLink = new URL(element.attribs.href || "", currentUrl);
  const currenParsedUrl = new URL(currentUrl);
  if (
    parsedLink.hostname !== currenParsedUrl.hostname ||
    !parsedLink.pathname ||
    extname(parsedLink.toString()).match(".pdf")
  ) {
    return null;
  }
  return parsedLink.toString();
}
