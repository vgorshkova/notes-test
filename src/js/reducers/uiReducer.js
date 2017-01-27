const initialState = {
    unreadNotesPopoverOpen: false,
    localStatus: {
        lastUpdate: Date.now(),
        isSomeNotes: true,
        isSomeNewNotes: true
    }
};
export default function reducer(state=initialState, action) {

    switch (action.type) {
        case 'TOGGLE_UNREAD_NOTES_POPOVER': {
            return {...state, isUnreadNotesPopoverOpen: !state.isUnreadNotesPopoverOpen};
        }

        /*case 'UPDATE_LOCAL_STATUS': {
            return {...state, lastUpdate: Date.now(), isSomeNotes: action.isSomeNotes, isSomeNewNotes: action.isSomeNewNotes};
        }*/

        default: {
            return state;
        }
    }
}
