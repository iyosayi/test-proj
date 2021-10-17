import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit()}>
      <div className="flex flex-col">
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          className="h-12 mt-2 mb-7 p-2 shadow-md border border-black border-opacity-20"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
      </div>
      <div className="flex flex-col">
        <label htmlFor="passwordInput">Password</label>
        <input
          className="h-12 mt-2 mb-7 p-2 shadow-md border border-black border-opacity-20"
          id="passwordInput"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && errors.password.message}
      </div>

      <div className="flex justify-between">
        <div>
          <input
            id="rememberCheckbox"
            type="checkbox"
            className="mr-2 cursor-pointer transform scale-125"
          />
          <label htmlFor="rememberCheckbox">Remember me</label>
        </div>

        <p className="text-blue-500">Reset password</p>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-overlay mt-6 p-4 text-white hover:opacity-80 transition-all ease-in-out duration-300"
        >
          Sign In
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
