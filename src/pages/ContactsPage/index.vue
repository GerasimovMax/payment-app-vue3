<template>
  <main-layout title="Contacts">
    <template #header>
      <page-nav add-button-route="AddContact" />
    </template>

    <div v-if="!contacts.length">Loading...</div>
    <div v-else>
      <button
        v-for="contact in contacts"
        :key="contact.id"
        @click="setContact(contact)"
        class="mb-3 block font-bold hover:text-primary"
      >
        {{ contact.name }}
      </button>
    </div>
  </main-layout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layout/MainLayout.vue'
import PageNav from '@/components/layout/PageNav.vue'
import { Contact } from '@/common/types'
import { useContactsStore } from '@/store/contacts'
import { usePaymentStore } from '@/store/payment'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const contactsStore = useContactsStore()
const paymentStore = usePaymentStore()
const router = useRouter()

contactsStore.fetchContacts()
const { contacts } = storeToRefs(contactsStore)

const setContact = (contact: Contact): void => {
  paymentStore.setContact(contact)
  useRouter
  router.go(-1)
}
</script>
