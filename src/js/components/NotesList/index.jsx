import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Moment from 'moment';

export default class NotesList extends React.Component {

    onClick = (event) => {
        event.preventDefault();
        this.props.onToggleUnreadNotesPopup();
    };

    render () {
        const {notes}= this.props;

        const notesList = notes.map((note) => {
            return (
                <ListItem
                    key={note.id}
                    primaryText={note.title}
                    secondaryText={Moment(note.datetime).fromNow()}
                />
            );
        });

        return (
            notesList.length ?
                <List>
                    {notesList}
                    <ListItem><a href="#" onClick={this.onClick}>посмотреть всё...</a></ListItem>
                </List>
                :
                <ListItem primaryText="Нет событий..."/>
        );
    }
}