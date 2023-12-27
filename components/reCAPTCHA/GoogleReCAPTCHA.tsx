// import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";
type GoogleReCAPTCHAProps = {
  setCaptcha: Dispatch<SetStateAction<string | null | undefined>>;
};

const siteKey = process.env.NEXT_PUBLIC_CHAPTCHA_SITE_KEY || "";

const GoogleReCAPTCHA = ({ setCaptcha }: GoogleReCAPTCHAProps) => {
  // const { theme, setTheme } = useTheme();
  return (
    <>
      <p className="w-[90%] md:w-1/3 text-center mt-16">
        I did not make any field required for smoother UX, but i need
        to make sure you are a human !
      </p>
      <ReCAPTCHA
        className="my-4"
        sitekey={siteKey}
        onChange={setCaptcha}
        // theme={theme === "light" ? "dark" :  "light" }
      />
    </>
  );
};

export default GoogleReCAPTCHA