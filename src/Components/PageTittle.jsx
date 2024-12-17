import React from "react";

export default function PageTitle({ title }) {
  return (
    <div className="page_title_container">
      <div className="background">
        <div className="overlay">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
