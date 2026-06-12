import { apiPost, apiGet } from "./base";

export const sendSupportMessage = (data) =>
  apiPost("/support", data);

export const getSupportMessages = () =>
  apiGet("/support");