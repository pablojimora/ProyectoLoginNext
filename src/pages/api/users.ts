// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


type Users = {
  name: string;
  age:number;
};

type UsersResponse = {
  users:Users[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersResponse>,
) {
  
  const users = [
    {name: "Juan", age: 33},
    {name: "Camila", age: 53},
    {name: "Carlos", age: 23},
    {name: "Carolina", age: 13},
  ]
  console.log(users)

  res.status(200).json({users});
}
