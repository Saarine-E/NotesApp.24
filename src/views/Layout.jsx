import { Link, Outlet } from 'react-router-dom'

function Layout(){
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <header className="text-2xl font-bold text-slate-800 mb-6 text-center">
                <Link to="/"><h1>NotesApp</h1></Link>
            </header>

            <Outlet />
        </div>
    )
}

export default Layout