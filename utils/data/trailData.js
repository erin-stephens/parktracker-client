import { clientCredentials } from '../client';

const getTrails = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trails`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleTrail = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trails/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createTrail = (trail) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trails`, {
    method: 'POST',
    body: JSON.stringify(trail),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const deleteTrail = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trails/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const updateTrail = (trail) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trails/${trail.id}`, {
    method: 'PUT',
    body: JSON.stringify(trail),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getTrailByPark = (parkId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trails?park=${parkId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getTrails,
  getSingleTrail,
  createTrail,
  updateTrail,
  deleteTrail,
  getTrailByPark,
};
