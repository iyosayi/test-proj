import { useEffect, useRef } from "react";
import logo from "@assets/logo.png";
import person from "@assets/person.png";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const loginRef = useRef(null);

  useEffect(() => {
    setTimeout(
      () =>
        loginRef.current.scrollIntoView({
          behavior: "smooth",
        }),
      1000
    );
  }, []);

  return (
    <div className="h-screen w-full md:grid md:grid-cols-10">
      <div className="h-full w-full col-span-2 relative">
        <div className="absolute h-full w-full z-10 bg-overlay" />
        <div className="absolute top-0 w-full text-white z-20 flex flex-col p-2 gap-5">
          <div className="flex items-center text-xl p-1">
            <img src={logo} className="h-12 w-12 mr-2" />
            <p>Scholars</p>
          </div>
          <div className="inline-block md:m-auto text-xl p-3">
            <h1>You're just a few clicks away from endless possibilties.</h1>
          </div>
        </div>
        <img src={person} className="absolute bottom-0" />
      </div>
      <div className="col-span-8 flex">
        <div className="w-2/3 m-auto py-16" ref={loginRef}>
          <h1 className="text-text-header text-5xl mb-20">Login</h1>
          <section className="space-y-5 mb-10">
            <h2 className="text-text-paragraph text-3xl">
              Login to your account
            </h2>
            <p>Welcome back! Let's get you right back in.</p>
          </section>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
