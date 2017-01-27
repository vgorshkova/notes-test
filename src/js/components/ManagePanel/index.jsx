import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './index.css';

export default class ManagePanel extends React.Component {

    render() {
        return (
            <div>
                <RaisedButton
                    label="Пометить все события прочитанными"
                    onClick={this.props.onMarkAllNotesAsRead}
                    primary={true}
                    disabled={!this.props.unreadNotesNumber}
                    styleName="button"
                />
                <RaisedButton
                    label="Удалить все события"
                    onClick={this.props.onDeleteNotes}
                    primary={true}
                    disabled={!this.props.isAnyNoteExist}
                    styleName="button"
                />
                <RaisedButton
                    label={this.props.isUnreadNotesPopoverOpen ? "Скрыть popup нотификаций" : "Показать popup нотификаций"}
                    onClick={this.props.onToggleUnreadNotesPopup}
                    primary={true}
                    styleName="button"
                />
                <button styleName="button">ghjgj</button>

            </div>
        )
    }
}
