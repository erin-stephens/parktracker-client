import { clientCredentials } from '../client';

const getSites = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sites`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleSite = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sites/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createSite = (site) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sites`, {
    method: 'POST',
    body: JSON.stringify(site),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const deleteSite = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sites/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const updateSite = (site) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sites/${site.id}`, {
    method: 'PUT',
    body: JSON.stringify(site),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getSiteByPark = (parkId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sites?park=${parkId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getSites,
  getSingleSite,
  createSite,
  deleteSite,
  updateSite,
  getSiteByPark,
};
