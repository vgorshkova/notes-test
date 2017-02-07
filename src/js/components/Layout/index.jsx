import React from 'react';
import AppBar from '../ApplicationBar';
import NoteCreator from '../NoteCreator';
import ManagePanel from '../ManagePanel';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';
import {NOTES_NUMBER_IN_POPOVER} from '../../constants/common'


@connect(
    state => ({
        lastNotes: state.notes.slice(-NOTES_NUMBER_IN_POPOVER).reverse(),
        unreadNotesNumber: state.notes.filter((note) => note.unread).length,
        isUnreadNotesPopoverOpen: state.ui.isUnreadNotesPopoverOpen,
        isAnyNoteExist: state.notes.length
    }),

    dispatch => ({
        onCreateNote: (note) => {
            dispatch(Actions.createNote(note.title, note.id, note.datetime));
        },

        onToggleUnreadNotesPopup: () => {
            dispatch(Actions.toggleUnreadNotesPopup());
        },

        onDeleteNotes: () => {
            dispatch(Actions.deleteNotes())
        },

        onMarkAllNotes: () => {
            dispatch(Actions.markedAllNotesAsRead());
        },

        onGenerateNewNote: () => {
            dispatch(Actions.addNotes());
        }
    })
)

export default class Layout extends React.Component {
    componentDidMount() {
        this.props.onGenerateNewNote();
    }

    render() {
        return (
            <div>
                <AppBar
                    notes={this.props.lastNotes}
                    unreadNotesNumber={this.props.unreadNotesNumber}
                    unreadNotesPopoverOpen={this.props.isUnreadNotesPopoverOpen}
                    onToggleUnreadNotesPopup={this.props.onToggleUnreadNotesPopup}
                />
                <NoteCreator onClick={this.props.onCreateNote}/>
                <ManagePanel
                    onMarkAllNotesAsRead={this.props.onMarkAllNotes}
                    onDeleteNotes={this.props.onDeleteNotes}
                    onToggleUnreadNotesPopup={this.props.onToggleUnreadNotesPopup}
                    isUnreadNotesPopoverOpen={this.props.isUnreadNotesPopoverOpen}
                    isAnyNoteExist={this.props.isAnyNoteExist}
                    unreadNotesNumber={this.props.unreadNotesNumber}
                />
            </div>
        )
    }
}