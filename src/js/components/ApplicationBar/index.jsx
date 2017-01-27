import React from 'react';
import ApplicationBar from 'material-ui/AppBar';
import NotesIcon from '../NotesIcon';

const style = {
    title: {
        verticalAlign: 'middle',
        textAlign: 'center',
        height: '100px',
        lineHeight: '100px',
    },

};

export default class AppBar extends React.Component {

    render () {
        const {notes, unreadNotesNumber, unreadNotesPopoverOpen, onToggleUnreadNotesPopup} = this.props;

        return (
            <ApplicationBar
                title="Your messages"
                titleStyle={style.title}
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