const elasticsearch = require('elasticsearch')

class Elastic {
    constructor(host = 'localhost:9200') {
        this.client = new elasticsearch.Client({ 
            host
        })
    }

    create(index, type, document) {
        // this.client
        //     .create(this.index, this.type, snap.val(), snap.key())
        //     .on('data', data => { 
        //         console.log('indexed ', snap.key()) 
        //     })
        //     .on('error', error => { 
        //         /* handle errors */ 
        //     })
    }
    
    update(index, type, document) {
        
    }

    delete(index, type, id) {
        // this.client
        //     .delete({
        //         index: this.index, this.type, snap.key()
        //     })
    }
}

module.exports = Elastic