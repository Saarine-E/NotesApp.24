import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard'
import NoteList from './views/NoteList'
import courseStore from './stores/courseStore'

function App() {
  const [count, setCount] = useState(0)

  const initializeCourses = courseStore((state) => state.initializeCourses);

  return (
    <>
      <NoteCard timestamp="123" course="testi" text="aaaaaa" />
      <NoteList />
    </>
  )
}

export default App
