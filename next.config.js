module.exports = {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'], // Specify the file extensions for Next.js pages
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname; // Set the alias for the project root
    return config;
  },
};
