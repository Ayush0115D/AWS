import dotenv from "dotenv";
dotenv.config();
import { S3Client, GetObjectCommand,PutObjectCommand,ListObjectsV2Command } from "@aws-sdk/client-s3";
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
async function putObject(filename,contentType) {
  const command = new PutObjectCommand({
    Bucket: "ayushd-private",
    Key: `uploads/user-uploads/${filename}`,
    ContentType:  "video/mp4",
  });
  const url=await getSignedUrl(s3Client, command);
  return url;
}

async function listObjects(prefix = "") {
  const command = new ListObjectsV2Command({
    Bucket: "ayushd-private",
    key:'/'
  });

  const response = await s3Client.send(command);
 console.log(response)

}

async function init() {
  const url = await getObjectURL("super-saiyan-blue-3840x2160-17603.jpg");
  console.log("URL:", url);
  console.log("URL for uploading:", await putObject(`video-${Date.now()}.mp4`,"video/mp4")
);
 const url2 = await getObjectURL("uploads/user-uploads/image-1771859654600.jpg");
  console.log("URL2:", url2);
  const url3 = await getObjectURL("uploads/user-uploads/video-1771866048285.mp4");
  console.log("URL3:", url3);
  await listObjects();
}
init();