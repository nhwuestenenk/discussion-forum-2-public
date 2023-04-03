'use strict';

const fs = require('fs').promises;
const path = require('path');
const currentFile = __filename.split(/[\\/]/).pop();
const currentDir = __dirname;

// Loop through all files in path and use them as seeder
async function getSeederFiles(dir, seederFiles = []) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    if (file == currentFile) {
      // Do not process this current file recursively
      continue;
    }
    const filePath = path.join(dir, file);
    const relativeFilePath = filePath.substr(currentDir.length);
    const stat = await fs.stat(filePath);
    if (stat.isFile()) {
      if (dir !== currentDir) {
        // it is a file, add it to the list
        seederFiles.push({
          name: file,
          path: filePath,
          relativePath: relativeFilePath,
        });
      }
    } else {
      // it is a folder, run the seeders in the folder
      await getSeederFiles(filePath, seederFiles);
    }
  }

  return seederFiles;
}

async function runSeederFiles(dir, queryInterface, Sequelize, upOrDown) {
  // Get the seederFiles
  const seederFiles = await getSeederFiles(dir);

  // Sort by filename
  seederFiles.sort((a, b) => (a.name > b.name ? 1 : -1));

  // run
  for (const file of seederFiles) {
    console.log(`== ${file.relativePath}: seeding =======`);
    await require(file.path)[upOrDown](queryInterface, Sequelize);
    console.log(`== ${file.relativePath}: seeded (unknown s)`);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await runSeederFiles(__dirname, queryInterface, Sequelize, 'up');
  },

  down: async (queryInterface, Sequelize) => {
    await runSeederFiles(__dirname, queryInterface, Sequelize, 'down');
  },
};
