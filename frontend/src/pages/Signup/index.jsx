import logo from "@assets/logo.png";
import person from "@assets/person.png";
import SignupForm from "./components/SignupForm";

const Signup = () => {
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
      <div className="col-span-8 flex">
        <div className="w-2/3 m-auto">
          <h1 className="text-text-header text-5xl mb-20">Signup</h1>
          <section className="space-y-5 mb-10">
            <h2 className="text-text-paragraph text-3xl">
              Create an account here.
            </h2>
            <p>Let's get you all set up.</p>
          </section>

          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
