import React from "react";
import "../../index.css";


export default class Gallery extends React.Component {
  render() {
    let alternate =
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Quinquetra-interlaced-alternate.svg";
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a key={index} className="book" href={infoLink} target="_blank">
              <img
                src={
                  imageLinks !== undefined ? imageLinks.thumbnail : alternate
                }
                alt="" className="book-img"
              />
              <div className="book-text">
              {title}
              </div>

            </a>
          );
        })}
      </div>
    );
  }
}
