import { getAccessToken } from "@auth0/nextjs-auth0";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

async function fetchWithAuth(path, opts = {}) {
  const { accessToken } = await getAccessToken();
  return fetch(`${API_BASE}${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(opts.headers || {})
    }
  });
}

export async function listItems() {
  const res = await fetchWithAuth("/items");
  return res.json();
}

export async function addItem(data) {
  return fetchWithAuth("/items", {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export async function getRecipes() {
  const res = await fetchWithAuth("/recipes");
  return res.json();
}
