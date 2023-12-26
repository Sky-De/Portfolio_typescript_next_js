import { FormDataState } from "@/components/forms/OfferForm";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = "sky.de1991@gmail.com";
const pass = "eqfppxfwtxudoyod";
const pass2 = "hsjk rguz xiur xxwj";

let config = {
  service: "gmail",
  auth: {
    user: email,
    pass: pass2,
  },
};


export const POST = async (req: Request, res: NextApiResponse) => {
    const formData : FormDataState = await req.json();
    const message = {
      from: "portfolio",
      to: email,
      subject: "portfolio offer form",
      text: `Type: 
             partTime = ${formData.type.partTime}
             fullTime = ${formData.type.fullTime}
             contract = ${formData.type.contract}
           Role: ${formData.role}
           Description: ${formData.description}
           Salary Range: ${formData.salaryRange}
           User Role: ${formData.userRole}
           User Name: ${formData.userName}
           User Email: ${formData.userEmail}
           TimeZone: ${formData.timeZone}
           User Website URL: ${formData.userWebsiteUrl}`,
    };
    
    try {
    let transporter = nodemailer.createTransport(config);
    
    await transporter.sendMail(message);
    
    return new NextResponse("done");
  } catch (error) {
    return new NextResponse(error as string);
  }

};
