const Nightmare = require('nightmare');
nightmare = new Nightmare();

nightmare.goto('https://www.google.co.uk/')
  .end()
  .then((result) => {
    console.log('success');
  })
  .catch((err) => {
    console.log('fail', err);
  })
