import { useState } from "react";
import api from "../services/api";
import { useNotes } from "../context/NotesContext";
import toast from "react-hot-toast";

const CreateNoteModal = ({ isOpen, onClose }) => {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [loading, setLoading] = useState(false);

const { notes, setNotes } = useNotes();

const handleSave = async (e) => {
e.preventDefault();


try {
  setLoading(true);

  const response = await api.post("/notes", {
    title,
    content,
  });

  const newNote = response.data.note;

  setNotes((prevNotes) => [
    newNote,
    ...prevNotes,
  ]);

  setTitle("");
  setContent("");
  onClose();
  toast.success("Note Created Successfully");
  
} catch (error) {
  console.log(error);
 toast.error("Note Creation Failed");
} finally {
  setLoading(false);
}


};

if (!isOpen) return null;

return ( <div
   className="
     fixed inset-0
     z-50
     flex items-center justify-center
     bg-black/70
     backdrop-blur-md
     p-4
   "
 > <div
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


    <form onSubmit={handleSave} className="p-8">

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

      <div className="mb-6 text-sm text-zinc-500">
        New Note • Synapse Editor
      </div>

      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Untitled Note"
        autoFocus
        className="
          w-full
          bg-transparent
          text-4xl
          font-bold
          tracking-tight
          text-white
          outline-none
          placeholder:text-zinc-600
          mb-8
        "
      />

      <div className="h-px bg-white/5 mb-8" />

      <div className="flex-1 overflow-y-auto">
      <textarea
        rows={10}
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing your thoughts..."
        className="
          w-full
          bg-transparent
          text-zinc-300
          leading-8
          resize-none
          outline-none
          placeholder:text-zinc-600
          mb-8
        "
      />
      </div>

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onClose}
          className="
            px-5
            py-2.5
            rounded-xl
            bg-white/5
            border border-white/10
            text-zinc-300
            transition-all
            hover:bg-white/10
          "
        >
          Cancel
        </button>

        <button
          disabled={loading}
          type="submit"
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
          {loading ? "Saving..." : "Save Note"}
        </button>
      </div>
    </form>
  </div>
</div>


);
};

export default CreateNoteModal;
