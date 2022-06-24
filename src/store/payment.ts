import { defineStore } from 'pinia'
import { Contact, PaymentMethod } from '@/common/types'

export type PaymentState = {
  contact: Contact | null
  method: PaymentMethod | null
  amount: number | null
}

export const usePaymentStore = defineStore('payment', {
  state: () =>
    ({
      contact: null,
      method: null,
      amount: null
    } as PaymentState),

  actions: {
    setContact(contact: Contact): void {
      this.contact = contact
    },
    setMethod(method: PaymentMethod): void {
      this.method = method
    },
    setAmount(amount: PaymentState['amount']) {
      this.amount = amount
    }
  }
})
