// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs");
const readMultipleFiles = require("read-multiple-files");

type Data = {
  [key: string]: string;
};

// const readFiles = async (dir: any, cb: any) => {
//   const obj: Data = {};
//   await fs.readdir(dir, (err: any, files: any) => {
//     if (err) {
//       throw err;
//     }

//     files.forEach(async (file: any) => {
//       console.log(file);
//       const date: string = file.split("_")[1].split(".")[0];
//       await fs.readFile(
//         `./blogposts/${file}`,
//         "utf8",
//         (err: any, data: any) => {
//           obj[date] = data;
//           console.log("flag1");
//         }
//       );
//     });
//   });
//   console.log("flag2");
//   cb(obj);
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dir: string = "./blogposts";
  let files = ["test_01-04-2023"];
  readMultipleFiles(files, "utf8", function (err: any, inputFiles: any) {
    if (err) {
      console.log(err);
    }
    console.log(inputFiles);
  });
  res.status(200).json({ name: "John" });

  // readFiles(dir, function (data: any) {
  // });
}
