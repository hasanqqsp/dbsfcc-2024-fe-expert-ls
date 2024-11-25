const createLikeButtonTemplate = () => `
  <button aria-label="like this repo" id="likeButton" class="visit-github">
      Like this repo
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this repo" id="likeButton" class="visit-github">
      Unlike this repo
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };