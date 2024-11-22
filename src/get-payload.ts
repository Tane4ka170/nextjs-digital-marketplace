import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cashed = (global as any).payload;

if (!cashed) {
  cashed = (global as any).payload = {
    client: null,
  };
}
export const getPayloadClient = async () => {};
