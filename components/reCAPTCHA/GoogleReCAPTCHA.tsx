import { Dispatch, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import LoaderCube from "../loader/LoaderCube";
type GoogleReCAPTCHAProps = {
  setCaptcha: Dispatch<SetStateAction<string | null | undefined>>;
};

const siteKey = process.env.NEXT_PUBLIC_CHAPTCHA_SITE_KEY || "";

const GoogleReCAPTCHA = ({ setCaptcha }: GoogleReCAPTCHAProps) => {
  return (
    <>
      <p className="md:w-1/3 text-center mt-16">
        I did not make any field required for smoother UX, but i need
        to make sure you are a human !
      </p>
      <ReCAPTCHA
        className="my-4"
        sitekey={siteKey}
        onChange={setCaptcha}
        theme="light"
      />
    </>
  );
};

export default GoogleReCAPTCHA