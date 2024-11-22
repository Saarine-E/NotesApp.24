import { Route, Routes } from 'react-router-dom'
import Layout from './views/Layout'
import HomePage from './views/HomePage'
import NoteList from './views/NoteList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="list-notes" element={<NoteList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App