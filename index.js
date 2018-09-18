#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');

axios.get('https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore')
  .then(response => {
    const data = `.DS_Store\n.idea\n\n${response.data}`;
    fs.writeFileSync('.gitignore', data, {encoding: 'utf8'});
    console.log("Created .gitignore file for node.js project");
  })
  .catch(err => {
    console.log(err);
  })