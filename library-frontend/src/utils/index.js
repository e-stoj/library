export const post = (url, body) => fetch(url, {
  method: 'POST',
  body: body && JSON.stringify(body),
  mode: 'cors',
  'credentials': 'include',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const toJSON = (response) => (response.json());

export const get = (url) => fetch(url, {
  method: 'GET',
  mode: 'cors',
  'credentials': 'include',
  cache: 'no-cache',
});

export const put = (url, body) => fetch(url, {
  method: 'PUT',
  body: body,
  'credentials': 'include',
  mode: 'cors',
});

export const del = (url) => fetch(url, {
  method: 'DELETE',
  'credentials': 'include',
  mode: 'cors',
});
