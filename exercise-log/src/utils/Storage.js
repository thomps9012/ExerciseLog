import firebase from 'firebase';
import moment from 'moment';
import shortid from 'shortid';

class Storage {
    constructor(){
        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            storageBucket: "",
            messageingSenderId: ""
        };

        this.app = firebase.initializeApp(config);
        this.db = firebase.database();
    }
    getworkouts(id) {
        const user = firebase.auth().currentUser;
        const uid = user && user.uid;

        if(!uid) {
            return null;
        }

        if (typeof id === "undefined") {
            return this.db.ref('workouts/').orderByChild('uid').equalTo(user.uid);
        }
        return this.db.ref('workouts/' + id);
    }
    addRun({ date = false, workouts = [] }) {
        const id = shortid.generate();
        const user = firebase.auth().currentUser;
        const uid = user && user.uid;

        if (!uid) {
            return;
        }

        date = moment(date).unix() || moment().unix();

        this.db.ref('workouts/').push.set({
            id,
            uid,
            date,
            run
        });
    }

    updateRun(refId, data) {
        if (typeof refId === 'undefined') {
            return;
        }
        var date = moment(data.date).unix();

        this.db.ref('workouts/' + refId).update({
            ...data,
            date
        });
    }

    deleteRun(refId) {
        this.db.ref('workouts/' + refId).remove();
    }
}

export default Storage;