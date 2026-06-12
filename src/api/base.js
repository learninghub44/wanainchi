// src/api/base.js

const BASE_URL = "/api";

/**
 * GET request
 */
export async function apiGet(url) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) throw new Error("GET request failed");
  return res.json();
}

/**
 * POST request (JSON)
 */
export async function apiPost(url, data = {}) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("POST request failed");
  return res.json();
}

/**
 * PATCH request
 */
export async function apiPatch(url, data = {}) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("PATCH request failed");
  return res.json();
}

/**
 * DELETE request
 */
export async function apiDelete(url) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("DELETE request failed");
  return res.json();
}