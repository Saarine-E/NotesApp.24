import {create} from 'zustand'

const courseStore = create((set) => ({
    courses: [],
    initialized: false,

    addCourse: (courseName) => set ((state) => {
        let idList = new Set(state.courses.map((course) => course.id)); // Create new set with all course ID's
        let newId = 0;
        while (idList.has(newId)) { newId++ } // Start from 0 and go one by one until an ID number is found that's not included, to account for deleted ID's
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