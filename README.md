# NotesApp.24
React app for taking course notes. University assignment.

## Installation & Usage

### Installation

- Clone the repo to your machine
- Open a terminal window in the repo folder and run `npm install`
- Launch by running `npm run dev` and opening the web address listed in the terminal window
- If you encounter issues, make sure you have at least NodeJS v21.7.3

### Usage

The app fetches some premade filler courses and notes from a Netlify API. Notes and courses will only be saved until the browser tab is closed or refreshed.

- To take notes, click "Create notes for class" on the main page.
  1. Choose a course to add notes for, from the dropdown menu.
     - After you begin saving notes, the course will be locked for the session. You can start a new session by backing out to the main menu and returning.
     - If there are no courses saved in the app, notes can't be added.
  2. Type your individual notes into the text field.
  3. Press "Add" to save the note.
  4. Saved notes will be listed below the text field until the end of the session.

- To list previously saved notes, click "List notes" on the main page.
  1. Filter notes by selecting a course on the dropdown menu.
  2. Delete notes by clicking on the X on each note.

- To add new courses, click "Add courses" on the main page
  1. Type the course name into the text field and press "Add" to save it.
  2. Courses cannot be deleted to avoid notes no longer having courses attached to them.


## AI Use
The following is a disclosure of all AI usage in this assignment. The LLM used was ChatGPT.

- 22.11. Asked to explain what each part of the `useEffect` hook does. Used the info to implement the hook into components. No copied code.
- 23.11. Asked for Tailwind style suggestions to the `HomePage` view. Copied and adjusted several styles.
- 23.11. Asked for help setting up a callback function between the `NoteList` view and the `CourseDropdown` component. The AI barely understood what I was asking for. Copied like 5 lines of code, but had to edit them to get it working.
- 24.11. Asked for help with the `addCourse` function in `courseStore`, about how to access a state inside the function. Didn't copy any code but used it as an example.
- 27.12. Asked for help on accessing a Zustand store from another Zustand store. Realised I was just missing an `export` keyword.
- 28.12. Asked for help with hunting down a couple bugs, such as why the `NoteCardText` component wasn't wrapping text.