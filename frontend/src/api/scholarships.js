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

  return { scholarships: data, error, isLoading };
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

  return { applications: data, error, isLoading };
};

export const myAwarded = () => {
  const { userData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery("myScholarships", async () => {
    try {
      const res = await scAxios({
        url: `/award`,
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

export const myScholarships = () => {
  const { userData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery("myScholarships", async () => {
    try {
      const res = await scAxios({
        url: `/donors/applications`,
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

export const scholarshipApplicants = (scID) => {
  const { userData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery("scApplicants", async () => {
    try {
      const res = await scAxios({
        url: `/applicants/${scID}`,
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

export const myContributions = () => {
  const { userData } = useContext(UserContext);

  const { data, error, isLoading } = useQuery("myContributions", async () => {
    try {
      const res = await scAxios({
        url: `/donors/contributions`,
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
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    async ({ note, scID, donorId }) => {
      try {
        const res = await scAxios({
          method: "POST",
          url: "/apply",
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
          data: {
            scholarshipId: String(scID),
            note,
            donorId: String(donorId),
          },
        });
        return res;
      } catch (error) {
        throw Error(error.response.data.message);
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries("myApplications"),
    }
  );
  return { apply: mutateAsync, isLoading, error, isError, isSuccess };
};

export const scholarshipAward = () => {
  const { userData } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    async ({ scId, studentId }) => {
      try {
        const res = scAxios({
          method: "PATCH",
          url: "/award",
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
          data: {
            studentId: String(studentId),
            scholarshipId: String(scId),
          },
        });

        return res;
      } catch (error) {
        throw Error(error.response.data.message);
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries("allScholarships"),
    }
  );
  return { award: mutateAsync, isLoading, error, isError, isSuccess };
};

export const scholarshipCreate = () => {
  const { userData } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error, isError, isSuccess } = useMutation(
    ({ description, name, amount, tag }) => {
      return scAxios({
        method: "POST",
        url: "/",
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          description,
          name,
          tag,
          amount: String(amount),
        },
      });
    },
    {
      onSuccess: () =>
        queryClient.invalidateQueries("allScholarships", "myScholarships"),
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
