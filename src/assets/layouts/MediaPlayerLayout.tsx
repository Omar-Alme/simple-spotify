import { Outlet } from 'react-router';
export default function MediaPlayerLayout() {
  return (

    <div className='flex flex-col text-slate-50'>
      <header className="bg-slate-950 text-white text-center text-3xl px-4 py-2 flex justify-between">
        <h1 className='font-bold bg-green-900 p-4 rounded'>Spotify</h1>
        <span>Right</span>
      </header>
      <div className='flex gap-2'>
        <aside className="bg-slate-900 p-4 rounded">
          Sidebar
        </aside>
        <main className='bg-slate-900 p-4 rounded flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}