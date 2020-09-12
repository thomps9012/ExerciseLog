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

