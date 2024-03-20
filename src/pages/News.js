import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const apiKey = "c67e46bf060a4f17b2f4908955837e30";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {news.map((article) => (
        <NewsItem
          key={article.id}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
}

export default News;
