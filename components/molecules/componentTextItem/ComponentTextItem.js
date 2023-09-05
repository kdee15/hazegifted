import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./ComponentTextItem.module.scss";

function ComponentTextItem({ item }) {
  const { title, copy, date } = item.fields;
  return (
    <div>
      <h3>\\{title}\</h3>
      <ReactMarkdown>{copy}</ReactMarkdown>
      <p>{date}</p>
    </div>
  );
}

export default ComponentTextItem;
