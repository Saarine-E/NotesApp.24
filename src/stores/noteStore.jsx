import {create} from 'zustand'
import {courseStore} from '../stores/courseStore'
import {format} from 'date-fns'

const noteStore = create((set) => ({

    notes: [],
    initialized: false,

    // Add note to array
    addNote: (text, courseName) => set ((state) => {
        let newId = 0;
        for(let i = 0; i < state.notes.length; i++) { // Loop through notes to find the highest used id number
            if (state.notes[i].id > newId) {
                newId = state.notes[i].id;
            }
        }
        newId++; // Increase id number by 1 to get the lowest available id number

        let currentTime = format(new Date(), "yyyy-MM-dd HH:mm:ss"); // Get the current datetime and change it to the correct format
        let selectedCourse = courseStore.getState().courses.find((course) => course.name == courseName); // Find course object matching the given course name
        let newNote = {id: newId, text: text, course: selectedCourse, timestamp: currentTime}; // Create new note object
        return {notes: [...state.notes, newNote]}; // Add note object to array
    }),

    // Initialize notes array from API
    initializeNotes: async () => {
        if(!noteStore.getState().initialized){
            try {
                const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";
                let response = await fetch(url);
                let json = await response.json();
                set({notes: json, initialized: true});
            } catch (error) {
                console.error("Failed to fetch note data: " + {error});
            }
        }
    },

    // Remove a note where the id's match
    removeNote: (id) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.id !== id)
        })),
}))

export default noteStore