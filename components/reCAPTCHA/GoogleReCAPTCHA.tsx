import { Dispatch, SetStateAction } from "react";
import ReCAPTCHA from "react-google-recaptcha";
type GoogleReCAPTCHAProps = {
  setCaptcha: Dispatch<SetStateAction<string | null | undefined>>;
};

const GoogleReCAPTCHA = ({ setCaptcha }: GoogleReCAPTCHAProps) => {
  return (
    <>
      <p className="md:w-1/3 text-center">
        I did not make any field require for better user experience, but i need
        to make sure you are a human!
      </p>
      <ReCAPTCHA
        className="my-4"
        sitekey="6Le5Sj0pAAAAAKOn4YnAp84jAc7PUy2uwiY0ChT7"
        onChange={setCaptcha}
        theme="light"
      />
    </>
  );
};

export default GoogleReCAPTCHA