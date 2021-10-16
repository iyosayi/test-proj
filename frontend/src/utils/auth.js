import ls from "localstorage-slim";

export const setAuth = (username, token, type) => {
  const user = {
    username,
    token,
    type,
  };

  ls.set("tp-user", user, { encrypt: true });
};

export const getAuth = () => {
  return ls.get("tp-user", { decrypt: true });
};
