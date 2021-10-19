import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import { authSignup } from "@api/auth";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const { signup, isLoading, error } = authSignup();

  const signupSubmit = async ({
    firstName,
    lastName,
    email,
    password,
    donor,
  }) => {
    const res = await signup({ firstName, lastName, email, password, donor });
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(signupSubmit)}>
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full mb-5">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className={`h-12 mt-2 p-2 border border-opacity-20 ${
              errors.firstName
                ? "shadow-error border-red-500"
                : "shadow-md border-black"
            }`}
            {...register("firstName", {
              required: "We'd need your first name",
            })}
          />
          <p className="text-[#cc0000]">
            {errors.firstName && errors.firstName.message}
          </p>
        </div>
        <div className="flex flex-col w-full mb-5">
          <label htmlFor="lastName">Last Name</label>
          <input
            className={`h-12 mt-2 p-2 border border-opacity-20 ${
              errors.lastName
                ? "shadow-error border-red-500"
                : "shadow-md border-black"
            }`}
            id="lastName"
            {...register("lastName", {
              required: "We'd need your last name",
            })}
          />
          <p className="text-[#cc0000]">
            {errors.lastName && errors.lastName.message}
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full mb-5">
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
          <p className="text-[#cc0000]">
            {errors.email && errors.email.message}
          </p>
        </div>
        <div className="flex flex-col w-full mb-5">
          <label htmlFor="phoneInput">Phone</label>
          <input
            className={`h-12 mt-2 p-2 border border-opacity-20 ${
              errors.phone
                ? "shadow-error border-red-500"
                : "shadow-md border-black"
            }`}
            id="phoneInput"
            type="tel"
            inputMode="tel"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          <p className="text-[#cc0000]">
            {errors.phone && errors.phone.message}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full mb-5">
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
        <div className="flex flex-col w-full mb-5">
          <label htmlFor="confirmInput">Confirm Password</label>
          <input
            id="confirmInput"
            type="password"
            className={`h-12 mt-2 p-2 border border-opacity-20 ${
              errors.confirmPass
                ? "shadow-error border-red-500"
                : "shadow-md border-black"
            }`}
            {...register("confirmPass", {
              required: "Confirmation is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <p className="text-[#cc0000]">
            {errors.confirmPass && errors.confirmPass.message}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 pl-1 mb-4">
        <div>
          <input
            id="donorCheckbox"
            type="checkbox"
            className="mr-2 cursor-pointer transform scale-125"
            {...register("donor")}
          />
          <label htmlFor="termsCheckbox">Join as Donor?</label>
        </div>
      </div>

      <div className="flex items-center gap-2 pl-1">
        <div>
          <input
            id="termsCheckbox"
            type="checkbox"
            className="mr-2 cursor-pointer transform scale-125"
            {...register("tos", {
              required: "You need to confirm you agree to the ToS.",
            })}
          />
          <label htmlFor="termsCheckbox">
            {" "}
            I agree to the{" "}
            <Link to="/signup" className="text-blue-500">
              Terms of Service
            </Link>{" "}
            and
            <Link to="/signup" className="text-blue-500">
              {" "}
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>
      <p className="text-[#cc0000]">{errors.tos && errors.tos.message}</p>

      <p className="text-[#cc0000] my-5">{error && error.toString()}</p>

      <div className="w-full">
        <button
          type="submit"
          className="w-full flex justify-center items-center bg-overlay mt-6 p-4 text-white hover:opacity-80 transition-all ease-in-out duration-300"
        >
          {isLoading ? (
            <Loader type={"TailSpin"} width={24} height={24} color="white" />
          ) : (
            "Sign Up"
          )}
        </button>
      </div>

      <p className="mt-5">
        Got an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login here
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
