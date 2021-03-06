import * as types from '../constants/ActionTypes';
import { UI } from '../constants/InitialStates';

const ui = ( state=UI, action ) => {
    switch (action.type) {
        case types.TOGGLE_UNREAD_NOTES_POPOVER: {
            return {...state, isUnreadNotesPopoverOpen: !state.isUnreadNotesPopoverOpen};
        }

        default: {
            return state;
        }
    }
};

export default ui;
