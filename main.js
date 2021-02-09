let cron = require('node-cron');
// const fetch = require("node-fetch");

const { sendMail } = require('./reportSender');
const { topHeadlines } = require('./news');
let counter = 1;
async function fetchAndSend() {
  let data = await topHeadlines();
  console.log(data)
  let total = "";
  const layer = data[2];
  for (let i = 0; i < layer.length; i++) {
    const article = layer[i];
    total += `<br></br>${article.title} <a src=${article.url}>Original Link</a>`;
  }
  //  .forEach((article) => {
  //   console.log(article.title)
  //   total += `<br></br>${article.title}`;
  // console.log("parsedData:", parsedData)
  cron.schedule('* * * * *', () => {
    /*
        generate your report here then send the report using
        any reportSender logic that you implemnted email, telegram bot,...
    */
    sendMail(`hello world ${counter}`, `Top headlines for today:
              ${total}`);
    counter++;
  });
}
fetchAndSend();

// console.log("sending mail...");
// sendMail("HELLO WORLD", "this is email body and wow automation is <h1>cool</h1>")
// console.log("email sent!")
