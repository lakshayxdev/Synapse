
import { useNotes } from "../context/NotesContext"
import { CiSearch } from "react-icons/ci";
import FilterPills from "./FilterPills";
import NotePlace from "./NotePlace";


const NotesGrid = () => {
  const { searchTerm, setSearchTerm } = useNotes();
  return (
    <section className="py-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

   <div className="w-32 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto mb-8"></div>

    <div className="text-center mb-10">
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
        Workspace
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
       Everything You
        <span className="text-violet-500"> Need</span>
      </h2>

      <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
        Search, manage, and revisit your ideas without losing track.
      </p>
    </div>

    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        <CiSearch
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-violet-600
            text-xl
          "
        />

        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e)=> {setSearchTerm(e.target.value)}}
          className="
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            bg-zinc-900/70
            border
            border-zinc-800
            text-white
            placeholder:text-zinc-500
            focus:outline-none
            focus:border-violet-500/50
            focus:ring-4
            focus:ring-violet-500/10
            transition-all
          "
        />
      </div>
    </div>

    {/* Filters */}
    <div className="flex justify-center mb-10">
      <FilterPills />
    </div>
<NotePlace />

  </div>
</section>
  )
}

export default NotesGrid