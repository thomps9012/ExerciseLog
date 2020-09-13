import firebase from 'firebase';
import moment from 'moment';
import shortid from 'shortid';

class Storage {
    constructor() {
        var config = {
            apiKey: "AIzaSyBqLF1-pUmo-dzDuhXcxVw4N9KEIM5vqaY",
            authDomain: "health-hub-1d4fa.firebaseapp.com",
            databaseURL: "https://health-hub-1d4fa.firebaseio.com",
            projectId: "health-hub-1d4fa",
            storageBucket: "health-hub-1d4fa.appspot.com",
            messagingSenderId: "190127462841",
            appId: "1:190127462841:web:861b745b5832cbe31bfe68",
            measurementId: "G-0G0YR219QL"
        };

        this.app = firebase.initializeApp(config);
        this.db = firebase.database();
    }
    getworkouts(id) {
        const user = firebase.auth().currentUser;
        const uid = user && user.uid;

        if (!uid) {
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