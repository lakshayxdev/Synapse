import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Number = ({ value }) => {
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.7,
      onUpdate(latest) {
        ref.current.textContent = Math.floor(latest);
      },
    });

    return () => controls.stop();
  }, [value]);

  return <span ref={ref}>0</span>;
};


const StatsCard = ({icon, title, value}) => {
  return (
    <div >
        <div className="bg-zinc-900 border-2 flex flex-col h-full border-zinc-800 rounded-2xl p-6 min-h-[200px] shadow-sm hover:border-violet-500/40 hover:translate-y-1 transition-all duration-300">
        <div>{icon}</div>
        <div className="mt-2">
            <p className="text-zinc-400 mt-5 text-2xl font-bold">{title}</p>
        </div>
        <div className="mt-2">
           <h2 className="text-5xl font-bold">
  <Number value={value} />
</h2>
        </div>
        </div>
    </div>
  );
}

export default StatsCard