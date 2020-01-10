import React, { Component } from "react";
import { FaBookOpen, FaCompass, FaCommentsDollar } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";

class UpComings extends Component {
  state = {
    UpComings: [
      {
        icon: <FaBookOpen />,
        title: "FreeCourses",
        info:
          "online Information Technology courses (IT courses) deliver the basics and beyond in a wide range of topics(trending in market."
      },
      {
        icon: <FaCompass />,
        title: "onlineIDE",
        info:
          "Compile various programming languages online. Add input stream, save output, add notes and tags."
      },
      {
        icon: <FaCommentsDollar />,
        title: "FreeLancing",
        info: "intersted on self-employment or to hire software guys."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <h4>UpComings</h4>
        <div className="services-center">
          {this.state.UpComings.map((item, index) => {
            return (
              <article Key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p> {item.info}</p>
              </article>
            );
          })}
        </div>
        <ul>
          <Link to="/" style={{ color: "yellow" }} className="btn-primary">
            BACK To HOME
          </Link>
        </ul>
      </section>
    );
  }
}
export default UpComings;
