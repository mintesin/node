import { CheckUrls } from "./asyncIterators.mjs";

async function main() {
  const checkUrls = new CheckUrls([
    "https://www.npmjs.com/package/superagent",
    "https://www.macrumors.com/how-to/hide-last-seen-status-whatsapp/#:~:text=Tap%20Account.,%2C%20My%20Contacts%2C%20or%20Nobody.",
    "https://openai.com/chatgpt/",
  ]);
  for await (const status of checkUrls) {
    console.log(status);
  }
}

main();
