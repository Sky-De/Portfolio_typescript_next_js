import Image from "next/image";
import Link from "next/link";

const P404 = () => {
  return (
    <div className="h-auto  lg:w-[50%] lg:mx-auto my-auto flex flex-col gap-4">
      <Image
        title="https://storyset.com/"
        width={100}
        height={100}
        className="w-full md:w-[58%] mx-auto"
        src="404.svg"
        alt=""
      />
      <Link href="/" className="callToActionBtn mx-auto w-full text-center">
        Back Home
      </Link>
    </div>
  );
};

export default P404;
