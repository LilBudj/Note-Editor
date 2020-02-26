import {mainAPI} from '../API/mainAPI'
const ADD_NOTE = 'app/ADD_NOTE';
const GET_NOTES_FROM_SERVER = 'app/GET_NOTES_FROM_SERVER';
const UPDATE_NOTE = 'app/UPDATE_NOTE';
const DELETE_NOTE = 'app/DELETE_NOTE';
const DELETE_TAG = 'app/DELETE_TAG';
const SORT_BY_TAG = 'app/SORT_BY_TAG';

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
        case UPDATE_NOTE: {
            return {
                ...state,
                notes: state.notes.map(n => {
                    if (n.id === action.id){
                        n.text = action.text;
                        n.tags = action.tags
                    }
                    return n
                })
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(n =>
                n.id !== action.id)
            }
        }
        case DELETE_TAG: {
            return {
                ...state,
                notes: state.notes.map(n => {
                    if (n.id === action.id){
                        n.tags = n.tags.filter(t => t !== action.tag)
                    }
                    return n
                })
            }
        }
        case SORT_BY_TAG: {
            return {
                ...state,
                notes: state.notes.filter(n => n.tags.includes(action.tag))
            }
        }
        default: return state
    }
};

const addNoteAC = (note) => ({type: ADD_NOTE, note});
const getNotesAC = (notes) => ({type: GET_NOTES_FROM_SERVER, notes});
export const updateNoteAC = (text, id, tags) => ({type: UPDATE_NOTE, text, id, tags});
export const deleteNoteAC = (id) => ({type: DELETE_NOTE, id});
export const deleteTagAC = (id, tag) => ({type: DELETE_TAG, id, tag});
export const sortByTagsAC = (tag) => ({type: SORT_BY_TAG, tag});

export const addNoteThunkCreator = (note) => {
    return async (dispatch) => {
        let response = await mainAPI.addNote(note);
        if (response.status === 200){
            dispatch(addNoteAC(response.data.data))
        }
    }
};
export const getNotesThunkCreator = () => {
    return async (dispatch) => {
        let response = await mainAPI.getNotes();
        if (response.status === 200){
            dispatch(getNotesAC(response.data.data.notes))
        }
    }
};
export const updateNoteThunkCreator = (text, id, tags) => {
    return async (dispatch) => {
        let response = await mainAPI.updateNote(text, id, tags);
        if (response.status === 200){
            dispatch(updateNoteAC(text, id, tags))
        }
    }
};
export const deleteNoteThunkCreator = (id) => {
    return async (dispatch) => {
        let response = await mainAPI.deleteNote(id);
        if (response.status === 200){
            dispatch(deleteNoteAC(id))
        }
    }
};
export const deleteTagThunkCreator = (id, tag) => {
    return async (dispatch) => {
        let response = await mainAPI.deleteTag(id, tag);
        if (response.status === 200){
            dispatch(deleteTagAC(id, tag))
        }
    }
};