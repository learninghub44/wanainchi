import { apiGet, apiPost } from "./base";

export const getComments = (issueId) =>
  apiGet(`/issues/${issueId}/comments`);

export const postComment = (issueId, body) =>
  apiPost(`/issues/${issueId}/comment`, { body });

// alias so CommentForm works
export const addComment = postComment;