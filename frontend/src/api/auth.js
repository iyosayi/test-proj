import { useContext } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

import { setAuth } from "../utils/auth";
import { UserContext } from "../context/user";

const baseAxios = axios.create({
  baseURL: "https://bold-org.herokuapp.com/api",
});

export const authLogin = () => {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const { mutateAsync, isLoading, error } = useMutation(
    async ({ email, password }) => {
      try {
        const res = await baseAxios({
          method: "POST",
          url: "/users/auth",
          data: {
            email: email,
            password: password,
          },
        });

        return res.data.data;
      } catch (error) {
        throw Error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        setUserData(data);
        setAuth(data);
        history.push("/");
      },
    }
  );
  return { login: mutateAsync, isLoading, error };
};

export const authSignup = () => {
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const { mutateAsync, isLoading, error } = useMutation(
    async ({ firstName, lastName, email, password, donor }) => {
      try {
        const res = await baseAxios({
          method: "POST",
          url: "/users",
          data: {
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
            type: donor ? "donor" : "student",
          },
        });
        return res.data.data;
      } catch (error) {
        throw Error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        setAuth(data);
        setUserData(data);
        history.push("/");
      },
    }
  );

  return { signup: mutateAsync, isLoading, error };
};
