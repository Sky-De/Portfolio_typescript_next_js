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
      "@+3 @years with a fervent passion for learning, crafting and maintaining high-quality web applications",
      "My proficiency extends across a spectrum of @front-end and @back-end technologies",
      "Encompassing @HTML, @CSS, @JavaScript, @TypeScript, @React.js, @Redux, @Node.js, and @Express.js.",
      "I possess a good understanding of user experience @(UX) and user interface @(UI) design principles",
      "constantly seeking innovative ways to elevate the user experience of my creations.",
    ],
  },
  {
    title: "Online work",
    desc: [
      "In addition to my technical expertise, I bring forth valuable assets such as my substantial contributions to @open-source projects on @GitHub.",
      "This experience has equipped me with the proficiency to navigate the intricacies of forking to pull requests within the @Git @ecosystem.",
      "Furthermore, my ability to @work @remotely, facilitated by my mastery of Git and version control techniques and my great communication skill, enables me to seamlessly integrate into any team,admi.",
    ],
  },
  {
    title: "Abilities",
    desc: [
      "@Disciplined and @determined: Lifelong learning fuels my commitment to meeting deadlines and overcoming challenges. My engineering and web development background drives me to succeed.",
      "@Adaptable and @versatile: Proven @+2 @years in high-profile national projects and @+5 @years self-employment, I Skilled at adapting to changing requirements to ensure project success.",
      "@Sharp @problem-solving: My engineering background and high IQ refine my ability to identify, analyze, and resolve complex issues, even under pressure.",
      "@Exceptional @collaborator: A team player thriving in collaborative settings, I share knowledge and insights with enthusiasm. I communicate effectively to build rapport and foster a harmonious work environment.",
    ],
  },
];


{
  /* Discipline: I am committed to lifelong learning and continuous professional development. I set aside time each day to learn new things, even if it's just for a few minutes. For example, I learned English by having a 7-minute daily conversation for 470 days in a row. I am also learning about web development and other tech skills.
  Self-Motivation: I am able to learn new things on my own, without the need for external motivation. I am driven by my curiosity and desire to grow as a person and professional.
              Adaptability: I am able to quickly adapt to new learning environments and situations. I am also able to pivot my learning goals as needed. For example, when I started learning web development, I realized that I needed to learn JavaScript first. So, I pivoted my learning goals to focus on JavaScript.
              Collaboration: I am a team player and I am always eager to learn from others. I am also able to share my knowledge and skills with others. I believe that we can all learn from each other and grow together.
              Communication: I am an effective communicator, both verbally and in writing. I am able to clearly explain complex concepts and ideas. I am also able to listen actively and understand others' perspectives.
              Empathy: I am able to put myself in other people's shoes and understand their needs and motivations. This helps me to tailor my learning approach to the specific needs of the situation. */
}
