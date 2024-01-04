import { FC } from "react";
import { v4 as uuid } from "uuid";
import { LearnListProps } from "@/types/allTypes";
import LearnItem from "./LearnItem";

const LearnList: FC<LearnListProps> = ({ title, learnListItems = [] }) => {
  return (
    <section className="apply__learn--section">
      <h4 className="apply__body italic">{`" ${title} "`}</h4>
      <ul className="apply__learn--list">
        {learnListItems.length > 0 &&
          learnListItems.map((item, index) => (
            <LearnItem key={uuid()} index={index} item={item} />
          ))}
      </ul>
    </section>
  );
};

export default LearnList;
