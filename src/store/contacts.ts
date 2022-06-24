import { defineStore } from 'pinia'
import axios from 'axios'
import { Contact } from '@/common/types'

export type ContactsState = {
  contacts: Contact[]
  useCache: boolean
}

export const useContactsStore = defineStore('contacts', {
  state: () =>
    ({
      contacts: [],
      useCache: false
    } as ContactsState),

  actions: {
    async fetchContacts(): Promise<void> {
      if (this.useCache) {
        return
      }

      const resp = await axios.get('/api/contacts')
      this.contacts = resp.data
      this.useCache = true
    },
    addContact(contact: Contact): void {
      this.contacts.push(contact)
    }
  }
})
