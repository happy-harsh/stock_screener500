import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import "../src/assets/App.css";

const App = () => {
  const [stockData, setStockData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50); // Adjusted to display 140 rows per page
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000/");

    socket.on("stock_data", (data) => {
      setStockData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Calculate total number of pages
  const totalPages = Math.ceil(stockData.length / itemsPerPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, stockData.length);

  // Slice the data to display only the items for the current page
  const currentPageData = stockData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  console.log(stockData)
  return (
    <div>

      <h1>All Stocks</h1>

      <div className="filterBox">
        <input type="number" placeholder="Price Change"/>
        <input type="number" placeholder="Volume Change"/>
        <input type="number" placeholder="Volume"/>
        <button>Filter</button>
      </div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>CMP</th>
            <th>Price Change %</th>
            <th>Volume</th>
            <th>30 Day Average Volume</th>
            <th>30 Day Average Volume %</th>
            <th>Buy Trigger</th>
          </tr>
        </thead>
        <tbody>

          {currentPageData.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.price.toLocaleString()}</td>
              {/* <td>{stock.priceChangePercent}</td> */}
              <td>{stock.volume}</td>
              <td>{stock.thirtyDayAvgVolume}</td>
              {/* <td>{stock.thirtyDayAvgVolumePercent}</td> */}
              {/* <td>{stock.trigger}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
  


    </div>
  );
  
};

export default App;
