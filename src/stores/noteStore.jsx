import {create} from 'zustand'

const noteStore = create((set) => ({
    notes: [],
    initialized: false,
    addNote: (newNote) =>
        set((state) => ({
            notes: [...state.notes, newNote]
        })),
    initializeNotes: async () => {
        if(!noteStore.getState().initialized){
            const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";
            let response = await fetch(url);
            let json = await response.json();
            set({notes: json, initialized: true});
            console.log(json)
        }
    },
    removeNote: (text) =>
        set((state) => ({
            notes: state.notes.filter((note) => note.text !== text)
        })),
}))

export default noteStore