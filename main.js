const axios = require('axios');
const cheerio = require('cheerio');
const colors = require('colors');
const { sendDelayedEmail } = require('./utils');
const { trainList } = require('./constants');
require('dotenv').config();

async function main() {
  for await (const train of trainList) {
    try {
      if (train.condition) {
        const { data } = await axios.get(train.url);
        const $ = cheerio.load(data);
        const status = $(train.selector).text().trim();

        if (status != 'Right Time') {
          await sendDelayedEmail(train, status);
        }
      }
    } catch (error) {
      console.error(`Error Fetching Data: ${error}`.red);
    }
  }
}

main();
