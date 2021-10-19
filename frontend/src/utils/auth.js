import ls from "localstorage-slim";

export const setAuth = (user) => {
  ls.set("tp-user", user, { encrypt: true });
};

export const getAuth = () => {
  return ls.get("tp-user", { decrypt: true });
};
