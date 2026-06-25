import {
  Search,
  Archive,
  Shield,
  FileText,
} from "lucide-react";
import { RiSparkling2Line } from "react-icons/ri";
import { BsPinAngleFill } from "react-icons/bs";

const features = [
  {
    icon: RiSparkling2Line,
    title: "AI Summaries",
    description:
      "Transform lengthy notes into concise, actionable insights instantly.",
  },
  {
    icon: Search,
    title: "Instant Search",
    description:
      "Find any note in seconds with fast and intuitive search.",
  },
  {
    icon: BsPinAngleFill,
    title: "Pin Important Notes",
    description:
      "Keep critical information at the top for quick access.",
  },
  {
    icon: Archive,
    title: "Smart Organization",
    description:
      "Archive notes without losing them and keep your workspace clean.",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description:
      "Your notes stay protected and accessible only to you.",
  },
  {
    icon: FileText,
    title: "Rich Note Management",
    description:
      "Create, edit, organize, and manage notes effortlessly.",
  },
];

const Features = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
     
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/10
          blur-[140px]
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="w-40 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10" />

        <div className="text-center mb-20">
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
            Synapse Features
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Everything You Need to
            <span
              className="
                bg-linear-to-r
                from-violet-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              {" "}Turn Notes Into Knowledge
            </span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
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

                <div
                  className="
                    absolute
                    -top-16
                    left-1/2
                    -translate-x-1/2

                    h-32
                    w-32

                    rounded-full

                    bg-violet-500/10

                    blur-3xl

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                />

                <div
                  className="
                    relative z-10

                    h-12
                    w-12

                    rounded-2xl

                    border
                    border-violet-500/20

                    bg-violet-500/10

                    flex
                    items-center
                    justify-center

                    mb-5
                  "
                >
                  <Icon
                    size={22}
                    className="text-violet-400"
                  />
                </div>

                <h3
                  className="
                    relative z-10

                    text-xl
                    font-semibold

                    text-white

                    mb-3
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    relative z-10

                    text-zinc-400

                    leading-7
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;