import { useState} from "react";
import AccountButton from "../common/AccountButton";
import { LuNotepadText } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const {user, logout}=useAuth();

  const [authModal, setAuthModal] = useState(false);

  return (
    <>
    <nav className={`
   sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl py-2 `}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center justify-center gap-3">

         <div className="p-2 md:p-3 rounded-xl bg-zinc-800 flex items-center justify-center mt-2">
  <LuNotepadText className="h-5 w-5 text-violet-400" />
</div>

        <h1 className="text-2xl md:text-3xl
  font-bold
  tracking-tight
  bg-linear-to-r
  from-indigo-400
  via-violet-400
  to-blue-400
  bg-clip-text
  text-transparent drop-shadow-[0_0_12px_rgba(139,92,246,0.15)]
  ">
          Synapse
        </h1>
        </div>

       {user ? (
  <div className="flex items-center gap-3">
   <div className="w-10 h-10 rounded-full bg-violet-500 text-white font-bold flex items-center justify-center">
  {user.name?.charAt(0).toUpperCase()}
</div>

<button
  onClick={logout}
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all"
>
  <FiLogOut />
  Logout
</button>
  </div>
) : (
    <AccountButton 
       setLoginModal={setAuthModal}
       />
)}
      </div>
    </nav>
     <AuthModal
  isOpen={authModal}
  onClose={() => setAuthModal(false)}
/>
</>
  );
};

export default Navbar;


