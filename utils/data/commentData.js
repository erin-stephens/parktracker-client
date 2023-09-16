import { clientCredentials } from '../client';

const getTrailComments = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trailcomments`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleTrailComment = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trailcomments/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createTrailComment = (comment) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trailcomments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const updateTrailComment = (comment) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trailcomments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const deleteTrailComment = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trailcomments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getTrailComments,
  getSingleTrailComment,
  createTrailComment,
  updateTrailComment,
  deleteTrailComment,
};
