import { PenSquare, FolderOpen, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <PenSquare size={32}  className="text-violet-400" />,
    title: "Create Notes",
    description:
      "Capture ideas, tasks, and thoughts instantly with a clean editor.",
  },
  {
    icon: <FolderOpen size={32}  className="text-violet-400"/>,
    title: "Organize Effortlessly",
    description:
      "Pin, archive, search, and manage notes in one organized workspace.",
  },
  {
    icon: <Sparkles size={32} className="text-violet-400"/>,
    title: "AI Summarize",
    description:
      "Turn lengthy notes into concise summaries with a single click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
          <div className="w-40 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
                    
                     Workflow
                   </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3  bg-linear-to-r
                from-violet-400
                to-indigo-400
                bg-clip-text
                text-transparent">
            How Synapse Works
          </h2>

            <p
            className="
              mt-6
              text-zinc-400
              max-w-2xl
              mx-auto
              text-lg
              leading-8
            "
          >
            Capture ideas, organize information, and unlock insights
            with AI-powered tools designed for modern productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                  group
                  relative
                  overflow-hidden

                  rounded-3xl
                  p-6

                  border
                  border-white/10

                  bg-linear-to-b
                  from-zinc-900/80
                  via-zinc-900/60
                  to-zinc-950

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-violet-500/30
                  hover:shadow-[0_10px_40px_rgba(139,92,246,0.12)]
                "
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                 <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-violet-500
                    to-transparent
                  "
                />
                {step.icon}
              </div>

              <div className="absolute top-6 right-6 text-5xl font-bold text-zinc-800">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}