import { LuNotepadText } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center justify-center gap-3">
         
                  <div className="p-2 md:p-3 rounded-xl bg-zinc-800 flex items-center justify-center mt-2">
           <LuNotepadText  className="h-3 w-3 text-violet-400" />
         </div>
         
                 <h1 className="text-xl md:text-2xl
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
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Synapse .
            All rights reserved.
          </p>

          {/* Credit */}
            <p className="text-sm text-slate-500">
  Crafted with ❤️ by{" "}
  <span className="text-cyan-400 font-medium">
    Lakshay
  </span>
</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;