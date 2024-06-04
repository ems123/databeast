import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/FooterPages";
import { auto } from "@popperjs/core";
import axios from "axios";

const CryptocrisisDetail = () => {
  const GAINERS_COUNT = 3;
  const LOSERS_COUNT = 3;
  const ITEMS_PER_PAGE = 10; // Number of items per page
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [latestPrice, setLatestPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const API_KEY = "70dd4b3f5b53c38499804e3499761573";

  const formatLongPrice = (number) => {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(number);
  };

  const fetchGainers = () => {
    axios
      .get(
        `https://bcmapp1.azurewebsites.net/price-gainers/?rows=${GAINERS_COUNT}&currency=USD`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      .then((resp) => {
        setTopGainers(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchLosers = () => {
    axios
      .get(
        ` https://bcmapp1.azurewebsites.net/price-loosers/?rows=${LOSERS_COUNT}&currency=USD`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      .then((resp) => {
        setTopLosers(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchLatestPrice = () => {
    axios
      .get(
        "https://bcmapp1.azurewebsites.net/latest-prices/?description=&currency=USD&rows=100&page=1&sort=asc",
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      .then((resp) => {
        setLatestPrice(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchGainers();
    fetchLosers();
    fetchLatestPrice();
    return () => {};
  }, []);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the items to display based on current page and items per page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = latestPrice.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(latestPrice.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div>
        <Header />
        <div
          className="container-fluid px-5"
          style={{ marginTop: 100, marginBottom: 100 }}
        >
          <h5
            className="text-white text-center h2 my-4"
            style={{ margin: auto }}
          >
            Coin Data
          </h5>

          <div className="text-white" style={{ margin: auto }}>
            {/* main content from here */}

            {/* MAIN DIV */}
            <div className="w-full text-white">
              {/* Div for Loser & gainers colum */}
              {/* Main div */}
              <div className="row">
                {/* Div for Top Gainers */}
                <div className="col mb-4 d-flex">
                  <div className="rounded bg-dark p-4 flex-fill">
                    <div className="mb-3">
                      <h1
                        className="text-white ml-2 mt-3"
                        style={{ fontSize: "20px" }}
                      >
                        Top Gainers 24h
                      </h1>
                      <div
                        className="bg-white mt-2"
                        style={{ height: "2px" }}
                      ></div>
                    </div>
                    <div className="row">
                      {topGainers.map((item, index) => (
                        <div
                          key={index}
                          className="col-md-4 d-flex align-items-center text-white mb-3"
                        >
                          <img
                            src={
                              item?.logo
                                ? item.logo
                                : ` https://placehold.co/50x50.png?text=${item?.symbol}`
                            }
                            className="mr-3"
                            alt={item?.symbol}
                            style={{ width: "30px", height: "30px" }}
                          />
                          <div>
                            <div
                              className="font-weight-bold"
                              style={{ fontSize: "10px" }}
                            >
                              {item?.name}
                            </div>
                            <div>
                              <span
                                className="text-sm"
                                style={{ fontSize: "10px" }}
                              >
                                {item.price} {item.currency}
                              </span>
                              <div
                                className={`text-sm ${
                                  item.percent_change_24h > 0
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                                style={{ fontSize: "10px" }}
                              >
                                {item.percent_change_24h}% / 24h
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Div for Top Losers */}
                <div className="col mb-4 d-flex">
                  <div className="rounded bg-dark p-4 flex-fill">
                    <div className="mb-3">
                      <h1
                        className="text-white ml-2 mt-3"
                        style={{ fontSize: "20px" }}
                      >
                        Top Losers 24h
                      </h1>
                      <div
                        className="bg-white mt-2"
                        style={{ height: "2px" }}
                      ></div>
                    </div>
                    <div className="row">
                      {topLosers.map((item, index) => (
                        <div
                          key={index}
                          className="col-md-4 d-flex align-items-center text-white mb-3"
                        >
                          <img
                            src={
                              item?.logo
                                ? item.logo
                                : ` https://placehold.co/50x50.png?text=${item?.symbol}`
                            }
                            className="mr-3"
                            alt={item?.symbol}
                            style={{ width: "30px", height: "30px" }}
                          />
                          <div>
                            <div
                              className="font-weight-bold"
                              style={{ fontSize: "10px" }}
                            >
                              {item?.name}
                            </div>
                            <div>
                              <span
                                className="text-sm"
                                style={{ fontSize: "10px" }}
                              >
                                {item.price} {item.currency}
                              </span>
                              <div
                                className={`text-sm ${
                                  item.percent_change_24h > 0
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                                style={{ fontSize: "10px" }}
                              >
                                {item.percent_change_24h}% / 24h
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Div For Table Latestprice starts */}
              <div className="">
                <table class="table table-dark  text-light table-striped table-hover">
                  <thead>
                    <tr scope="row">
                      <th scope="col">Coin</th>
                      <th scope="col">Price</th>
                      <th scope="col">1h</th>
                      <th scope="col">24h</th>
                      <th scope="col">7d</th>
                      <th scope="col">30d</th>
                      <th scope="col">Category</th>
                      <th scope="col">MarketCap</th>
                      <th scope="col">Volume(24h)</th>
                      <th scope="col">Total Supply</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <>
                        <tr>
                          <td className="">
                            <div className="d-flex align-items-center">
                              <img
                                src={
                                  item?.logo
                                    ? item.logo
                                    : `https://placehold.co/25x25.png?text=${item?.symbol}`
                                }
                                className="card-img px-2"
                                style={{ width: "35px" }}
                                alt="..."
                              ></img>
                              <span className="d-flex flex-column ml-2">
                                {item?.name}
                              </span>
                            </div>
                          </td>
                          <td className="">
                            {formatLongPrice(item?.price)}
                            <span className="ml-2">{item.currency}</span>
                          </td>
                          <td>
                            <span
                              className={`mx-1 ${
                                item?.percent_change_1h >= 0
                                  ? "text-info"
                                  : "text-danger"
                              } col`}
                            >
                              {item.percent_change_1h}%
                            </span>
                          </td>
                          <td>
                            <span
                              className={`mx-1 ${
                                item?.percent_change_24h >= 0
                                  ? "text-info"
                                  : "text-danger"
                              } col`}
                            >
                              {item.percent_change_24h}%
                            </span>
                          </td>
                          <td>
                            <span
                              className={`mx-1 ${
                                item?.percent_change_7d >= 0
                                  ? "text-info"
                                  : "text-danger"
                              } col`}
                            >
                              {item.percent_change_7d}%
                            </span>
                          </td>
                          <td>
                            <span
                              className={`mx-1 ${
                                item?.percent_change_30d >= 0
                                  ? "text-info"
                                  : "text-danger"
                              } col`}
                            >
                              {item.percent_change_30d}%
                            </span>
                          </td>
                          <td>{item?.category}</td>
                          <td>{formatLongPrice(item?.market_cap)}</td>
                          <td>{formatLongPrice(item?.volume_24h)}</td>
                          <td
                            className="w-auto"
                            style={{ width: "1px", whiteSpace: "nowrap" }}
                          >
                            {formatLongPrice(item?.total_supply)}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                {/* Pagination controls */}
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    {[...Array(totalPages).keys()].map((pageNumber) => (
                      <li
                        key={pageNumber + 1}
                        className={`page-item ${
                          currentPage === pageNumber + 1 ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(pageNumber + 1)}
                      >
                        <span className="page-link">{pageNumber + 1}</span>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* Div for Table Latestprice Ends */}
            </div>
            {/* MAIN DIV ENDS */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CryptocrisisDetail;
