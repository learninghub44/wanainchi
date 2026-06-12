import { apiGet, apiPost } from "./base";

export const getAuthorities = () =>
  apiGet("/authorities");

export const contactAuthority = (id, message) =>
  apiPost(`/authorities/${id}/contact`, { message });