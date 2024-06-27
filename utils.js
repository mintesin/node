const path=require('path')
const URL=require('url')
const slug=require('slug')

function urlToFilename (url) {
    const parsedUrl = new URL.URL(url)

  const urlPath = parsedUrl.pathname.split('/')
    .filter(function (component) {
      return component !== ''
    })
    .map(function (component) {
      return slug(component, { remove: null })
    })
    .join('/')
  let filename = path.join(parsedUrl.hostname, urlPath)
  if (!path.extname(filename).match(/htm/)) {
    filename += '.html'
  }

  return filename
}
module.exports = urlToFilename