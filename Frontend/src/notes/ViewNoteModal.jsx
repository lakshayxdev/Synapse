const ViewNoteModal = ({ note, isOpen, onClose }) => {
if (!isOpen || !note) return null;

return ( <div
   className="
     fixed inset-0 z-50
     flex items-center justify-center
     bg-black/70
     backdrop-blur-md
     p-4
   "
 > <div
     className="
       relative
       w-full
       mt-10 mb-10
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-white
            "
          >
            {note.title}
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Synapse Note • Read Mode
          </p>
        </div>
      </div>

      <div className="my-6 h-px bg-white/5" />

      <div
        className="
          max-h-[65vh]
          overflow-y-auto
          pr-2
        "
      >
        <p
          className="
            whitespace-pre-wrap
            wrap-break-words
            text-zinc-300
            leading-8
            text-[16px]
          "
        >
          {note.content}
        </p>
      </div>
    </div>
  </div>
</div>


);
};

export default ViewNoteModal;
