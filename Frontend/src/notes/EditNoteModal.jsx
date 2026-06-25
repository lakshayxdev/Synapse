import { useEffect, useState } from "react"
import api from "../services/api";
import { useNotes } from "../context/NotesContext";
import toast from "react-hot-toast";

const EditNoteModal = ({ note, isOpen, onClose }) => {
     const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const {setNotes}=useNotes();

   useEffect(() => {
  if (note) {
    setTitle(note.title);
    setContent(note.content);
  }
}, [note]);

  if (!isOpen || !note) return null;
  const handleUpdate = async () => {
    try {
        setLoading(true);
        const response=await api.put(`/notes/${note._id}`, {
            title,
            content,
        })
        const updatedNote = response.data.note;

setNotes((prevNotes) =>
  prevNotes.map((n) =>
    n._id === updatedNote._id
      ? updatedNote
      : n
  )
);
toast.success("Updated Successfully");
onClose();
    }
    catch(error) {
        console.log(error);
        toast.error("Update Failed");
    }
    finally {
        setLoading(false);
    }
  }
 
return (

  <div
    className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/70
      backdrop-blur-md
      p-4
    "
  >
    <div
      className="
        relative
        w-full
        max-w-3xl
        
       
        rounded-3xl
        border border-white/10
        bg-zinc-950/95
        backdrop-blur-xl
        shadow-[0_0_80px_rgba(139,92,246,0.08)]
        overflow-hidden
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


  <div className="p-8">

          <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

       <button
          onClick={onClose}
          className="
            h-10
            w-10
            rounded-xl
            border border-white/10
            bg-white/5
            text-zinc-400
            transition-all
            duration-300
            hover:bg-white/10
            hover:text-white
          "
        >
          ✕
        </button>

      </div>
    <div className="flex items-center justify-between mb-8">

      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Edit Note
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Update your note and save changes
        </p>
      </div>

    </div>

    <div className="mb-5">

      <label className="block text-sm text-zinc-400 mb-2">
        Title
      </label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter note title..."
        className="
          w-full
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          px-4
          py-3
          text-white
          outline-none
          transition-all
          focus:border-violet-500/50
          focus:ring-2
          focus:ring-violet-500/20
        "
      />

    </div>

    <div>

      <label className="block text-sm text-zinc-400 mb-2">
        Content
      </label>

      <div className="flex-1 overflow-y-auto">

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={8}
        placeholder="Start writing..."
        className="
          w-full
          resize-none
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          px-4
          py-4
          text-zinc-200
          leading-7
          outline-none
          transition-all
          focus:border-violet-500/50
          focus:ring-2
          focus:ring-violet-500/20
        "
      />
       </div>
    </div>

    <div className="flex justify-end gap-3 mt-8">

      <button
        onClick={onClose}
        className="
          px-5
          py-2.5
          rounded-xl
          border border-white/10
          bg-white/5
          text-zinc-300
          transition-all
          hover:bg-white/10
        "
      >
        Cancel
      </button>

      <button
        onClick={handleUpdate}
        disabled={loading}
        disabled={loading}
        className="
          px-6
          py-2.5
          rounded-xl
          bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-medium
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-[0_12px_30px_rgba(99,102,241,0.35)]
          disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        "
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  </div>
</div>
  </div>
);

}

export default EditNoteModal