import { apiGet } from "./base";

export const getIssueTimeline = (issueId) =>
  apiGet(`/issues/${issueId}/timeline`);