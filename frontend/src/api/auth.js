import axios from "axios";
import { useMutation } from "react-query";

const baseAxios = axios.create({
  baseURL: "https://bold-org.herokuapp.com",
});

export const authLogin = () => {
  const { mutateAsync, isLoading, error } = useMutation(
    ({ email, password }) => {
      return baseAxios({
        method: "POST",
        url: "/users/auth",
        data: {
          email: email,
          password: password,
        },
      });
    }
  );
  return { login: mutateAsync, isLoading, error };
};

export const authSignup = () => {
  const { mutateAsync, isLoading, error } = useMutation(
    ({ firstName, lastName, email, password, donor }) => {
      return baseAxios({
        method: "POST",
        url: "/users",
        data: {
          name: `${firstName} ${lastName}`,
          email: email,
          password: password,
          type: donor ? "donor" : "student",
        },
      });
    }
  );

  return { signup: mutateAsync, isLoading, error };
};
