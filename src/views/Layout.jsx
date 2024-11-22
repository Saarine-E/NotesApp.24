import { Link, Outlet } from 'react-router-dom'

function Layout(){
    return (
        <div>
            <header>
                <Link to="/"><h1>NotesApp</h1></Link>
            </header>

            <Outlet />
        </div>
    )
}

export default Layout