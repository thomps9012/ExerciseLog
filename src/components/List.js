import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import moment from 'moment';

class List extends Component {
    render(){
        const { workouts } = this.props;

        return(
            <ListGroup>
                {workouts.length > 0 && (
                    <LinkContainer to="/workouts/new">
                       <ListGroupItem
                        header="New Workout"
                        className="new-workout-btn"
                        >
                        </ListGroupItem> 
                    </LinkContainer>
                )}
                {workouts.length > 0 ? workouts.map((workout, index) => (
                    <LinkContainer to={`/workouts/${workout.id}`} key={workout.id}>
                        <ListGroupItem
                            header={moment(workout.date).format("ddd.,MMM. D YYYY")}
                            >
                                <span className="details">
                                    {workout.exercises.map(exercise => exercise.name).join(', ') || "You didn't enter any exercises"}
                                </span>
                            </ListGroupItem>
                    </LinkContainer>
                )):     (
                    <ListGroupItem
                        header="You haven't logged any workouts">
                            <span className="details">
                                Log your workout to begin your fitness journey!
                            </span>
                        </ListGroupItem>
                )}
            </ListGroup>
        )
    }
}
export default List;