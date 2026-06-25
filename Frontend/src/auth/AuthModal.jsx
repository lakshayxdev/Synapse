import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye, EyeOff
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

 

const AuthModal = ({ isOpen, onClose }) => {
     const navigate = useNavigate();
  const { login } = useAuth();

  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    

     if (!email.trim() && !password.trim()) {
    toast.error("All fields are required");
    return;
}

    if (!email.trim()) {
    toast.error("Email is required");
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address");
    return;
}

 if (!password.trim()) {
    toast.error("Password is required");
    return;
}



    try {
      setLoading(true);
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      login(response.data.user, response.data.token);

      onClose();
      toast.success("Logged in successfully");

  navigate("/workspace");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
       toast.error("Invalid Credentials");
    }
    finally {
        setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    

      if (!email.trim() && !password.trim() && !name.trim()) {
    toast.error("All fields are required");
    return;
}

 if (!name.trim()) {
    toast.error("Name is required");
    return;
}

    if (!email.trim()) {
    toast.error("Email is required");
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address");
    return;
}

 if (!password.trim()) {
    toast.error("Password is required");
    return;
}
if(password.length < 6){
    toast.error("Password must be at least 6 characters");
    return;
}

    try {
      setLoading(true);
      await api.post("/auth/signup", {
        name,
        email,
        password,
      });
      
      toast.success("Account created successfully");

      setMode("login");

      setName("");
      setPassword("");

    } catch (error) {
      console.log(error);
       toast.error("Signup Failed");
    }
    finally {
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      <div className="relative w-[90%] max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-6">

        
        <button
          onClick={onClose}
          className="
            h-8
            absolute top-4 right-4
            w-8
            rounded-xl
            border border-white/10
            bg-white/5
            text-zinc-400
            transition-all
            duration-300
            hover:bg-white/10
            hover:text-white
          "
        >
          ✕
        </button>

        <div className="text-center mb-6 mt-6">
          <h2 className="text-3xl font-bold">
            Welcome to
            <span className="className= text-3xl
  font-bold
  tracking-tight
  bg-linear-to-r
  from-indigo-400
  via-violet-400
  to-blue-400
  bg-clip-text
  text-transparent drop-shadow-[0_0_12px_rgba(139,92,246,0.15)]"> Synapse</span>
          </h2>

          <p className="text-zinc-400 mt-2">
            Organize your knowledge effortlessly.
          </p>
        </div>

        <div className="relative flex bg-zinc-900 rounded-full p-1 mb-8">

          <div
            className={`
              absolute
              top-1
              bottom-1
              cursor-pointer
              w-[calc(50%-4px)]
              rounded-full
              
          bg-linear-to-r
          from-violet-600
          to-indigo-600
          font-medium
  text-white
              transition-all
              duration-300
              ${
                mode === "signup"
                  ? "translate-x-full"
                  : ""
              }
            `}
          />

          <button
            onClick={() => setMode("login")}
            className="relative z-10 flex-1 py-2 text-sm font-medium    cursor-pointer"
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className="relative z-10 flex-1 py-2 text-sm font-medium cursor-pointer"
          >
            Signup
          </button>

        </div>

        <div className="overflow-hidden">

          <div
            className={`
              flex
              w-[200%]
              transition-transform
              duration-500
              ${
                mode === "signup"
                  ? "-translate-x-1/2"
                  : ""
              }
            `}
          >

           {/* Login form */}
            <form
              onSubmit={handleLogin}
              className="w-1/2 pr-4 flex flex-col gap-4"
            >

                <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
        
              "
            >
              Email Address
            </label>

             <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                  w-full
                 py-3
                  pl-12
                  pr-4
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  outline-none
                  focus:border-violet-700
                "
              />
              </div>

               <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
        
              "
            >
              Password
            </label>

             <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type={showPassword ? "text": "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="
                  w-full
                  py-3
                  pl-12
                  pr-4
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  outline-none
                  focus:border-violet-700
                "
              />
               <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                {showPassword ? (
                  <Eye size={18}/>
                ) :
              (
                <EyeOff size={18}/>
              )
                }
              </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                px-5 py-2.5
                 flex items-center justify-center gap-2
  rounded-xl
          bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-medium
  border
  border-white/10
  shadow-[0_4px_20px_rgba(99,102,241,0.18)]
  hover:shadow-[0_8px_30px_rgba(99,102,241,0.25)]
  transition-all
                     cursor-pointer
                      disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
                "
              >
                 {loading
              ? "Logging in..."
              : (
                <>
                Login
                <ArrowRight size={18} />
                </>
              )
              }
              </button>
            </form>

          {/* Signup Form */}
            <form
              onSubmit={handleSignup}
              className="w-1/2 pl-4 flex flex-col gap-4"
            >

                <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
        
              "
            >
              Full Name
            </label>

             <div className="relative">
              <User
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="
                  w-full
                   py-3
                  pl-12
                  pr-4
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  outline-none
                  focus:border-violet-700
                "
              />
              </div>

              <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
        
              "
            >
              Email Address
            </label>

             <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                  w-full
                 py-3
                  pl-12
                  pr-4
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  outline-none
                  focus:border-violet-700
                "
              />
              </div>

              <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
        
              "
            >
              Password
            </label>

             <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type= {showPassword ? "text" : "password" }
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="
                  w-full
                py-3
                  pl-12
                  pr-4
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-800
                  outline-none
                  focus:border-violet-700
                "
              />

              <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                {showPassword ? (
                  <Eye size={18}/>
                ) :
              (
                <EyeOff size={18}/>
              )
                }
              </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                 px-5 py-2.5
                 flex items-center justify-center gap-2
 rounded-xl
          bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-medium
  border
  border-white/10
  shadow-[0_4px_20px_rgba(99,102,241,0.18)]
  hover:shadow-[0_8px_30px_rgba(99,102,241,0.25)]
  transition-all
                     cursor-pointer
                      disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
                "
              >
               {loading? "Creating Acount..."
               : (
                <>
                Create Account
                <ArrowRight />
                </>
               )}
              </button>
            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthModal;