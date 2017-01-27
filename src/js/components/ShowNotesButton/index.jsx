import React from 'react';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import NotesList from '../NotesList';

const style = {
    margin: 12,
};

export default class ShowNotesButton extends React.Component {

    state = {anchorEl: null};

    componentDidMount() {
        this.setState({
            anchorEl: this.AnchorElement
        });
    };

    handleTouchTap = (event) => {
        event.preventDefault(); ///?

        this.props.onToggleUnreadNotesPopup();
    };

    render() {
        const {notes, unreadNotesPopoverOpen, onToggleUnreadNotesPopup} = this.props;
        return (
            <div>
                <div ref={(input) => { this.AnchorElement = input; }}>
                    <IconButton
                        onTouchTap={this.handleTouchTap}
                        tooltip="Notifications"
                    >
                        <NotificationsIcon />
                    </IconButton>
                </div>
                <Popover
                    open={unreadNotesPopoverOpen}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    onRequestClose={onToggleUnreadNotesPopup}
                    animation={PopoverAnimationVertical}
                >
                    <NotesList notes={notes} onToggleUnreadNotesPopup={onToggleUnreadNotesPopup} />
                </Popover>
            </div>
        );
    }
}
