import React from "react";

const TextMarker = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <li
      className={`apply__body lg:text-base  ml-1 mb-1 first-letter:ml-1 `}
    >
      {words.map((word, index) => {
        if (word.startsWith("@")) {
          const trimmedWord = word.substring(1);
          return (
            <strong className="apply__heading" key={index}>
              {trimmedWord}{" "}
            </strong>
          );
        }
        return <React.Fragment key={index}>{word} </React.Fragment>;
      })}
    </li>
  );
};

export default TextMarker;