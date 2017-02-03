import React from 'react';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import NotesList from '../NotesList';

export default class ShowNotesButton extends React.Component {

    constructor(props) {
        super(props);
        this.state ={ anchorEl: null };
    }

    componentDidMount() {
        this.setState({
            anchorEl: this.AnchorElement
        });
    }

    handleTouchTap = (event) => {
        event.preventDefault();
        this.props.onToggleUnreadNotesPopup();
    };

    render() {
        const {notes, unreadNotesPopoverOpen, onToggleUnreadNotesPopup} = this.props;

        return (
            <div>
                <div ref={(icon) => { this.AnchorElement = icon; }}>
                    <IconButton
                        onTouchTap={this.handleTouchTap}
                        tooltip="Уведомления"
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
