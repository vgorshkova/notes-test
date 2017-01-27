import * as actions from '../src/js/actions/actions';
import * as types from '../src/js/constants/ActionTypes'

describe('actions', () => {
    it('should create a note', () => {
        const title     = 'Testing new note addition';
        const id        = 123;
        const datetime  = 567897;

        const expectedAction = {
            type: types.CREATE_NOTE,
            payload: {
                title,
                id,
                datetime
            }
        };
        expect(actions.createNote(title, id, datetime)).toEqual(expectedAction);
    })
});


describe('actions', () => {
    it('should delete all notes', () => {
        const expectedAction = {
            type: types.DELETE_NOTES,
        };
        expect(actions.deleteNotes()).toEqual(expectedAction);
    })
});

describe('actions', () => {
    it('should marked all notes as read', () => {
        const expectedAction = {
            type: types.MARKED_ALL_NOTES_AS_READ,
        };
        expect(actions.markedAllNotesAsRead()).toEqual(expectedAction);
    })
});

describe('actions', () => {
    it('should marked all notes as read', () => {
        const expectedAction = {
            type: types.MARKED_ALL_NOTES_AS_READ,
        };
        expect(actions.markedAllNotesAsRead()).toEqual(expectedAction);
    })
});


// ui actions
describe('actions', () => {
    it('should marked all notes as read', () => {
        const expectedAction = {
            type: types.TOGGLE_UNREAD_NOTES_POPOVER,
        };
        expect(actions.toggleUnreadNotesPopup()).toEqual(expectedAction);
    })
});
