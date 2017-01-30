import * as types from '../constants/ActionTypes';
import { NOTES } from '../constants/InitialStates';

export default function reducer(state=NOTES, action) {

    switch (action.type) {
        case types.CREATE_NOTE: {
            return state.concat([{
                title: action.payload.title || "Random string",
                id: action.payload.id,
                unread: true,
                datetime: action.payload.datetime
            }]);
        }

        case types.DELETE_NOTES: {
            return [];
        }

        case types.MARKED_ALL_NOTES_AS_READ: {
            return state.map((note) => {
                return {...note, unread:false};
            });
        }

        case types.GET_ALL_NOTES: {
            return state.slice();
        }

        default: {
            return state;
        }
    }
}

