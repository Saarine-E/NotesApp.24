import { Route, Routes } from 'react-router-dom'
import Layout from './views/Layout'
import HomePage from './views/HomePage'
import NoteList from './views/NoteList'
import CourseList from './views/CourseList'
import AddNotes from './views/AddNotes'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="create-notes" element={<AddNotes />} />
          <Route path="list-notes" element={<NoteList />} />
          <Route path="add-courses" element={<CourseList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App