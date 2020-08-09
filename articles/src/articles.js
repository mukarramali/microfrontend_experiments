import React from "react";

const articles = [
  {
    title: "SchmieDevs looking for answers",
    content:
      "Something is wrong with the server. Which has intruiged SchmieDevs to look for answers",
  },
  {
    title: "They solved it",
    content:
      'No body could found actual reason, then one brilliant mind came up with the idea... "Lets try restarting" and it worked.',
  },
];

export default function Articles() {
  return (
    <div>
      {articles.map((article, i) => (
        <div key={i}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}
