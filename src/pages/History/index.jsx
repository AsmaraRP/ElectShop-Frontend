import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import HistoryCard from "../../components/historyCard";

function History() {
  return (
    <div className="container pagePreview">
      <input
        type="search"
        placeholder="Tap To Search For Something"
        className="history__searchbar"
      />
      <button className="history__searchButton">
        <img
          src={require("../../assets/images/Search.png")}
          alt="searchBar"
          style={{ width: "50%" }}
        />
      </button>
      <button className="history__sort">
        <img src={require("../../assets/images/sort.png")} alt="profileBar" />
      </button>
      <h1 className="history__header">Shopping History</h1>
      <div>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}

export default History;
