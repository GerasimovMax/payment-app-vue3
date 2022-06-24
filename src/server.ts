import { createServer, Response } from 'miragejs'
import { Contact } from '@/common/types'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    seeds(server) {
      server.db.loadData({
        contacts: [
          { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
          { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
          { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
          { id: 4, name: 'Patricia Lebsack', email: 'Jul.OConner@kory.org' }
        ]
      })
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/contacts', ({ db }) => {
        return db.contacts
      })

      this.post('/contacts', ({ db }, request) => {
        let contact = JSON.parse(request.requestBody)
        const contacts = db.contacts

        contact.id = +contacts[contacts.length - 1].id + 1

        return db.contacts.insert(contact)
      })

      this.post('/make-payment', () => {
        return new Response(200)
      })
    }
  })

  return server
}
