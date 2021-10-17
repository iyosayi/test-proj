import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit()}>
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            className="h-12 mt-2 mb-7 p-2 shadow-md border border-black border-opacity-20"
            {...register("firstName", {
              required: "Hey, we'd need your first name",
            })}
          />
          {errors.firsss && errors.firsss.message}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="h-12 mt-2 mb-7 p-2 shadow-md border border-black border-opacity-20"
            id="lastName"
            {...register("lastName", {
              required: "Hey, we'd need your last name",
            })}
          />
          {errors.password && errors.password.message}
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full">
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
        <div className="flex flex-col w-full">
          <label htmlFor="phoneInput">Phone</label>
          <input
            className="h-12 mt-2 mb-7 p-2 shadow-md border border-black border-opacity-20"
            id="phoneInput"
            type="tel"
            inputMode="tel"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          {errors.phone && errors.phone.message}
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-full">
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
        <div className="flex flex-col w-full">
          <label htmlFor="confirmInput">Confirm Password</label>
          <input
            id="confirmInput"
            type="password"
            className="h-12 mt-2 mb-7 p-2 shadow-md border border-black border-opacity-20"
            {...register("confirmPass", {
              required: "Confirmation is required",
            })}
          />
          {errors.email && errors.email.message}
        </div>
      </div>

      <div className="flex items-center gap-2 pl-1">
        <div>
          <input
            id="termsCheckbox"
            type="checkbox"
            className="mr-2 cursor-pointer transform scale-125"
          />
          <label htmlFor="termsCheckbox">
            {" "}
            I agree to the{" "}
            <Link className="text-blue-500">Terms of Service</Link> and
            <Link className="text-blue-500"> Privacy Policy</Link>
          </label>
        </div>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-overlay mt-6 p-4 text-white hover:opacity-80 transition-all ease-in-out duration-300"
        >
          Sign Up
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
