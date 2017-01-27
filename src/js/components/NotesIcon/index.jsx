import React from 'react';
import Badge from 'material-ui/Badge';
import ShowNotesButton from '../ShowNotesButton';

export default class NotesIcon extends React.Component {

    /*componentDidMount() {
        this.timerID = setInterval(
            () => this.sendNewNotification(),
            500
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID);
    }
    */

    render() {
        const {notes, unreadNotesNumber, unreadNotesPopoverOpen, onToggleUnreadNotesPopup} = this.props;

        return (
            <Badge
                badgeContent={unreadNotesNumber || ""}
                primary={!unreadNotesNumber}
                secondary={!!unreadNotesNumber}
                badgeStyle={{top: 12, right: 12 }}
            >
                <ShowNotesButton
                    notes={notes}
                    unreadNotesPopoverOpen={unreadNotesPopoverOpen}
                    onToggleUnreadNotesPopup={onToggleUnreadNotesPopup}
                />
            </Badge>
        )
    }
}
