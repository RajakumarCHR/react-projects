import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const limit = 10;
  let total = 0;
  useEffect(() => {
    fetchMoreData();
  }, []);
  const handleScroll = () => {
    const { scrollTop, clientHight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHight >= scrollHeight - 10 && !loading) {
      fetchMoreData();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const fetchData = async () => {
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);
    // handle 404
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
  };

  const hasMoreQuotes = (page, limit, total) => {
    const startIndex = (page - 1) * limit + 1;
    return total === 0 || startIndex < total;
  };

  const fetchMoreData = async (page, limt) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (hasMoreQuotes(page, limit, total)) {
          const response = await fetchData();
          setData(response.data);
        }
      } catch (error) {
        console.log("eerrorr", error);
      } finally {
        setLoading(false);
      }
    }, 5000);
  };

  return (
    <>
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
        {loading && <h3>Loading...</h3>}
      </div>
    </>
  );
};
export default InfiniteScroll;
