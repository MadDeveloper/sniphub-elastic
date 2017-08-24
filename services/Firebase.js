const firebase = require('firebase')
const config = require('../config')

class Firebase {
    static get config() {
        return config.firebase
    }

    constructor() {
        this.firebase = firebase.initializeApp(Firebase.config)
        this.app = firebase.app()
        this.database = firebase.database()
    }
}

module.exports = Firebase