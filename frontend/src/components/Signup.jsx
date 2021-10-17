import { useForm } from "react-hook-form";
import logo from "@assets/logo.png";
import person from "@assets/person.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="h-screen w-full grid grid-cols-10">
      <div className="h-full w-full col-span-2 relative">
        <div className="absolute h-full w-full z-10 bg-overlay" />
        <div className="absolute top-0 w-full text-white z-20 flex flex-col p-2 gap-5">
          <div className="flex items-center text-xl p-1">
            <img src={logo} className="h-12 w-12 mr-2" />
            <p>Scholars</p>
          </div>
          <div className="inline-block m-auto text-xl p-3">
            <h1>You're just a few clicks away from endless possibilties.</h1>
          </div>
        </div>
        <img src={person} className="absolute bottom-0" />
      </div>
      <div className="col-span-8">
        <div className="w-2/3 m-auto relative top-1/4">
          <h1 className="text-text-header text-5xl mb-20">Signup</h1>
          <section className="space-y-5 mb-10">
            <h2 className="text-text-paragraph text-3xl">
              Create an account here.
            </h2>
            <p>Let's get you all set up.</p>
          </section>

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
                    required: "Hey, we'd need is required",
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

            <div className="flex justify-between">
              <div>
                <input
                  id="rememberCheckbox"
                  type="checkbox"
                  className="mr-1 cursor-pointer"
                />
                <label htmlFor="rememberCheckbox" className="cursor-pointer">
                  Remember me
                </label>
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
              Got an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
