import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-Link active text-decoration-none text-${
                    props.mode === "light" ? "dark" : "light"
                  } mx-3`}
                  to="/"
                >
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-Link active text-decoration-none text-${
                    props.mode === "light" ? "dark" : "light"
                  } mx-3`}
                  to="/About.js"
                >
                  {props.about}
                </Link>
              </li>
              
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div
            class={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-5`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Enable Dark-mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
