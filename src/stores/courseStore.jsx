import {create} from 'zustand'

const courseStore = create((set) => ({
    courses: [],
    initialized: false,

    addCourse: (courseName) => set ((state) => {
        let newId = 0;
        for(let i = 0; i < state.courses.length; i++) {
            if (state.courses[i].id > newId) {
                newId = state.courses[i].id;
            }
        }
        newId++;
        let newCourse = { "id": newId, "name": courseName };
        return {courses: [...state.courses, newCourse]};
    }),
    
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

    removeCourse: (id) =>
        set((state) => ({
            courses: state.courses.filter((course) => course.id !== id)
        })),
}))

export default courseStore