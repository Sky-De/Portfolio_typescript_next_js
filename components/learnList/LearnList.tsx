import { v4 as uuid } from "uuid";
import LearnItem from "./LearnItem";

export type LearnListProps = {
  title: string;
  learnListItems: string[];
};

const LearnList = ({ title, learnListItems = [] }: LearnListProps) => {
  return (
    <section className="apply__learn--section">
      <h4 className="apply__body italic">{`" ${title} "`}</h4>
      <ul className="apply__learn--list">
        {learnListItems.length > 0 &&
          learnListItems.map((item, index) => (
            // colored items
            // <li key={uuid()} className={`apply__learn--item bg-${item}`}>
            //   {item}
            // </li>
            <LearnItem key={uuid()} index={index} item={item}/>
          ))}
      </ul>
    </section>
  );
};

export default LearnList;
