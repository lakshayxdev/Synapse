import { useAuth } from "../context/AuthContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { RiSparkling2Line } from "react-icons/ri";
import { useState } from "react";
import statsImg from "../assets/Stats.png";
import aiModalImg from "../assets/AI-Modal.png";
import editModalImg from "../assets/Edit-Modal.png";
import viewModalImg from "../assets/View-Modal.png";
import AuthModal from "../auth/AuthModal";

import { useNavigate } from "react-router-dom";

export default function HeroSection() {

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();

    const {user}=useAuth();

  const handleclick = () => {
    if(!user) {
setAuthModalOpen(true);
        return;
    }
    navigate("/workspace");
  }

  return (
    <section className="min-h-[90vh] flex items-center px-8 md:px-6 py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
           <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        border
                        border-violet-500/20
                        bg-violet-500/5
                        text-violet-300
                        text-sm
                        mb-6
                      "
                    >
                      <RiSparkling2Line size={14} />
                      AI-Powered Note Taking
                    </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight  bg-linear-to-r
                from-violet-400
                to-indigo-400
                bg-clip-text
                text-transparent">
              Capture Ideas.
              <span className="block text-zinc-400">
                Organize Notes.
              </span>
              <span className="block">
                Think Better.
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
              Capture ideas, manage notes, and generate AI-powered summaries
              from a clean workspace designed for productivity.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleclick}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-medium
          transition-all
          w-full sm:w-auto
          justify-center
          duration-300
          hover:scale-[1.03]
          hover:shadow-[0_12px_30px_rgba(99,102,241,0.35)]"
              >
                Get Started
                <FaArrowRightLong size={18} />
              </button>

              <a
                href="https://github.com/lakshayxdev/Synapse"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-xl border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <IoLogoGithub size={20} />
                View Source
              </a>
            </div>

            {/* Mini Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold">AI</h3>
                <p className="text-zinc-500 text-sm">
                  Smart Summaries
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Fast</h3>
                <p className="text-zinc-500 text-sm">
                  Note Management
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Secure</h3>
                <p className="text-zinc-500 text-sm">
                  Authentication
                </p>
              </div>
            </div>
          </div>

          <div className="relative">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-3 shadow-2xl rotate-2">

              <div className="flex gap-2 px-3 py-2 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="relative h-[300px] md:h-[500px]">

                <img
                  src={statsImg}
                  alt="Dashboard"
                  className="absolute top-0 right-0 w-[75%] md:w-[80%] rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-500"
                  style={{
                    animation: "float 10s ease-in-out infinite",
                  }}
                />

                <img
                  src={editModalImg}
                  alt="Edit Modal"
                  className="absolute left-0 top-20 w-[40%] md:w-[45%] rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500"
                  style={{
                    animation: "float 8s ease-in-out infinite",
                  }}
                />

                <img
                  src={aiModalImg}
                  alt="AI Summary"
                  className="absolute right-0 bottom-10 w-[35%] md:w-[40%] rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500"
                  style={{
                    animation: "float 12s ease-in-out infinite",
                  }}
                />

                <img
                  src={viewModalImg}
                  alt="View Note"
                  className="absolute left-10 bottom-0 w-[45%] md:w-[50%] rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500"
                  style={{
                    animation: "float 9s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            <div
              className="hidden md:block absolute top-20 -left-12 z-20 backdrop-blur-xl bg-zinc-900/70 border border-zinc-700 rounded-2xl px-5 py-4 shadow-2xl"
              style={{
                animation: "float 7s ease-in-out infinite",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  ✨
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    AI Summary
                  </h4>

                  <p className="text-sm text-zinc-400">
                    Summarize instantly
                  </p>
                </div>
              </div>
            </div>

            <div
              className="hidden md:block absolute bottom-20 -right-12 z-20 backdrop-blur-xl bg-zinc-900/70 border border-zinc-700 rounded-2xl px-5 py-4 shadow-2xl"
              style={{
                animation: "float 11s ease-in-out infinite",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  📂
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Smart Organization
                  </h4>

                  <p className="text-sm text-zinc-400">
                    Pin & archive notes
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-10 right-10 w-96 h-96 bg-zinc-500/10 blur-[120px] rounded-full"></div>

          </div>
        </div>
      </div>



      <AuthModal
  isOpen={authModalOpen}
  onClose={() => setAuthModalOpen(false)}
/>
      
    </section>
  );
}

