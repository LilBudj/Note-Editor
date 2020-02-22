import mainAPI from '../API/mainAPI'
const ADD_NOTE = 'app/ADD_NOTE';

const initState = {
    notes: []
};

export const appReducer = (state, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        }
        default: return state
    }
};

const addNoteAC = (note) => ({type: ADD_NOTE, note});

export const addNoteThunkCreator = (note) => {
    return async (dispatch) => {
        let response = await mainAPI.addNote(note)
        if (response.resultCode === 200){
            dispatch(addNoteAC(note))
        }
    }
};