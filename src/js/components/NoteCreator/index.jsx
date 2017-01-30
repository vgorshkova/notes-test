import React from 'react';
import TextField from 'material-ui/TextField';
import Button from '../Button';
import styles from './styles';


export default class NoteCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newNoteTitle: '',
            isButtonDisabled: true
        };
    }

    onChange = (e) => {
        this.fillInput(e.target.value);

    };

    fillInput = (str) => {
        this.setState({
            newNoteTitle: str,
            isButtonDisabled: !str
        });
    };

    clearInput = () => {
        this.fillInput('');
    };

    onClick = () => {
        this.props.onClick({
            title: this.state.newNoteTitle,
            id: Date.now(),
            datetime: new Date()
        });
        this.clearInput();
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onClick();
        }
    };

    render () {
        return (
            <div>
                <TextField
                    hintText="Введите название события"
                    floatingLabelText="Событие"
                    onChange={this.onChange}
                    value={this.state.newNoteTitle}
                    style={styles.textField}
                    onKeyPress={this.onKeyPress}
                />
                <Button
                    onClick={this.onClick}
                    label="Отправить"
                    disabled={this.state.isButtonDisabled}
                    style={{isNeighbor: true}}
                />
            </div>
        );
    }
}