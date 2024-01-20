import { NextApiResponse } from "next";

export const GET = async (req: Request, res: NextApiResponse) => {
  return res.json({ message: "welcome to my server!" });
};
