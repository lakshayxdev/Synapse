import { useNotes } from "../context/NotesContext";

const FilterPills = () => {
  const { filter, setFilter } = useNotes();

  const filters = [
    { key: "all", label: "All" },
    { key: "pinned", label: "Pinned" },
    { key: "favourite", label: "Saved" },
    { key: "archived", label: "Archived" },
  ];

  return (
    <div className="flex justify-center">
      <div
        className="
          relative

          flex
          items-center

          p-1.5

          rounded-2xl

          border
          border-white/10

          bg-zinc-900/70

          backdrop-blur-xl

          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        "
      >
        {filters.map((item) => {
          const active = filter === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`
                relative

                px-5
                py-2.5

                rounded-xl

                text-sm
                font-medium

                transition-all
                duration-300

                ${
                  active
                    ? `
                      text-white

                      bg-linear-to-r
                      from-violet-600
                      to-indigo-600

                      shadow-[0_8px_20px_rgba(99,102,241,0.35)]
                    `
                    : `
                      text-zinc-400
                      hover:text-white
                      hover:bg-white/5
                    `
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterPills;