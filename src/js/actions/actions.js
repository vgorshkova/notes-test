const ADD_NEW_NOTE_INTERVAL = 20000;

export function createNote(title, id, datetime) {
    return {
        type: 'CREATE_NOTE',
        payload: {
            title: title,
            id,
            datetime
        }
    };
}

export function deleteNotes() {
    return {
        type: 'DELETE_NOTES'
    }
}

export function markedAllNotesAsRead() {
    return {
        type: 'MARKED_ALL_NOTES_AS_READ'
    }
}

export function addNotes(ms = ADD_NEW_NOTE_INTERVAL, fn, id, datetime) {

    return dispatch => {
        return (
            setInterval(() => {
                return dispatch(createNote(fn()), id, datetime)
            }, ms)
        )
    }
}

export function toggleUnreadNotesPopup() {
    return {
        type: 'TOGGLE_UNREAD_NOTES_POPOVER'
    }
}

