import { useContext } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
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

export const updateProfile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutateAsync, error, isError, isSuccess, isLoading } = useMutation(
    async ({ bio }) => {
      try {
        const res = await baseAxios({
          method: "PATCH",
          url: "/users/me",
          data: {
            profile: String(bio),
          },
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        });
        return res.data.data;
      } catch (error) {
        throw Error(error.response.data.message);
      }
    }
    // {
    //   onSuccess: () => queryClient.invalidateQueries("refreshUser"),
    // }
  );

  return { update: mutateAsync, error, isError, isSuccess, isLoading };
};

export const refreshUser = () => {
  const { userData, setUserData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery(
    "refreshUser",
    async () => {
      try {
        const res = await baseAxios({
          method: "GET",
          url: "/users/me",
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        });
        return res.data.data;
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: (newData) => {
        setUserData({ user: newData, ...userData });
        setAuth(userData);
      },
    }
  );

  return { data, error, isLoading };
};
