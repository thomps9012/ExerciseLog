import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button, PanelGroup, Panel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import moment from 'moment';
import shortid from 'shortid';

import Field from "../components/Field";
import Form from "../components/Form";
import ExerciseForm from '../components/Form';

const PropTypes = {
    workoutID: PropTypes.string,
    date: PropTypes.string,
    exercises: PropTypes.array,
    onAddWorkout: PropTypes.func,
    onUpdateWorkout: PropTypes.func,
    onDeleteWorkout: PropTypes.func
};

const defaultProps = {
    workoutId: 'new',
    date: moment().format('YYY-MM-DD'),
    exercises: []
};

class WorkoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            exercises: props.exercises,
            activeExercise: false
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onAddExerciseClick = this.onAddExerciseClick.bind(this);
        this.onExerciseSelect = this.onAddExerciseSelect.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getOnSetInputChange = this.getOnSetInputChange.bind(this);
        this.getOnRemoveSet = this.getOnRemoveSet.bind(this);
    }

    componentDidMount() {
        this.firstField.focus();
    }

    componentWillReceiveProps(nextProps) {
        const { date, exercises } = nextProps;

        this.setState({
            date,
            exercises,
            activeExercise: false
        });
    }

    onDateChange(e) {
        this.setState({
            date: e.target.value
        });
    }

    onAddExerciseClick(e) {
        e.preventDefault();

        var newExercise = {
            id: shortid.generate(),
            name: '',
            sets: [],
            notes: ''
        };

        this.setState({
            exercises: [...this.state.exercises, newExercise],
            activeExercise: newExercise.id
        });
    }

    onExerciseSelect(exerciseId) {
        if (exerciseId === this.state.activeExercise) {
            this.setState({
                activeExercise: false
            })
        } else {
            this.setState({
                activeExercise: exerciseId
            })
        }
    }

    onFormSubmit(e) {
        e.preventDefault();

        if (this.props.isNewWorkout) {
            this.props.addWorkout({
                date: this.state.date,
                exercises: this.state.exercises
            });
        } else {
            this.props.updateWorkout({
                id: this.props.workoutId,
                date: this.state.date,
                exercises: this.state.exercises
            });
        }
    }

    onDeleteWorkoutClick(e) {
        e.preventDefault();

        this.props.deleteWorkout(this.props.workoutId);
    }

    getOnRemoveExercise(exerciseId) {
        return () => {
            const exercises = this.state.exercises;
            const index = exercises.findIndex(exercise => exercise.id === exerciseId);

            this.setState({
                exercises: [
                    ...exercises.slice(0, index),
                    ...exercises.slice(index + 1)
                ],
                activeExercise: this.state.activeExercise === exerciseId ? false : exerciseId
            })
        };
    }

    getOnExerciseInputChange(exerciseId) {
        return (inputName, value) => {
            this.setState({
                exercises: this.state.exercises.map((exercise, index) => {
                    if (exercise.id !== exerciseId) {
                        return exercise
                    }

                    return {
                        ...exercise,
                        [inputName]: value
                    }
                })
            })
        };
    }

    getOnAddSet(exerciseId) {
        return () => {
            var newSet = {
                id: shortid.generate(),
                weight: '',
                reps: ''
            };

            this.setState({
                exercises: this.state.exercise.map((exercise, index) => {
                    if (exercise.id !== exerciseId) {
                        return exercise;
                    }

                    var sets = exercise.sets || [];

                    return {
                        ...exercise,
                        sets: [...sets, newSet]
                    }
                })
            });
        };
    }

    getOnRemoveSet(exerciseId, setId) {
        return () => {
            this.setState({
                exercises: this.state.exercises.map(function (exercise, index) {
                    if (exercise.id !== exerciseId) {
                        return exercise;
                    }

                    const setIndex = exercise.sets.findIndex(set => set.id === setId);

                    return {
                        ...exercise,
                        sets: [
                            ...exercise.sets.slice(0, setIndex),
                            ...exercise.sets.slice(setIndex + 1)
                        ]
                    }
                })
            })
        }
    }

    getOnSetInputChange(exerciseId, setId) {
        return (inputName, value) => {
            this.setState({
                exercise: this.state.exercises.map((exercise, index) => {
                    if (exercise.id !== exerciseId) {
                        return exercise
                    }

                    return {
                        ...exercise,
                        sets: exercise.sets.map((set, index) => {
                            if (set.id !== setId) {
                                return set
                            }

                            return {
                                ...set,
                                [inputName]: value
                            }
                        })
                    }
                })
            })
        }
    }

    render() {
        const { workoutId, isNewWorkout } = this.props;

        return (
            <form className="workout-form" onSubmit={this.onFormSubmit}>
                <Field
                    id="date"
                    name="date"
                    type="date"
                    label="Date"
                    value={this.state.date}
                    onChange={this.onDateChange}
                    placeholder="mm/dd/yyyy"
                    ref={(input) => { this.firstField = input }}
                />
                <div className="exercises">
                    <h2 className="form-header">Exercises</h2>
                    {this.state.exercises.length > 0 &&
                        <PanelGroup
                            activeKey={this.state.activeExercise}
                            onSelect={this.onExerciseSelect}
                            accordion
                        >
                            {this.state.exercises.map((exercise, index) => (
                                <Panel
                                    header={exercise.name || `Exercise ${index + 1}`}
                                    eventKey={exercise.id}
                                    key={exercise.id}
                                >
                                    <ExerciseForm
                                        exerciseId={exercise.id}
                                        name={exercise.name}
                                        sets={exercise.sets}
                                        notes={exercise.notes}
                                        onInputChange={this.getOnExerciseInputChange(exercise.id)}
                                        onRemoveExercise={this.getOnRemoveExercise(exercise.id)}
                                        onAddSet={this.getOnAddSet(exercise.id)}
                                        getOnRemoveSet={this.getOnRemoveSet}
                                        getOnSetInputChange={this.getOnSetInputChange}
                                    />
                                </Panel>
                            ))}
                        </PanelGroup>
                    }
                    <p className="add-item">
                        <a href="#" onClick={this.onAddExerciseClick}>
                            Add Exercise
                        </a>
                    </p>
                </div>
                <ButtonToolbar>
                    <Button type="submit" className="btn-primary">
                        {isNewWorkout ? "Log New" : "Update"} Workout
                    </Button>
                    {!isNewWorkout && (
                        <LinkContainer to={{ pathname: "workouts/new", query: { clone: workoutId } }}>
                            <Button bsStyle="success">Repeat Workout</Button>
                        </LinkContainer>
                    )}
                    {!isNewWorkout && (
                        <Button bsStyle="danger" onClick={this.onDeleteWorkout}>
                            Delete Workout
                        </Button>
                    )}
                </ButtonToolbar>
            </form>
        )
    }
}

WorkoutForm.PropTypes = PropTypes;
WorkoutForm.defaultProps = defaultProps;

export default WorkoutForm;