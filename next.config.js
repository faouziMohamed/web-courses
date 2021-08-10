const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  webPack5: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ];
  },
  assetPrefix: ghPages ? '/faouzimohamed.github.io/webcourse' : '',
};
