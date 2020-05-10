require('dotenv').config();

const withMDX = require('@next/mdx')();
const withImages = require('next-images');

module.exports =  withImages({
  webpack(config, options) {
    return config
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
});
