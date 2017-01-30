import React from 'react';
import ApplicationBar from 'material-ui/AppBar';
import NotesIcon from '../NotesIcon';
import styles from './styles';

export default class AppBar extends React.Component {

    render () {
        const {notes, unreadNotesNumber, unreadNotesPopoverOpen, onToggleUnreadNotesPopup} = this.props;

        return (
            <ApplicationBar
                title="Your messages"
                titleStyle={styles.title}
                iconElementRight={
                <NotesIcon
                    notes={notes}
                    unreadNotesNumber={unreadNotesNumber}
                    unreadNotesPopoverOpen={unreadNotesPopoverOpen}
                    onToggleUnreadNotesPopup={onToggleUnreadNotesPopup}
                 />}
                showMenuIconButton={false}
            />
        );
    }
}