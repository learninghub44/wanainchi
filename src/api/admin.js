import { apiGet, apiPatch, apiDelete } from "./base";

export const getAdminIssues = () => apiGet("/admin/issues");

export const updateIssueStatus = (id, status, note) =>
  apiPatch(`/admin/issues/${id}/status`, { status, note });

export const deleteIssue = (id) =>
  apiDelete(`/admin/issues/${id}`);

export const getAdminAnalytics = () =>
  apiGet("/admin/analytics");

export const getAdminUsers = () =>
  apiGet("/admin/users");

export const setUserRole = (id, role) =>
  apiPatch(`/admin/users/${id}/role`, { role });

export const exportCSV = () =>
  apiGet("/admin/export?format=csv");