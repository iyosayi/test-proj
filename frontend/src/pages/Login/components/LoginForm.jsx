import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import { authLogin } from "@api/auth";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { login, isLoading, error } = authLogin();

  const loginSubmit = async ({ email, password, rememberMe }) => {
    console.log(values);
    // const res = await login(values);
    // console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <div className="flex flex-col mb-7">
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          className={`h-12 mt-2 p-2 border border-opacity-20 ${
            errors.email
              ? "shadow-error border-red-500"
              : "shadow-md border-black"
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
        />
        <p className="text-[#cc0000]">{errors.email && errors.email.message}</p>
      </div>
      <div className="flex flex-col mb-7">
        <label htmlFor="passwordInput">Password</label>
        <input
          className={`h-12 mt-2 p-2 border border-opacity-20 ${
            errors.password
              ? "shadow-error border-red-500"
              : "shadow-md border-black"
          }`}
          id="passwordInput"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <p className="text-[#cc0000]">
          {errors.password && errors.password.message}
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <input
            id="rememberCheckbox"
            type="checkbox"
            className="mr-2 cursor-pointer transform scale-125"
            {...register("rememberMe")}
          />
          <label htmlFor="rememberCheckbox">Remember me</label>
        </div>
      </div>

      <p className="text-[#cc0000] my-5">{error && error.toString()}</p>

      <div className="w-full">
        <button
          type="submit"
          className="w-full flex justify-center items-center bg-overlay mt-6 p-4 text-white hover:opacity-80 transition-all ease-in-out duration-300"
        >
          {isLoading ? (
            <Loader type={"TailSpin"} width={24} height={24} color="white" />
          ) : (
            "Sign In"
          )}
        </button>
      </div>

      <p className="mt-5">
        You're not on this side already?{" "}
        <Link to="signup" className="text-blue-500">
          Join here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
