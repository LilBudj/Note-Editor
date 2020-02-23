import {mainAPI} from '../API/mainAPI'
const ADD_NOTE = 'app/ADD_NOTE';
const GET_NOTES_FROM_SERVER = 'app/GET_NOTES_FROM_SERVER';

const initState = {
    notes: []
};

export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        }
        case GET_NOTES_FROM_SERVER: {
            return {
                ...state, notes: action.notes
            }
        }
        default: return state
    }
};

const addNoteAC = (note) => ({type: ADD_NOTE, note});
const getNotesAC = (notes) => ({type: GET_NOTES_FROM_SERVER, notes});

export const addNoteThunkCreator = (note) => {
    return async (dispatch) => {
        let response = await mainAPI.addNote(note);
        if (response.status === 200){
            dispatch(addNoteAC(note))
        }
    }
};
export const getNotesThunkCreator = () => {
    return async (dispatch) => {
        debugger
        let response = await mainAPI.getNotes();
        if (response.status === 200){
            dispatch(getNotesAC(response.data.data.notes))
        }
    }
};