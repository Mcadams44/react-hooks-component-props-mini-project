import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to generate reading time indicator
  const generateReadingTime = (mins) => {
    if (!mins) return "";
    
    let emoji = "";
    if (mins < 30) {
      // For every 5 minutes (rounded up), display a coffee cup
      const coffeeCount = Math.ceil(mins / 5);
      emoji = "☕️".repeat(coffeeCount);
    } else {
      // For every 10 minutes (rounded up), display a bento box
      const bentoCount = Math.ceil(mins / 10);
      emoji = "🍱".repeat(bentoCount);
    }
    
    return `${emoji} ${mins} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {generateReadingTime(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;