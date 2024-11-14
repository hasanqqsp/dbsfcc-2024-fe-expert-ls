/**
 * Lihat daftar API yang tersedia:
 * https://calm-music-api.dicoding.dev/#/
 */

import CONFIG from "../globals/config";



export const ENDPOINTS = {
  list: `${CONFIG.BASE_URL}/musics`,
};

// Promise-then version
export function getAllMusics() {
  return fetch(ENDPOINTS.list)
    .then((response) => response.json())
    .then((json) => json.data.musics);
}

