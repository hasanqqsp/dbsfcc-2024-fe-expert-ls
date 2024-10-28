import CONFIG from '../globals/config';
const RUNTIME_MEDIA_CACHE = 'runtime-media-cache-v1';


const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },
 
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
        .filter((name) => name !== CONFIG.CACHE_NAME)
        .map((filteredName) => caches.delete(filteredName));
  },
 
  async revalidateCache(request) {
    const response = await caches.match(request);
    
    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },
 
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },
 
  async _fetchRequest(request) {
      const networkResponse = await fetch(request);
      await this._addCache(request, networkResponse);
      return networkResponse;
  },
 
  async _addCache(request,response) {
    const cache = await this._openCache();
    cache.put(request, response);
  },
};
 
export default CacheHelper;