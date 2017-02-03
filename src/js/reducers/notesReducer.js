import * as types from '../constants/ActionTypes';
import { NOTES } from '../constants/InitialStates';

const note = (state = {}, action) => {
    switch (action.type) {
        case types.CREATE_NOTE: {
            return {
                title: action.payload.title || "Random string",
                id: action.payload.id,
                unread: true,
                datetime: action.payload.datetime
            };
        }

        case types.MARKED_ALL_NOTES_AS_READ: {
            if (state.unread) {
                return {...state, unread: false};
            }
            return state;
        }

        default: {
            return state;
        }
    }
};

const notes = (state = NOTES, action) => {
    switch (action.type) {
        case types.CREATE_NOTE: {
            return state.concat([ note(undefined, action)]);
        }

        case types.DELETE_NOTES: {
            return [];
        }

        case types.MARKED_ALL_NOTES_AS_READ: {
            return state.map( n =>
                note(n, action)
            );
        }

        default: {
            return state;
        }
    }
};

export default notes;

