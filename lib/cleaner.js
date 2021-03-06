'use strict';

const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const config = require('../config');
const out = require('./out');

const cwd = process.cwd();

module.exports = {
  // clear directory of generated posts
  cleanPosts() {
    const { postPath, imageLocalPath, saveImage } = config;
    const postDist = path.join(cwd, postPath);
    out.info(`remove yuque posts: ${postDist}`);
    rimraf.sync(postDist);
    if (saveImage) {
      const imageDist = path.join(cwd, imageLocalPath);
      out.info(`remove yuque posts: ${imageDist}`);
      rimraf.sync(imageDist);
    }
  },

  // clear cache of posts' data
  clearCache() {
    const cachePath = path.join(cwd, 'yuque.json');
    try {
      out.info(`remove yuque local cache: ${cachePath}`);
      fs.unlinkSync(cachePath);
    } catch (error) {
      out.warn(error.message);
    }
  },
};
