import uiReducer from '../../src/js/reducers/uiReducer';
import notesReducer from '../../src/js/reducers/notesReducer';
import * as types from '../../src/js/constants/ActionTypes';
import * as initialState from '../../src/js/constants/InitialStates';

describe('notes reducer', () => {

    it('should return the initial state', () => {
        expect(
            notesReducer(undefined, {})
        ).toEqual(initialState.NOTES)
    });

    it('should handle CREATE_NOTE', () => {
        expect(
            notesReducer([], {
                type: types.CREATE_NOTE,
                payload: {
                    title: "Test string",
                    id: 12345,
                    datetime: 76543234556
                }
            })
        ).toEqual(
            [
                {
                    title: "Test string",
                    id: 12345,
                    unread: true,
                    datetime: 76543234556
                }
            ]
        );

        expect(
            notesReducer(
                [
                    {
                        title: "Test string",
                        id: 12345,
                        unread: false,
                        datetime: 76543234556
                    }
                ],
                {
                    type: types.CREATE_NOTE,
                    payload: {
                        title: "Test string2",
                        id: 123456,
                        datetime: 176543234556
                    }
                }
            )
        ).toEqual(
            [
                {
                    title: "Test string",
                    id: 12345,
                    unread: false,
                    datetime: 76543234556
                },{
                    title: "Test string2",
                    id: 123456,
                    unread: true,
                    datetime: 176543234556
                }
            ]
        )
    });

    it('should delete all notes', () => {
        expect(
            notesReducer(
                undefined,
                {type: types.DELETE_NOTES}
            )
        ).toEqual([])
    });

    it('should marked all notes as read', () => {
        expect(
            notesReducer([
                {
                    title: "Test string",
                    id: 12345,
                    unread: true,
                    datetime: 76543234556
                }, {
                    title: "Test string2",
                    id: 123456,
                    unread: true,
                    datetime: 176543234556
                }, {
                    title: "Test string3",
                    id: 1234567,
                    unread: false,
                    datetime: 276543234556
                }]
                ,
                {type: types.MARKED_ALL_NOTES_AS_READ}
            )
        ).toEqual(
            [{
                title: "Test string",
                id: 12345,
                unread: false,
                datetime: 76543234556
            }, {
                title: "Test string2",
                id: 123456,
                unread: false,
                datetime: 176543234556
            }, {
                title: "Test string3",
                id: 1234567,
                unread: false,
                datetime: 276543234556
            }])
    });

    it('should receive all notes', () => {
        expect(
            notesReducer([
                    {
                        title: "Test string",
                        id: 12345,
                        unread: true,
                        datetime: 76543234556
                    }, {
                        title: "Test string2",
                        id: 123456,
                        unread: true,
                        datetime: 176543234556
                    }, {
                        title: "Test string3",
                        id: 1234567,
                        unread: false,
                        datetime: 276543234556
                    }]
                ,
                {type: types.GET_ALL_NOTES}
            )
        ).toEqual(
            [
                {
                    title: "Test string",
                    id: 12345,
                    unread: true,
                    datetime: 76543234556
                }, {
                title: "Test string2",
                id: 123456,
                unread: true,
                datetime: 176543234556
            }, {
                title: "Test string3",
                id: 1234567,
                unread: false,
                datetime: 276543234556
            }])
    });
});

describe('ui reducer', () => {

    it('should return initial state of UnreadNotesPopover: false', () => {
        expect(
            uiReducer(
                undefined,
                {}
            )
        ).toEqual({isUnreadNotesPopoverOpen: false})
    });

    it('should return true if UnreadNotesPopover is false', () => {
        expect(
            uiReducer(
                undefined,
                {type: types.TOGGLE_UNREAD_NOTES_POPOVER}
            )
        ).toEqual({isUnreadNotesPopoverOpen: true})
    });
});
