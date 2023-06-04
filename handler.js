'use strict';

module.exports.hello = async (event) => {
  console.log(event)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(`>>>> HELLO WORLD ${event.name}!!!`)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
};
