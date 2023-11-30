import React, { useEffect, useState } from "react";

const Main = ({ search }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(search);
  }, [search]);

  const getNews = async (search) => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${search}+&apiKey=d83cab8f161240e5bcc0ba6a351d9061`
      );
      const data = await res.json();
      setNews(data.articles || []);
      // console.log(data.articles)
    } catch (error) {
      // console.error("error fetching news", error);
    }
  };

  const img =
    "https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg";
  const setImage = (event) => {
    event.target.src = img;
  };

  return (
    <div className="news">
      <div className="row">
        {news.length === 0 ? (
          <div className="error-message"> News not Found </div>
        ) : (
          news.map((item) => (
            <div className="col news-column">
              <div className="card">
                {item.urlToImage ? (
                  <img
                    src={item.urlToImage}
                    alt=""
                    className="card-img-top"
                    onError={setImage}
                  />
                ) : (
                  <div className="no-image"> NO IMAGE </div>
                )}
                <h6 className="card-header">{item.title}</h6>
                <div className="card-body">
                  <p className="news-text" style={{ fontSize: 16 }}>
                    {item.description}
                  </p>
                  <button className="btn btn-success">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                        background: "blue",
                      }}
                      href={item.url}
                    >
                      More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
