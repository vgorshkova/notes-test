import Chance from 'chance';
import * as types from '../constants/ActionTypes';
import * as constants from '../constants/common';


export function createNote(title, id, datetime) {
    return {
        type: types.CREATE_NOTE,
        payload: {
            title: title,
            id,
            datetime
        }
    };
}

export function deleteNotes() {
    return {
        type: types.DELETE_NOTES
    }
}

export function markedAllNotesAsRead() {
    return {
        type: types.MARKED_ALL_NOTES_AS_READ
    }
}

export function addNotes(ms = constants.ADD_ASYNC_NOTE_INTERVAL) {

    return dispatch => {
        return (
            setInterval(() => {
                const id = Date.now();
                const datetime = new Date;
                return dispatch(createNote(chance.string(), id, datetime))
            }, ms)
        )
    }
}

export function toggleUnreadNotesPopup() {
    return {
        type: types.TOGGLE_UNREAD_NOTES_POPOVER
    }
}

