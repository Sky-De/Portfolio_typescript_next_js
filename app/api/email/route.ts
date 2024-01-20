import { FormDataState } from "@/types/allTypes";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_APP_PASS;
console.log(email, pass);

let config = {
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
};

export const POST = async (req: Request, res: NextApiResponse) => {
  const formData: FormDataState = await req.json();
  console.log(formData);

  // refactore message text
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

    return new NextResponse("done");
  } catch (error) {
    return new NextResponse(error as string);
  }
};
