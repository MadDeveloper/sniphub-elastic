const Elastic = require('./services/Elastic')
const Firebase = require('./services/Firebase')

const elastic = new Elastic()
const firebase = new Firebase()
const database = firebase.database
const snippets = database.ref('/snippets')

// listen for changes to firebase data
snippets.on('child_added', snapshot => elastic.create('firebase', 'snippet', snapshot));
snippets.on('child_changed', snapshot => elastic.update('firebase', 'snippet', snapshot));
snippets.on('child_removed', snapshot => elastic.delete('firebase', 'snippet', snapshot));