const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pictures": path.resolve(__dirname, "src/pictures"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  eslint: null,
};
