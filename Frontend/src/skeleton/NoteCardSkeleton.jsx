const NoteCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 animate-pulse">
      <div className="h-6 w-3/4 bg-zinc-800 rounded mb-4"></div>

      <div className="space-y-2 mb-6">
        <div className="h-4 bg-zinc-800 rounded"></div>
        <div className="h-4 bg-zinc-800 rounded"></div>
        <div className="h-4 w-2/3 bg-zinc-800 rounded"></div>
      </div>

      <div className="flex justify-between">
        <div className="h-4 w-16 bg-zinc-800 rounded"></div>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-zinc-800 rounded-full"></div>
          <div className="h-8 w-8 bg-zinc-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default NoteCardSkeleton;