export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri:
      process.env.DATABASE_HOST ||
      'mongodb+srv://admin:NfaRSp7qgoePF8EO@cluster0.vhqhk.mongodb.net/sample_airbnb?retryWrites=true&w=majority',
  },
});
