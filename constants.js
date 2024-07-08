/**
 * id: A unique identifier
 * name: The name of the train
 * url: Using confirmtkt website to get train status info
 * selector: JS Selector to extract the right station info
 * condition: Should check this train info or not decided by this condition
 */
const trainList = [
  {
    id: 1,
    name: '14205 - AYODHYA EXPRESS',
    url: 'https://www.confirmtkt.com/train-running-status/14205',
    selector: '.running-status > div:nth-child(1) > div > div:nth-child(5) > div',
    condition: new Date().getHours() > 16
  },
];

module.exports = { trainList };
