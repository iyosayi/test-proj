import axios from "axios";
import { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { UserContext } from "../context/user";
import { ModalContext } from "../components/Modals/ModalContext";

const scAxios = axios.create({
  baseURL: "https://bold-org.herokuapp.com/api/scholarships",
});

export const allScholarships = () => {
  const { userData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery("allScholarships", async () => {
    try {
      const res = await scAxios({
        url: "/",
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      return res.data.data;
    } catch (error) {
      throw error;
    }
  });

  return { data, error, isLoading };
};

export const myApplications = () => {
  const { userData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery("myApplications", async () => {
    try {
      const res = await scAxios({
        url: `/applications/${userData.id}`,
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      return res.data.data;
    } catch (error) {
      throw error;
    }
  });

  return { data, error, isLoading };
};

export const scholarshipApply = () => {
  const { userData } = useContext(UserContext);
  const { invalidateQueries } = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    ({ note, scID }) => {
      try {
        const res = scAxios({
          method: "POST",
          url: "/apply",
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
          data: {
            scholarshipId: String(scID),
            note,
          },
        });
      } catch (error) {
        console.log("message", error);
        throw error;
      }
    }
    // {
    //   onSuccess: () => invalidateQueries("allScholarships"),
    // }
  );
  return { apply: mutateAsync, isLoading, error, isError, isSuccess };
};

export const scholarshipAward = () => {
  const { userData } = useContext(UserContext);
  const { invalidateQueries } = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    ({ scID }) => {
      return scAxios({
        method: "PATCH",
        url: "/award",
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          studentId: userData.id,
          scholarshipId: scID,
        },
      });
    },
    {
      onSuccess: () => invalidateQueries("allScholarships"),
    }
  );
  return { award: mutateAsync, isLoading, error, isError, isSuccess };
};

export const scholarshipCreate = () => {
  const { userData } = useContext(UserContext);
  const { invalidateQueries } = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    ({ description, name, amount }) => {
      return scAxios({
        method: "POST",
        url: "/",
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          donor: userData.id,
          description,
          name,
          amount,
        },
      });
    },
    {
      onSuccess: () => invalidateQueries("allScholarships"),
    }
  );
  return { create: mutateAsync, isLoading, error, isError, isSuccess };
};

export const scholarshipContribute = () => {
  const { userData } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    ({ scID, amount }) => {
      return scAxios({
        method: "PATCH",
        url: "/contribute",
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          scholarshipId: String(scID),
          amount: String(amount),
        },
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries("allScholarships"),
    }
  );
  return { contribute: mutateAsync, isLoading, error, isError, isSuccess };
};
