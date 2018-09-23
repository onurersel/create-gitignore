#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');
const program = require('commander');

const URLS = {
  NODE: 'https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore',
  SWIFT: 'https://raw.githubusercontent.com/github/gitignore/master/Swift.gitignore',
  OBJC: 'https://raw.githubusercontent.com/github/gitignore/master/Objective-C.gitignore',
}

function create(url, projectTypeName) {
  return axios.get(url)
    .then(response => {
      const data = `.DS_Store\n.idea\n\n${response.data}`;
      fs.writeFileSync('.gitignore', data, {encoding: 'utf8'});
      console.log(`Created .gitignore file for ${projectTypeName} project`);
    })
    .catch(err => {
      console.log(err);
    })
}

program
  .version('1.0.1', )
  .option('--node')
  .option('--swift')
  .option('--objc')
  .parse(process.argv);

if (program.node) {
  create(URLS.NODE, 'node.js');
} else if (program.swift) {
  create(URLS.SWIFT, 'Swift');
} else if (program.objc) {
  create(URLS.OBJC, 'Objective C');
} else {
  console.log('No project type selected. Use `create-gitignore --help` for options.')
}
