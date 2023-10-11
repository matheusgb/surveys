export default {
  mongoUrl: global.__MONGO_URI__ ?? 'mongodb://localhost:27017/survey-api',
  port: process.env.PORT ?? 3001
}
