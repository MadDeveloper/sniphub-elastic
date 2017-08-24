const Elastic = require('./services/Elastic')
const Firebase = require('./services/Firebase')

const elastic = new Elastic()
const firebase = new Firebase()
const database = firebase.database
const snippets = database.ref('snippets')

// listen for changes to firebase data
snippets.on('child_added', snapshot => elastic.save({
    index: 'firebase', 
    type: 'snippet', 
    id: snapshot.key, 
    document: snapshot.val()
}))
snippets.on('child_changed', snapshot => elastic.save({
    index: 'firebase', 
    type: 'snippet', 
    id: snapshot.key, 
    document: snapshot.val()
}))
snippets.on('child_removed', snapshot => elastic.delete({
    index: 'firebase',
    type: 'snippet', 
    id: snapshot.key
}))

console.log('\nfirebase database is now listened and get ready to be mapped into elasticsearch\n')