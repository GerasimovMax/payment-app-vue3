export interface Contact {
  readonly id: string
  name: string
  email: string
}

export interface PaymentMethod {
  readonly id: string
  number: string
}

export interface CreditCard extends PaymentMethod {
  personFullName: string
  expiryDate: string
}

export interface BankAccount extends PaymentMethod {
  bankName: string
}
