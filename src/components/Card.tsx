import React from "react";
import "../index.css";

interface Card {
  title: string;
  description: string;
  tags: string[];
}
export function Card({ title, description, tags }: Card) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="tags tag-gap">
            {tags.map((tag, index) => (
              <div key={index}>#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
