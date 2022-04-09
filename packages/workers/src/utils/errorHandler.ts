import { sendResponse } from "./sendResponse";

export const errorHandler = (error: any): Response => {
  return sendResponse(
    {
      status: 500,
      message: error.message || "Server Error",
    },
    {
      status: error.status || 500,
    },
  );
};
