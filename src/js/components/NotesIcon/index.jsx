import React from 'react';
import Badge from 'material-ui/Badge';
import ToggleNotesButton from '../ToggleNotesButton';
import styles from './styles';


const NotesIcon = ({
    notes,
    unreadNotesNumber,
    unreadNotesPopoverOpen,
    onToggleUnreadNotesPopup}) => {

    return (
        <Badge
            badgeContent={unreadNotesNumber || ""}
            primary={!unreadNotesNumber}
            secondary={!!unreadNotesNumber}
            badgeStyle={styles.badgeStyle}
        >
            <ToggleNotesButton
                notes={notes}
                unreadNotesPopoverOpen={unreadNotesPopoverOpen}
                onToggleUnreadNotesPopup={onToggleUnreadNotesPopup}
            />
        </Badge>
    )
};

export default NotesIcon;