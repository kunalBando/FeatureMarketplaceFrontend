import React from "react";
import "../Design/UserHome.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserNavbar from "../Components/UserNavbar";

const GridBox = ({ data }) => {
  return (
    <>
      <div className="grid-box">
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <a href={data.moreLink} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </>
  );
};

const UserHome = () => {
  const gridData = [
    {
      title: "Entity 1",
      content: "Lorem ipsum dolor sit amet.",
      moreLink: "https://example.com/feature1",
    },
    {
      title: "Entity 2",
      content: "Consectetur adipiscing elit.",
      moreLink: "https://example.com/feature2",
    },
    {
      title: "Entity 3",
      content: "Sed do eiusmod tempor incididunt.",
      moreLink: "https://example.com/feature3",
    },
    {
      title: "Entity 4",
      content: "Ut labore et dolore magna aliqua.",
      moreLink: "https://example.com/feature4",
    },
    {
      title: "Entity 5",
      content: "Ut enim ad minim veniam.",
      moreLink: "https://example.com/feature5",
    },
    {
      title: "Entity 6",
      content: "Quis nostrud exercitation ullamco laboris.",
      moreLink: "https://example.com/feature6",
    },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/userhome">
            Feature Marketplace
          </a>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <div className="col-md-4 offset-1">
              <div className="input-group">
                <button type="button" className="btn btn-info">
                  Search
                </button>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <ul class="navbar-nav offset-1">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/customsearch"
                >
                  Custom Search
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/addfeature"
                >
                  Add Feature
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/addfeature"
                >
                  Upload Feature
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/userhome"
                >
                  Favourites
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/userhome"
                >
                  My Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="landing-page">
        <div className="grid-container">
          {/* Left Side - Grids */}
          <div className="grids">
            <h2>Popular Entities</h2>
            <div className="grid-group">
              {gridData.map((data, index) => (
                <GridBox key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="table-container">
          {/* Right Side - Table */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Entity Name</th>
                <th>Feature Name</th>
                <th>Feature Value</th>
                <th>Feature Type</th>
                <th>Timestamp</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {/* Sample data */}
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>25</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>30</td>
                <td>John Doe</td>
                <td>25</td>
              </tr>
              {/* Add more table rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>              
            </ul>
          </div>          
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Team1 Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default UserHome;
