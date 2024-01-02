import axios from "axios";
import { PassThrough } from "stream";

export function createUploadStream(filename) {
  const connector = new PassThrough();

  axios
    .post("http://localhost:3000", connector, {
      headers: {
        "Content-Type": "applications/octet-stream",
        "X-filename": filename,
      },
    })
    .catch((err) => {
      connector.emit(err);
    });

  return connector;
}
