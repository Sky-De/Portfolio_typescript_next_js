import {
  FormDataState,
  FormSenderReturn,
  initialFormDataState,
} from "@/types/allTypes";
import { useState } from "react";

export const useFormSender = (): FormSenderReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataState>(initialFormDataState);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSended, setIsSended] = useState<boolean>(false);

  const sendForm = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(
        "https://skyde-portfolio.netlify.app/api/email",
        {
          method: "POST",
          body: JSON.stringify({ ...formData }),
        }
      );
      if (result.ok) {
        setIsLoading(false);
        setIsSended(true);
        setFormData(initialFormDataState);
      }
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
      setIsSended(false);
      setIsError(true);
    }
  };

  return { isLoading, isError, isSended, sendForm, formData, setFormData };
};
