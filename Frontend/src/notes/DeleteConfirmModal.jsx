import { FaTrashAlt } from "react-icons/fa";

const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[90%] max-w-sm rounded-2xl bg-zinc-900 border border-zinc-700 p-6 shadow-xl">

        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
            <FaTrashAlt className="text-2xl text-red-500" />
          </div>
        </div>

        <h2 className="mt-4 text-center text-xl font-semibold text-white">
          Delete Note
        </h2>

        <p className="mt-2 text-center text-sm text-zinc-400">
          Are you sure you want to delete this note? This action cannot be
          undone.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-lg bg-zinc-800 py-2 text-white transition hover:bg-zinc-700 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-lg bg-red-600 py-2 text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteConfirmModal;