const firebase = require('firebase/app')
require('firebase/database')

class Firebase {
    static get config() {
        return {
            apiKey: "AIzaSyDkAAFfXsr3wvzVem2uQBd3sWGWPyunY8M",
            authDomain: "snipz-dev.firebaseapp.com",
            databaseURL: "https://snipz-dev.firebaseio.com",
            projectId: "snipz-dev",
            storageBucket: "snipz-dev.appspot.com",
            messagingSenderId: "750034482061"
        }
    }

    constructor() {
        this.app = firebase.initializeApp(Firebase.config)
        this.database = this.app.database()
    }
}

module.exports = Firebase