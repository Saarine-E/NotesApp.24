import {create} from 'zustand'
import {courseStore} from '../stores/courseStore'
import {format} from 'date-fns'

const noteStore = create((set) => ({

    notes: [],
    initialized: false,

    // Add note to array
    addNote: (text, courseName) => set ((state) => {
        let newId = 0;
        for(let i = 0; i < state.notes.length; i++) { // Loop through courses to find the first unused ID number
            if (state.notes[i].id > newId) {
                newId = state.notes[i].id;
            }
        }
        newId++;

        let currentTime = format(new Date(), "yyyy-MM-dd HH:mm:ss"); // Get current time in ISO standard
        let selectedCourse = courseStore.getState().courses.find((course) => course.name == courseName); // Find course object matching the given course ID
        console.debug(courseName);
        console.debug(courseStore.getState().courses);
        let newNote = {id: newId, text: text, course: selectedCourse, timestamp: currentTime}; // Create new note object
        console.debug(newNote);
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

    // Remove note where the text matches the given string
    removeNote: (text) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.text !== text)
        })),
}))

export default noteStore