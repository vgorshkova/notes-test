const initialState = [
    {
        id: 17,
        title: 'Test test test 17',
        unread: true,
        datetime: new Date(),
    },
    {
        id: 16,
        title: 'Test test test 16',
        unread: true,
        datetime: new Date().setHours((new Date()).getHours() - 2),
    },
    {
        id: 14,
        title: 'Test test test 14',
        unread: true,
        datetime: new Date().setDate((new Date()).getDate() - 1),
    },
    {
        id: 13,
        title: 'Test test test 13',
        unread: true,
        datetime: new Date().setDate((new Date()).getDate() - 3),
    },
    {
        id: 12,
        title: 'Test test test 12',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 8),
    },
    {
        id: 11,
        title: 'Test test test 11',
        unread: true,
        datetime: new Date().setDate((new Date()).getDate() - 31),
    },
    {
        id: 10,
        title: 'Test test test 10',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 160),
    }
];
export default function reducer(state=initialState, action) {

    switch (action.type) {
        case 'CREATE_NOTE': {
            return state.concat([{
                title: action.payload.title || "Random string",
                id: action.payload.id || 1212,
                unread: true,
                datetime: action.payload.datetime || 1
            }]);
        }

        case 'DELETE_NOTES': {
            return [];
        }

        case 'MARKED_ALL_NOTES_AS_READ': {
            return state.map((note) => {
                return {...note, unread:false};
            });
        }

        case 'GET_ALL_NOTES': {
            return state.slice();
        }

        default: {
            return state;
        }

        /*case "FETCH_USER": {
            return {...state, fetching: true}
        }
        case "FETCH_USER_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
            }
        }
        case "SET_USER_NAME": {
            return {
                ...state,
                user: {...state.user, name: action.payload},
            }
        }
        case "SET_USER_AGE": {
            return {
                ...state,
                user: {...state.user, age: action.payload},
            }
        }*/
    }

}

