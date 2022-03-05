module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efbd1e295cdc85756e81048f47166639'),
  },
});
