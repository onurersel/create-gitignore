#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');

axios.get('https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore')
  .then(response => {
    fs.writeFileSync('/Users/onurersel/Desktop/gitignore', response.data, {encoding: 'utf8'});
    console.log("Created .gitignore file for node.js project");
  })
  .catch(err => {
    console.log(err);
  })