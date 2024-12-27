import {create} from 'zustand'

export const courseStore = create((set) => ({
    courses: [],
    initialized: false,

    // Add course to array
    addCourse: (courseName) => set ((state) => {
        let newId = 0;
        for(let i = 0; i < state.courses.length; i++) { // Loop through courses to find the first unused ID number (left over from before I realised courses cant be deleted)
            if (state.courses[i].id > newId) {
                newId = state.courses[i].id;
            }
        }
        newId++;
        let newCourse = { "id": newId, "name": courseName }; // Create course object
        return {courses: [...state.courses, newCourse]}; // Add object to course array
    }),

    // Initialize courses array from API
    initializeCourses: async () => { 
        if(!courseStore.getState().initialized){
            try {
                const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";
                let response = await fetch(url);
                let json = await response.json();
                set({courses: json, initialized: true});
            } catch (error) {
                console.error("Failed to fetch course data: " + {error});
            }
        }
    },

    // Left over from before I realised that courses shouldn't be deleted to avoid orphan notes
    removeCourse: (id) => 
        set((state) => ({
            courses: state.courses.filter((course) => course.id !== id) // Filter out the given course from the array by ID
        })),
}))

export default courseStore