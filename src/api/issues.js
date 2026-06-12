import { apiPost } from "./base";
import { sampleIssues } from "../data/sampleIssues";

// Using sample data until backend is connected
export const getIssues = async () => sampleIssues;

export const getIssueById = async (id) => {
  const issue = sampleIssues.find((i) => String(i.id) === String(id));
  if (!issue) throw new Error("Issue not found");
  return issue;
};

// IMPORTANT: multipart form-data
export const createIssue = async (formData) => {
  const res = await fetch("/api/issues", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to create issue");
  return res.json();
};

export const upvoteIssue = async (id) => {
  console.log("Upvoted issue", id);
  return { success: true };
};

export const commentIssue = (id, body) =>
  apiPost(`/issues/${id}/comment`, { body });

export const contactAuthority = (id, message) =>
  apiPost(`/issues/${id}/contact-authority`, { message });