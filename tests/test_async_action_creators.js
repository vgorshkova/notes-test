import * as actions from '../src/js/actions/actions';
import * as types from '../src/js/constants/ActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('creates note asyncronosely', () => {

        const title     = 'Testing new note addition';
        const id        = 123;
        const datetime  = 567897;

        const expectedActions ={
            type: types.CREATE_NOTE,
            payload: {
                title,
                id,
                datetime
            }};

        const store = mockStore({ notes: [] });

        return store.dispatch(actions.addNotes())
            .then(() => {
                expect(store.createNote("new", 1, 123456)).toEqual(expectedActions)
            })
    })
});