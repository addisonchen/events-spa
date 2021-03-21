// heavily based on nat's scratch repo

import store from './store';

async function api_get(path) {
  let resp = await fetch(
    "http://localhost:4000/api/v1" + path, {});
  let respJson = await resp.json();
  return respJson.data;
}

async function api_post(path, data) {
  let opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };
  let resp = await fetch(
    "http://localhost:4000/api/v1" + path, opts);
  return await resp.json();
}

export function fetch_users() {
  api_get("/users").then((data) => {
    let action = {
      type: 'users/set',
      data: data,
    }
    store.dispatch(action);
  });
}

export function fetch_meetings() {
  api_get("/meetings").then((data) => {
    let action = {
      type: 'meetings/set',
      data: data,
    }
    store.dispatch(action);
  });
}

export function api_login(name, password) {
  api_post("/session", {name, password}).then((data) => {
    console.log("login resp", data);
    if (data.session) {
      let action = {
        type: 'session/set',
        data: data.session,
      }
      store.dispatch(action);
    }
    else if (data.error) {
      let action = {
        type: 'error/set',
        data: data.error,
      };
      store.dispatch(action);
    }
  });
}

export function create_user(user) {
  return api_post("/users", {user});
}

export function create_meeting(meeting) {
  return api_post("/meetings", {meeting})
}

export function load_defaults() {
  fetch_meetings();
  fetch_users();
}