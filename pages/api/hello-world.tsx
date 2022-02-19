import { NextApiRequest, NextApiResponse } from "next";

// example simple api route
const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello World" });
};

export default handler;
