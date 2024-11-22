import {create} from 'zustand'

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