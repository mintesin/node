export class CheckUrls {
  constructor(urls) {
    this.urls = urls;
  }
  async *[Symbol.asyncIterator]() {
    for (const url of this.urls) {
      try {
        const checkResult = await superagent.head(url).redirects(2);
        yield { url, statusCode: checkResult.status };
      } catch (err) {
        yield { url, statusCode: err.status };
      } finally {
        console.log("It was such simple for Us ");
      }
    }
  }
}
