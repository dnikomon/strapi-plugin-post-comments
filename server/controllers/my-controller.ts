export default ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('post-comments')
      .service('myService')
      .getWelcomeMessage();
  },
});
