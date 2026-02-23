
import dotenv from "dotenv";
dotenv.config();
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "ayushd-private",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function init() {
  const url = await getObjectURL("super-saiyan-blue-3840x2160-17603.jpg");
  console.log("URL:", url);
}

init();