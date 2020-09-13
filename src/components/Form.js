import { func } from 'prop-types';
import React, { Component, PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import Field from './Field';
import SetForm from './SetForm';

const PropTypes = {
    exerciseId: PropTypes.string.isRequired,
    name: PropTypes.string,
    sets: PropTypes.array,
    notes: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onRemoveExercise: PropTypes.func.isRequired,
    onAddSet: PropTypes.func.isRequired,
    getOnRemoveSet: PropTypes.func.isRequired,
    getOnSetInputChange: PropTypes.func.isRequired
};

const defaultProps = {
    name: '',
    sets: [],
    notes: ''
};

class ExerciseForm extends Component {
    constructor(props) {
        super(props);

        this.inputPrefix = `exercise[${this.props.exerciseId}]`;

        this.onAddSetClick = this.onAddSetClick.bind(this);
        this.onRemoveExerciseClick = this.onRemoveExerciseClick.bind(this);
    }

    componentDidMount() {
        this.firstField.focus();
    }

    onAddSetClick(e) {
        e.preventDefault();
        this.props.onRemoveExercise();
    }

    getInputName(name) {
        return `${this.inputPrefix}[${name}]`;
    }

    getSetInputName(setId) {
        return name => `${this.inputPrefix}[set][${setId}][${name}]`;
    }
    // stopped coding here
    render() {
        const { exerciseId, name, sets, notes, onInputChange, getOnSetInputChange, getOnRemoveSet } = this.props;

        return (
            <div className="exercise-form">
                <FieldGroup
                    id={this.getInputName('name')}
                    name={this.getInputName('name')}
                    type="text"
                    label="Exercise"
                    value={name}
                    placeholder="Enter Exercise"
                    onChange={(e) => onInputChange("name", e.target.value)}
                    ref={(input) => { this.firstField = input }}
                />

                <h3 className="form-header">Sets</h3>
                {sets.length > 0 &&
                    <ListGroup className="sets">
                        {sets.map((set, index) => (
                            <ListGroupItem key={set.id}>
                                <SetForm
                                    order={index + 1}
                                    weight={set.weight}
                                    reps={set.reps}
                                    onInputChange={getOnSetInputChange(exerciseId, set.id)}
                                    onRemoveSet={getOnRemoveSet(exerciseId, set.id)}
                                    getInputName={this.getSetInputName(set.id)}
                                />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                }
                <p className="add-item">
                    <a href="#" onClick={this.onAddSetClick}>Add Set</a>
                </p>
                <FieldGroup
                    id={this.getInputName('notes')}
                    name={this.getInputName('notes')}
                    componentClass="textarea"
                    label="Notes"
                    value={notes}
                    onChange={(e) => onInputChange("notes", e.target.value)}
                    />
                <p className="remove-item remove-exercise">
                    <a href="#remove-exercise" onClick={this.onRemoveExerciseClick} className="text-danger">Remove Exercise</a>
                </p>
            </div>
        )
    }
}
ExerciseForm.PropTypes = PropTypes;
ExerciseForm.defaultProps = defaultProps;

export default ExerciseForm;