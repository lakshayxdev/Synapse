
import { useState } from "react";
import { BsPinAngleFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import {RiSparkling2Line } from "react-icons/ri"
import api from "../services/api";
import ViewNoteModal from "./ViewNoteModal";
import EditNoteModal from "./EditNoteModal";
import { useNotes } from "../context/NotesContext";
import SummaryModal from "./SummaryModal";
import toast from "react-hot-toast";
import DeleteConfirmModal from "./DeleteConfirmModal";

const NoteCard = ({note}) => {

  const getRelativeTime = (date) => {
  const now = new Date();
  const created = new Date(date);

  const seconds = Math.floor(
    (now - created) / 1000
  );

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60)
    return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24)
    return `${hours} hr ago`;

  const days = Math.floor(hours / 24);

  if (days === 1)
    return "Yesterday";

  if (days < 30)
    return `${days} days ago`;

  const months = Math.floor(days / 30);

  if (months < 12)
    return `${months} mo ago`;

  const years = Math.floor(months / 12);

  return `${years} yr ago`;
};

  const [viewModal, setViewModal] = useState(false);
 const [editModal, setEditModal] = useState(false);
  const [summaryModal, setSummaryModal] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [loading, setLoading] = useState(false);

  const { setNotes} = useNotes();

  const handleFavourite = async () => {
  try {
    console.log("Favourite clicked");
    const response=await api.patch(`/notes/${note._id}/favourite`);
       if (response.data.note.isFavourite) {
  toast.success("Note Saved");
} else {
  toast.success("Note removed from saved");
}

    const updatedNote = response.data.note;

setNotes((prevNotes) =>
  prevNotes.map((n) =>
    n._id === updatedNote._id
      ? updatedNote
      : n
  )
);

  } catch (error) {
    console.log(error);
  }
};

const handlePin = async () => {
  try {
    console.log("Pinned clicked");
    const response=await api.patch(`/notes/${note._id}/pin`);
    if (response.data.note.isPinned) {
  toast.success("Note pinned");
} else {
  toast.success("Note unpinned");
}
    console.log(response.data);

    const updatedNote = response.data.note;

setNotes((prevNotes) =>
  prevNotes.map((n) =>
    n._id === updatedNote._id
      ? updatedNote
      : n
  )
);
  } catch (error) {
    console.log(error);
  }
};

const handleArchive = async () => {
  try {
    console.log("Archived clicked");
    const response=await api.patch(`/notes/${note._id}/archive`);
     if (response.data.note.isArchived) {
  toast.success("Note Archived");
} else {
  toast.success("Note unarchived");
}

    const updatedNote = response.data.note;

setNotes((prevNotes) =>
  prevNotes.map((n) =>
    n._id === updatedNote._id
      ? updatedNote
      : n
  )
);

  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async () => {
  try {
    await api.delete(`/notes/${note._id}`);

   setNotes((prevNotes) =>
  prevNotes.filter(
    (n) => n._id !== note._id
  )
);
toast.success("Note Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};



 return (
  <>
    <div
      className="
        group
        relative
        overflow-hidden

        cursor-pointer

        rounded-3xl
        p-4 sm:p-5

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
          -top-20
          left-1/2
          -translate-x-1/2
          h-40
          w-40
          rounded-full
          bg-violet-500/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-3xl font-bold text-white  line-clamp-2">
            {note.title}
          </h3>

          <p className="text-xs text-zinc-500 mt-1">
            {getRelativeTime(note.createdAt)}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePin}
            className="
              p-2
             
              rounded-xl
              hover:bg-white/5
              transition-all
            "
          >
            <BsPinAngleFill
            title="Pin"
              size={15}
              className={
                note.isPinned
                  ? "fill-violet-500 text-violet-500"
                  : "text-zinc-600"
              }
            />
          </button>

          <button
            onClick={handleFavourite}
            className="
              p-2

              rounded-xl
              hover:bg-white/5
              transition-all
            "
          >
            <BsBookmark
              size={15}
              title="Save"
              className={
                note.isFavourite
                  ? "fill-violet-500 text-violet-500"
                  : "text-zinc-600"
              }
            />
          </button>
        </div>
      </div>

      <p
        className="
          text-sm
          text-zinc-400
          leading-7
          line-clamp-4
          min-h-110px
          relative z-10
          sm:text-base
        "
      >
        {note.content}
      </p>

      {note.summary && (
        <div
          className="
            inline-flex
            items-center
            gap-2

            mt-4

            px-3
            py-1.5

            rounded-full

            border border-violet-500/20
            bg-violet-500/5

            text-violet-300
            text-xs

            relative z-10
          "
        >
          <RiSparkling2Line size={12} />
          AI Summary Available
        </div>
      )}

      <div
        className="
          flex
          items-center
          justify-end

          mt-5
          pt-4

          border-t
          border-white/5

          relative z-10
        "
      >
        <div className="flex items-center gap-1">
          <button
            className="
              p-2.5
              rounded-xl
              text-zinc-500
              hover:text-violet-400
              hover:bg-white/5
              transition-all
            "
            onClick={() => setViewModal(true)}
          >
            <FaRegEye size={16} title="View"/>
          </button>

          <button
            className="
              p-2.5
              rounded-xl
              text-zinc-500
              hover:text-violet-400
              hover:bg-white/5
              transition-all
            "
            onClick={() => setSummaryModal(true)}
          >
            <RiSparkling2Line size={16} title="AI Summaries"/>
          </button>

          <button
            className="
              p-2.5
              rounded-xl
              text-zinc-500
              hover:text-blue-400
              hover:bg-white/5
              transition-all
            "
            onClick={() => setEditModal(true)}
          >
            <FiEdit2 size={16} title="Edit"/>
          </button>

          <button
            className="
              p-2.5
              rounded-xl
              text-zinc-500
              hover:bg-white/5
              transition-all
            "
            onClick={handleArchive}
          >
            <FiArchive
              size={16}
              title="Archive"
              className={
                note.isArchived
                  ? "text-orange-400"
                  : "text-zinc-500"
              }
            />
          </button>

          <button
            className="
              p-2.5
              rounded-xl
              text-zinc-500
              hover:text-red-400
              hover:bg-white/5
              transition-all
            "
            onClick={() => setShowDeleteModal(true)}
          >
            <FaRegTrashAlt size={16} title="Delete"  />
          </button>
        </div>
      </div>
    </div>

    <ViewNoteModal
      note={note}
      isOpen={viewModal}
      onClose={() => setViewModal(false)}
    />

    <EditNoteModal
      note={note}
      isOpen={editModal}
      onClose={() => setEditModal(false)}
    />

    <SummaryModal
      note={note}
      isOpen={summaryModal}
      onClose={() => setSummaryModal(false)}
    />

    <DeleteConfirmModal
  isOpen={showDeleteModal}
  onClose={() => setShowDeleteModal(false)}
  onConfirm={handleDelete}
  loading={loading}
/>
  </>
);
};

export default NoteCard;