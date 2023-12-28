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
        Before submitting the form, make sure to verify your information. You
        will not be able to edit after the verification process.
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