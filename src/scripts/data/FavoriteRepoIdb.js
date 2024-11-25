import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRepoIdb = {
  async getRepo(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRepos() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRepo(repo) {
    return (await dbPromise).put(OBJECT_STORE_NAME, repo);
  },
  async deleteRepo(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRepoIdb;