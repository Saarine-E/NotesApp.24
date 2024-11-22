import {create} from 'zustand'

// Does this repeat with noteStore? Absolutely. Is there a way to simplify it? Probably. Does it really matter on a project of this scale? Not really.

const courseStore = create((set) => ({
    courses: [],
    initialized: false,

    addCourse: (newCourse) =>
        set((state) => ({
            courses: [...state.courses, newCourse]
        })),
    
    initializeCourses: async () => {
        if(!courseStore.getState().initialized){
            try {

                const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";
                let response = await fetch(url);
                let json = await response.json();
                set({courses: json, initialized: true});
                console.log(json);
            } catch (error) {
                console.error("Failed to fetch course data: " + {error});
            }
        }
    },
}))

export default courseStore