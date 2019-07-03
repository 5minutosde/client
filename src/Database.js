import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: process.env.REACT_APP_DB_API_KEY,
  databaseURL: process.env.REACT_APP_DB_URL
}

firebase.initializeApp(config)

export default firebase.database()