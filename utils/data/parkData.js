import { clientCredentials } from '../client';

const getParks = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSinglePark = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createPark = (park) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks`, {
    method: 'POST',
    body: JSON.stringify(park),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const deletePark = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const updatePark = (park) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks/${park.id}`, {
    method: 'PUT',
    body: JSON.stringify(park),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getFavoriteParks = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks/${id}/get_favorites`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const addFavoritePark = (parkId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks/${parkId}/favorite`, {
    method: 'POST',
    body: JSON.stringify(uid),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeFavoritePark = (parkId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/parks/${parkId}/unfavorite`, {
    method: 'DELETE',
    body: JSON.stringify(uid),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getParks,
  getSinglePark,
  createPark,
  updatePark,
  deletePark,
  getFavoriteParks,
  addFavoritePark,
  removeFavoritePark,
};
