const elasticsearch = require('elasticsearch')
const config = require('../config')

class Elastic {
    constructor(host = config.elastic.url) {
        this.client = new elasticsearch.Client({ host })
    }
    
    async save({ index, type, id, document }) {
        try {
            await this.createIndexIfNotExists(index)
            await this.client.index({
                index,
                type,
                id,
                body: document
            })

            console.log(`${id} indexed. index: ${index}, type: ${type}`)
        } catch (error) {
            console.error(`Impossible to save the document: ${id}, index: ${index}, type: ${type}.\n${error}`)
        }
    }

    async delete({ index, type, id }) {
        try {
            await this.client.delete({
                index,
                type,
                id
            })
            
            console.log(`${id} document deleted. index: ${index}, type: ${type}`)
        } catch (error) {
            console.error(`Impossible to delete the document: ${id}, index: ${index}, type: ${type}.\n${error}`)
        }
    }

    async createIndexIfNotExists(index) {
        let exists

        try {
            exists = await this.client.indices.exists({ index })
        } catch (error) {
            exists = false
        }

        if (!exists) {
            await this.client.indices.create({ index })
        }
    }
}

module.exports = Elastic