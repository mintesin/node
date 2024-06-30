import { inflateRaw, deflateRaw } from "zlib";
import { promisify } from "util";

const infpromise = promisify(inflateRaw);
const defpromise = primisify(deflateRaw);
export function zlibMiddleware() {
  return {
    inbound(message) {
      return infpromise(Buffer.from(message));
    },
    outbound(message) {
      return defpromise(message);
    },
  };
}
