import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

export default class NoteCreator extends React.Component {

    state = {
        newNoteTitle: '',
        isButtonDisabled: true
    };

    onChange = (e) => {
        this.fillInput(e.target.value);

    };

    fillInput = (str) => {
        this.setState({
            newNoteTitle: str,
            isButtonDisabled: !str
        });
    };

    clearInput() {
        this.fillInput('');
    }

    onClick = () => {
        this.props.onClick({
            title: this.state.newNoteTitle,
            id: Date.now(),
            datetime: new Date()
        });
        this.clearInput();
    };

    render () {
        return (
            <div>
                <TextField
                    hintText="Введите название события"
                    floatingLabelText="Событие"
                    onChange={this.onChange}
                    value={this.state.newNoteTitle}
                />
                <RaisedButton
                    onClick={this.onClick}
                    label="Отправить"
                    disabled={this.state.isButtonDisabled}
                    primary={true}
                    style={style}
                />
            </div>
        );
    }
}