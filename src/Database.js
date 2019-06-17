import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "",
  databaseURL: "https://fiveminutes-5655c.firebaseio.com/"
};

firebase.initializeApp(config);

export default firebase.database()