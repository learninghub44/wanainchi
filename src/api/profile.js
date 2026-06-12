import { apiGet, apiPatch } from "./base";

export const getMyProfile = () =>
  apiGet("/profiles/me");

export const updateProfile = (data) =>
  apiPatch("/profiles/me", data);

export const uploadAvatar = async (formData) => {
  const res = await fetch("/api/profiles/me/avatar", {
    method: "POST",
    body: formData
  });

  if (!res.ok) throw new Error("Avatar upload failed");
  return res.json();
};

export const getNotifications = () =>
  apiGet("/profiles/me/notifications");

export const markNotificationRead = (id) =>
  apiPatch(`/profiles/me/notifications/${id}/read`);