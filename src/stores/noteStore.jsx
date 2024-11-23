import {create} from 'zustand'

const noteStore = create((set) => ({
    notes: [],
    initialized: false,

    addNote: (props) => {
        let newNote = {id: props.id, text: props.text, course: props.course, timestamp: props.timestamp};
        set({notes: [...state.notes, newNote]});
    },

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

    removeNote: (text) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.text !== text)
        })),
}))

export default noteStore