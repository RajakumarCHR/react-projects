import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollExample = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHashMore] = useState(true);

  const limit = 10;
  useEffect(() => {
    axios
      .get(
        `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchData = async () => {
    axios
      .get(
        `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`
      )
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.data]);
        res.data.data.length > 0 ? setHashMore(true) : setHashMore(false);
      })
      .catch((error) => console.log(error));
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <div className="container">
          <h1>Programming Quotes</h1>
          <div className="quotes">
            {data?.map((quote) => {
              return (
                <div className="quote" key={quote.id}>
                  <span>{quote.id}</span>
                  {quote.quote}
                  <p>{quote.author}</p>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default InfiniteScrollExample;
