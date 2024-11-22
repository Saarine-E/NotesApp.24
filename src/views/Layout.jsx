import { Link, Outlet } from 'react-router-dom'

function Layout(){
    return (
        <div>
            <header className="mt-0 font-bold">
                <Link to="/"><h1>NotesApp</h1></Link>
            </header>

            <Outlet />
        </div>
    )
}

export default Layout