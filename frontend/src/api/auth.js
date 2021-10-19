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
    ({ email, password }) => {
      return baseAxios({
        method: "POST",
        url: "/users/auth",
        data: {
          email: email,
          password: password,
        },
      });
    },
    {
      onSuccess: (data) => {
        setUserData(data.data.data);
        setAuth(data.data.data);
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
    },
    {
      onSuccess: (data) => {
        setAuth(data.data.data);
        setUserData(data.data.data);
        history.push("/");
      },
    }
  );

  return { signup: mutateAsync, isLoading, error };
};
