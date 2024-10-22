const BASE_URL = 'https://github-leaderboard-api.vercel.app';

const API_ENDPOINT = {
    GET_REPOS_BY_STARS : `${BASE_URL}/repos/stars`,
    GET_USERS_BY_FOLLOWERS : `${BASE_URL}/users/followers`
}

export const GithubLeaderboardAPI = {
    getTopRepositoriesByStars : async  () => {
        const response = await fetch(API_ENDPOINT.GET_REPOS_BY_STARS);
        const responseJSON = await response.json();
        return responseJSON.data;
    },

    getTopUsersByFollowers : async  () => {
        const response = await fetch(API_ENDPOINT.GET_USERS_BY_FOLLOWERS);
        const responseJSON = await response.json();
        return responseJSON.data;
    }
}