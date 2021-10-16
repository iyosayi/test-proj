import ls from "localstorage-slim";

export const setAuth = (username, token) => {
  const data = {
    user: {
      username,
      token,
    },
  };

  ls.set("tp-data", data, { encrypt: true });
};

export const getAuth = () => {
  return ls.get("tp-data", { decrypt: true });
};
