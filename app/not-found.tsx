import Image from "next/image";
import Link from "next/link";

const P404 = () => {
  return (
    <div className="section flex flex-col gap-8 w-full ">
      <Image
        loading="lazy"
        title="https://storyset.com/"
        width={100}
        height={100}
        className="w-full md:w-[58%] mx-auto"
        src="404.svg"
        alt=""
      />
      <Link
        href="/"
        className="callToActionBtn mx-auto w-full text-center max-w-[200px]"
      >
        Back Home
      </Link>
    </div>
  );
};

export default P404;
