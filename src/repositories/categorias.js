import config from '../config';

// eslint-disable-next-line import/no-named-as-default-member
const URL_CATEGORIES = `${config.URL_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados!');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
