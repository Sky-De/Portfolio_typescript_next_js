import React, { FC } from "react";

const TextMarker: FC<{ text: string }> = ({ text }) => {
  const initWord = "// " + text;
  const words = initWord.split(" ");
  return (
    <span
      data-testid="textMarkerSpan"
      className={`apply__body lg:text-base  ml-1 mb-1 first-letter:ml-1 `}
    >
      {words.map((word, index) => {
        if (word.startsWith("@")) {
          const trimmedWord = word.substring(1);
          return (
            <strong
              data-testid="textMarkerStrong"
              className="apply__heading"
              key={index}
            >
              {trimmedWord}{" "}
            </strong>
          );
        }
        return <React.Fragment key={index}>{word} </React.Fragment>;
      })}
    </span>
  );
};

export default TextMarker;
