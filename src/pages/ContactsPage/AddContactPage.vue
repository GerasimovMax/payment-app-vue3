<template>
  <main-layout>
    <template #header>
      <page-nav title="Add new contact" />
    </template>

    <form @submit.prevent="addNewContact" autocomplete="off">
      <div>
        <text-field
          v-model="newContact.name"
          id="name"
          placeholder="Name"
          :icon="assets.icons.user"
          :disabled="isAddingNewContact"
        />
      </div>
      <div>
        <text-field
          v-model="newContact.email"
          id="email"
          placeholder="Email"
          :icon="assets.icons.mail"
          :disabled="isAddingNewContact"
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary mt-5"
        :disabled="isAddingNewContact"
      >
        Add
      </button>
    </form>
  </main-layout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layout/MainLayout.vue'
import PageNav from '@/components/layout/PageNav.vue'
import TextField from '@/components/ui/TextField.vue'
import { Contact } from '@/common/types'
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store/contacts'
import { useAssets } from '@/use/assets'
import { reactive, ref } from 'vue'
import axios from 'axios'

const newContact: Pick<Contact, 'name' | 'email'> = reactive({
  name: '',
  email: ''
})

let isAddingNewContact = ref(false)

const router = useRouter()
const contactStore = useContactsStore()
const assets = useAssets()

const addNewContact = async () => {
  isAddingNewContact.value = true

  const resp = await axios.post('/api/contacts', newContact)

  contactStore.addContact(resp.data)
  isAddingNewContact.value = false
  router.go(-1)
}
</script>
