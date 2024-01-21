import { FormDataState } from "@/types/allTypes";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_APP_PASS;

let config = {
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
};

export const POST = async (req: Request) => {
  const formData: FormDataState = await req.json();
  console.log(formData);

  //FIX-- refactore message text
  const message = {
    from: "portfolio",
    to: email,
    subject: "portfolio offer form",
    text: `Type: 
             partTime = ${formData?.type?.partTime}
             fullTime = ${formData?.type?.fullTime}
             contract = ${formData?.type?.contract}
           Role: ${formData?.role}
           Description: ${formData?.description}
           Salary Range: ${formData?.salaryRange}
           User Role: ${formData?.userRole}
           User Name: ${formData?.userName}
           User Email: ${formData?.userEmail}
           TimeZone: ${formData?.timeZone}
           User Website URL: ${formData?.userWebsiteUrl}`,
  };

  try {
    let transporter = nodemailer.createTransport(config);

    await transporter.sendMail(message);

    return new Response("Form sended!");
  } catch (error) {
    return new Response(error as string);
  }
};
