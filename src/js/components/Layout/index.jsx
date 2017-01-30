import React from 'react';
import AppBar from '../ApplicationBar';
import NoteCreator from '../NoteCreator';
import ManagePanel from '../ManagePanel';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';
import CSSModules from 'react-css-modules'; //could be used in layout with the attribute 'styleName'
import {NOTES_NUMBER_IN_POPOVER} from '../../constants/common'


@connect((store) => {
    return {
        lastNotes: store.notes.slice(-NOTES_NUMBER_IN_POPOVER).reverse(),
        unreadNotesNumber: store.notes.filter((note) => note.unread).length,
        isUnreadNotesPopoverOpen: store.ui.isUnreadNotesPopoverOpen,
        isAnyNoteExist: store.notes.length
    };
})

//@CSSModules(styles, {allowMultiple: true})

export default class Layout extends React.Component {

    onCreateNote = (note) => {
        this.props.dispatch(Actions.createNote(note.title, note.id, note.datetime));
    };

    onToggleUnreadNotesPopup = () => {
        this.props.dispatch(Actions.toggleUnreadNotesPopup());
    };

    onDeleteNotes = () => {
        this.props.dispatch(Actions.deleteNotes())
    };

    onMarkAllNotes = () => {
        this.props.dispatch(Actions.markedAllNotesAsRead());
    };

    componentDidMount() {
        this.props.dispatch(Actions.addNotes());
    }

    render() {

        return (
            <div>
                <AppBar
                    notes={this.props.lastNotes}
                    unreadNotesNumber={this.props.unreadNotesNumber}
                    unreadNotesPopoverOpen={this.props.isUnreadNotesPopoverOpen}
                    onToggleUnreadNotesPopup={this.onToggleUnreadNotesPopup}
                />
                <NoteCreator onClick={this.onCreateNote}/>
                <ManagePanel
                    onMarkAllNotesAsRead={this.onMarkAllNotes}
                    onDeleteNotes={this.onDeleteNotes}
                    onToggleUnreadNotesPopup={this.onToggleUnreadNotesPopup}
                    isUnreadNotesPopoverOpen={this.props.isUnreadNotesPopoverOpen}
                    isAnyNoteExist={this.props.isAnyNoteExist}
                    unreadNotesNumber={this.props.unreadNotesNumber}
                />
            </div>
        )
    }
}