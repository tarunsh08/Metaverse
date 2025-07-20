import { WHITELISTED_ORTIGINS } from "../constant.js";

export const corsOptions = {
  origin: function (origin, callback) {
    if (WHITELISTED_ORTIGINS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};
