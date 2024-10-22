/**
 * Lihat daftar API yang tersedia:
 * https://calm-music-api.dicoding.dev/#/
 */

const BASE_URL = "https://calm-music-api.dicoding.dev";

export const ENDPOINTS = {
  list: `${BASE_URL}/musics`,
};

// Promise-then version
export function getAllMusics() {
  return fetch(ENDPOINTS.list)
    .then((response) => response.json())
    .then((json) => json.data.musics);
}
