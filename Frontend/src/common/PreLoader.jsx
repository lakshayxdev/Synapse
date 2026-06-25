import { useEffect, useMemo, useState } from "react";
import { LuNotepadText } from "react-icons/lu";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);


useEffect(() => {

  const interval = setInterval(() => {

    setProgress(prev => {

      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }

      return prev + 2;

    });

  }, 22);

  return () => clearInterval(interval);

}, []);

  const message = useMemo(() => {
    if (progress < 50) return "⚡ Initializing...";
    if (progress < 100) return "✨ Almost ready...";
    return "🚀 Welcome to Synapse Notes";
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-[#111111] flex flex-col items-center justify-center z-50">

     <div className="flex items-center justify-center gap-3 mb-8">
    
             <div className="p-2 md:p-3 rounded-xl bg-zinc-800 flex items-center justify-center mt-2">
      <LuNotepadText className="h-5 w-5 text-violet-400" />
    </div>
    
            <h1 className="text-4xl md:text-5xl
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

      <div className="w-72 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-700 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-slate-400 mt-4 font-medium">
        {progress}%
      </p>

      <p
        key={message}
        className="mt-3 text-slate-300 text-sm tracking-wide transition-all duration-300"
      >
        {message}
      </p>

    </div>
  );
};

export default PreLoader;