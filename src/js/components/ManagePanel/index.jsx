import React from 'react';
import Button from '../Button';

const ManagePanel = ({
    onMarkAllNotesAsRead,
    onDeleteNotes,
    onToggleUnreadNotesPopup,
    unreadNotesNumber,
    isAnyNoteExist,
    isUnreadNotesPopoverOpen }) => {

    return (
        <div>
            <Button
                label="Пометить все события прочитанными"
                onClick={onMarkAllNotesAsRead}
                disabled={!unreadNotesNumber}
                style={{isNeighbor: false}}
            />
            <Button
                label="Удалить все события"
                onClick={onDeleteNotes}
                disabled={!isAnyNoteExist}
                style={{isNeighbor: false}}
            />
            <Button
                label={isUnreadNotesPopoverOpen ? "Скрыть popup нотификаций" : "Показать popup нотификаций"}
                onClick={onToggleUnreadNotesPopup}
                style={{isNeighbor: false}}
            />

        </div>
    )
};

export default ManagePanel
