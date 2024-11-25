const BASE_URL = 'https://api.github.com';
const CLIENT_SECRET = '';

const API_ENDPOINT = {
  GET_REPOS_BY_NAME : (repoOwner, repoName) => `${BASE_URL}/repos/${repoOwner}/${repoName}`,
  GET_REPOS_CONTRIBUTOR_BY_NAME : (repoOwner, repoName) => `${BASE_URL}/repos/${repoOwner}/${repoName}`,

};

export const GithubRestAPI = {
  getRepositoryByFullName : async  (repoOwner, repoName) => {
    const response = await fetch(API_ENDPOINT.GET_REPOS_BY_NAME(repoOwner, repoName), {
      headers: {
        Authorization: `Bearer ${CLIENT_SECRET}`,
      },
    });
    const responseJSON = await response.json();
    return responseJSON;
  },
  getContributorByFullName : async (repoOwner, repoName) => {
    const response = await fetch(`${API_ENDPOINT.GET_REPOS_BY_NAME(repoOwner, repoName)}/contributors`, {
      headers: {
        Authorization: `Bearer ${CLIENT_SECRET}`,
      },
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
};

