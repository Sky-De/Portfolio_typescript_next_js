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
          learnListItems.map((item) => (
            // colored items
            // <li key={item} className={`apply__learn--item bg-${item}`}>
            //   {item}
            // </li>
            //
            <li
              key={item}
              className={`apply__learn--item bg-bg-secondary-dark dark:bg-bg-secondary-light dark:text-heading-light`}
            >
              {item}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default LearnList;
