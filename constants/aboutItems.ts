export type AboutProps = {
  title: string;
  desc: string[];
  isOpan?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLDetailsElement, MouseEvent>) => void;
};

export const AboutItemsData: AboutProps[] = [
  {
    title: "Web Development Journey",
    desc: [
      "+3 years with a fervent passion for learning, crafting and maintaining high-quality web applications",
      "My proficiency extends across a spectrum of @front-end and @back-end technologies",
      "Encompassing @HTML, @CSS, @JavaScript, @TypeScript, @React.js, @Redux, @Node.js, and @Express.js.",
      "I possess a good understanding of user experience @(UX) and user interface @(UI) design principles",
      "constantly seeking innovative ways to elevate the user experience of my creations.",
    ],
  },
  {
    title: "Online work",
    desc: ["In addition to my technical expertise, I bring forth valuable assets such as my substantial contributions to open-source projects on GitHub.", "This experience has equipped me with the proficiency to navigate the intricacies of forking to pull requests within the Git ecosystem.", "Furthermore, my ability to work remotely, facilitated by my mastery of Git and version control techniques and my great communication skill, enables me to seamlessly integrate into any team, regardless of geographical constraints."],
  },
  {
    title: "Abilities",
    desc: ["Prior to embarking on my web development journey, I enriched my experience with an impressive @7+ @years in the engineering field.", "This includes @2.5+ @years of involvement in high-level national project for electric train connections", "Followed by @4.5 @years of self-employed work on various contracts.", "they have instilled in me the ability to thrive in collaborative environments and meet @deadlines under pressure."],
  },
];
