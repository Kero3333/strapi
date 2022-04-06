module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '80f16313891f70240ede868358641b5a'),
  },
});
