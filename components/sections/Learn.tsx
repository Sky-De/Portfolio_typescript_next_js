import { useIsInView } from "@/hooks/useIsInVeiw";
import { useRef } from "react";
import { motion } from "framer-motion";

const Learn = () => {
  const learnRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Learn", ref: learnRef });
  return (
    <motion.section
      ref={learnRef}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="learn"
      className="section snap-start snap-always"
    >
      <div className="flex  w-full items-center flex-col lg:flex-row px-2 md:justify-center">
        <div className="learn__intro lg:w-2/3">
          <h2 className=" mx-auto lg:mx-0 pt-8 md:pt-10 text-xl md:text-2xl xl:text-3xl font-semibold text-center sm:w-2/3 lg:text-start lg:w-2/3">
            {`Expanding My Horizons | A Web Developer's Journey of Continuous
          Learning`}
          </h2>
          <p className="w-2/3 text-center lg:text-start  mx-auto lg:mx-0 lg:block apply__body  pb-8 md:pb-10 pt-4">
            As a web developer, I am committed to lifelong learning and
            continuous professional development.{" "}
            <p className="hidden lg:inline">
              I am always seeking out new opportunities to expand my knowledge
              and skills, ensuring that I remain at the forefront of the
              ever-evolving tech landscape. My passion for learning is fueled by
              my curiosity and desire to create innovative and impactful web
              solutions.
            </p>
          </p>
        </div>
        <div className="lg:pt-8">
          <div className="apply__learn--section">
            <h4 className="apply__body italic">{`" Master "`}</h4>
            <ul className="apply__learn--list">
              <li className="apply__learn--item">React-native</li>
              <li className="apply__learn--item">E2E-Test</li>
              <li className="apply__learn--item">Docker</li>
              <li className="apply__learn--item">Linux</li>
              <li className="apply__learn--item">C#</li>
              <li className="apply__learn--item">Unity</li>
            </ul>
          </div>
          <div className="apply__learn--section">
            <h4 className="apply__body italic">{`" Deepen "`}</h4>
            <ul className="apply__learn--list">
              <li className="apply__learn--item">Tailwind</li>

              <li className="apply__learn--item">Express-js</li>
              <li className="apply__learn--item">Node-js</li>
              <li className="apply__learn--item">Testing</li>
              <li className="apply__learn--item">Mongodb</li>
            </ul>
          </div>
          <div className="apply__learn--section">
            <h4 className="apply__body italic">{`" Explore "`}</h4>
            <ul className="apply__learn--list">
              <li className="apply__learn--item">JavaScript</li>
              <li className="apply__learn--item">TypeScript</li>
              <li className="apply__learn--item">React-js</li>
              <li className="apply__learn--item">Next-js</li>
              <li className="apply__learn--item">Redux</li>
              <li className="apply__learn--item">SCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Learn;
