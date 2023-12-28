import React from "react";

const TextMarker = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <li
      className={`text-body-light dark:text-body-dark text-sm  ml-1 mb-1 first-letter:ml-1 list-item`}
    >
      {words.map((word, index) => {
        if (word.startsWith("@")) {
          const trimmedWord = word.substring(1);
          return <strong key={index}>{trimmedWord} </strong>;
        }
        return <React.Fragment key={index}>{word} </React.Fragment>;
      })}
    </li>
  );
};

export default TextMarker;
