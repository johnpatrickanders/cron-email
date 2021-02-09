const dotenv = require('dotenv');
dotenv.config();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);
// const express = require('express');
// const router = express.Router();
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
// router.get('/', asyncHandler(async (req, res) => {
const topHeadlines = async () => {
  const data = await newsapi.v2.topHeadlines({
    country: 'us',
    language: 'en',
    sortBy: 'relevancy',
    pageSize: 20,
    // page: 20
  })
  return Object.values(data);
}
// res.json({ topHeadlines });
// }))
topHeadlines()
module.exports = { topHeadlines }
