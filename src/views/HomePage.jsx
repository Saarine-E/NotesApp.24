import { Link } from "react-router-dom"

function HomePage(){
    return (
        <div>
            <nav>
                <Link to="/create-notes"><button>Create notes for class</button></Link>
                <Link to="/list-notes"><button>List notes</button></Link>
                <Link to="/add-courses"><button>Add courses</button></Link>
            </nav>
        </div>
    )
}

export default HomePage