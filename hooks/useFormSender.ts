import { FormDataState } from "@/components/forms/OfferForm";
import { useState } from "react";


export const useFormSender = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isSended, setIsSended] = useState<boolean>(false);

        const sendForm = async (formData?: FormDataState) => {
          try {
            setIsLoading(true);
            const result = await fetch("http://localhost:3000/api/email", {
              method: "POST",
              body: JSON.stringify({ ...formData }),
            });
            if (result.ok) {
              setIsLoading(false);
              setIsSended(true);
            }
          } catch (error) {
            console.log(error);
            setIsLoading(false);
            setIsError(true);
          }
        };

    return { isLoading, isError, isSended, sendForm }
}