import StatsCard from "../common/StatsCard";
import { useNotes } from "../context/NotesContext";
import { GrNotes } from "react-icons/gr";
import { BsBookmark } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import CreateNoteModal from "./CreateNoteModal";

const StatsSection = () => {
    const [createModal, setCreateModal] = useState(false);



    const { notes } = useNotes();

const totalNotes = notes.length;

const pinnedNotes = notes.filter(
  note => note.isPinned
).length;

const favouriteNotes = notes.filter(
  note => note.isFavourite
).length;

const archivedNotes = notes.filter(
  note => note.isArchived
).length;


  return (
  <section className="py-15 px-6 ">
    <div className="max-w-6xl mx-auto">

      <div className="w-32 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto mb-8"></div>

      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
          Dashboard Overview
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Your Knowledge
          <span className="text-violet-500"> Hub</span>
        </h2>

        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
         Turn scattered thoughts into organized knowledge with a workspace built for focus.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/30
          backdrop-blur-sm
          p-6
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <StatsCard
            title="Total Notes"
            value={totalNotes}
            icon={<GrNotes className="text-violet-600" size={30} />}
          />

          <StatsCard
            title="Pinned Notes"
            value={pinnedNotes}
            icon={<BsPinAngleFill className="text-violet-600" size={30} />}
          />

          <StatsCard
            title="Saved Notes"
            value={favouriteNotes}
            icon={<BsBookmark className="text-violet-600" size={30} />}
          />

          <StatsCard
            title="Archived Notes"
            value={archivedNotes}
            icon={<RiInboxArchiveLine className="text-violet-600" size={30} />}
          />

        </div>
      </div>

      <div className="flex items-center justify-center  mt-15">
      <button
      onClick={()=> {setCreateModal(true)}}
       className="flex items-center gap-2 px-10 py-4 rounded-xl bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-medium
          transition-all
          w-full sm:w-auto
          justify-center
          cursor-pointer
          duration-300
          hover:scale-[1.03]
          hover:shadow-[0_12px_30px_rgba(99,102,241,0.35)]" 
      >
         <FaPlus size={20} />
        Create Note
      </button>
      </div>
    </div>
    <CreateNoteModal 
    isOpen={createModal}
    onClose={()=> {setCreateModal(false)}}
    />
  </section>
);
}

export default StatsSection