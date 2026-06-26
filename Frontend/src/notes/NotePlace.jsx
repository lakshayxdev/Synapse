import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import api from "../services/api";
import { useNotes } from "../context/NotesContext";
import { useAuth } from "../context/AuthContext";
import { FiSearch } from "react-icons/fi";
import { FaRegStickyNote } from "react-icons/fa";
import NoteCardSkeleton from "../skeleton/NoteCardSkeleton";

const NotePlace = () => {
  const {user}=useAuth();
  const {filter} = useNotes();
  const {notes, setNotes, searchTerm} = useNotes();
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
       console.log("Full Response:", res.data);
    console.log("Notes:", res.data.notes);
    console.log("Notes length:", res.data.notes?.length);
       console.log(res.data);
      setNotes(res.data.notes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//   if (user) {
//     fetchNotes();
//   } else {
//     setNotes([]);
//   }
// }, [user]);

useEffect(() => {
  if (!user) return;

  fetchNotes();
}, [user]);

  const filteredNotes = notes.filter((note) => {
  if (filter === "pinned") return note.isPinned;
  if (filter === "favourite") return note.isFavourite;
  if (filter === "archived") return note.isArchived;

  return true;
});

const searchedNotes = filteredNotes.filter((note) =>
  note.title
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase())
);

const sortedNotes = [...searchedNotes].sort((a, b) => {
  if (a.isPinned !== b.isPinned) {
    return b.isPinned - a.isPinned;
  }

  return 0;
});
console.log("notes:", notes.length);
console.log("filtered:", filteredNotes.length);
console.log("searched:", searchedNotes.length);
console.log("sorted:", sortedNotes.length);

   if (loading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <NoteCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (notes.length === 0) {
    return (
       <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10">
        <FaRegStickyNote className="text-4xl text-zinc-400" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-white">
        No notes yet
      </h2>

      <p className="mt-2 max-w-md text-sm text-zinc-400">
        Start capturing your ideas by creating your first note.
      </p>
      </div>
    );
  }


  return (
    <>
   {searchedNotes.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20 text-center min-h-[400px]">
    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
      <FiSearch className="text-2xl text-zinc-400" />
    </div>

   <h3 className="text-xl font-semibold text-white mb-2">
  It's Quiet here
</h3>

<p className="text-zinc-400 max-w-md">
  We couldn't find any notes to display right now.
</p>
  </div>
) : (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-5">
    {sortedNotes.map((note) => (
      <NoteCard
        key={note._id}
        note={note}
      />
    ))}
    {/* {sortedNotes.map((note) => (
  <div
    key={note._id}
    className="bg-red-500 text-white p-4 rounded-lg"
  >
    {note.title}
  </div>
))} */}
  </div>
)}

</>
  );
};

export default NotePlace;