export function Sidebar() {
  return (
    <div className='flex h-screen flex-col'>
      <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-5">
        <div className="flex items-baseline">
          <span className="font-semibold text-zinc-100">Webhook</span>
          <span className="text-zinc-400 font-normal">.Inspector</span>
        </div>
      </div>
    </div>
  )
}