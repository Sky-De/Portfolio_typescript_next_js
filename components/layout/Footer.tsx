import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary-light dark:bg-bg-secondary-dark footer  mt-auto footer sticky bottom-0 w-full flex justify-center items-center gap-4">
      <Link href="https://www.linkedin.com/in/sky-de-763248228">
        <i className="bx bxl-linkedin-square apply__footer--item"></i>
      </Link>
      <Link href="mailto:sky_de1991@outlook.com">
        <i className="bx bxl-google apply__footer--item"></i>
      </Link>
      <Link href="https://github.com/Sky-De">
        <i className="bx bxl-github apply__footer--item"></i>
      </Link>
    </footer>
  );
};

export default Footer;
