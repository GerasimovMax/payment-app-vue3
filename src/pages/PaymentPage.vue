<template>
  <main-layout title="Make a payment">
    <form @submit.prevent="submitPayment" autocomplete="off">
      <div>
        <text-field
          :value="contact?.name"
          id="contact"
          placeholder="Select contact"
          readonly
          :icon="assets.icons.user"
          :disabled="isSubmitingPayment"
          @click="$router.push({ name: 'Contacts' })"
        />
      </div>
      <div>
        <text-field
          v-model="method"
          id="method"
          placeholder="Select payment method"
          :icon="assets.icons.card"
          :disabled="isSubmitingPayment"
        />
      </div>
      <div>
        <text-field
          v-model="localAmount"
          id="amount"
          placeholder="Enter amount"
          :disabled="isSubmitingPayment"
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary mt-5"
        :disabled="isSubmitingPayment"
      >
        Pay
      </button>
    </form>
  </main-layout>
</template>

<script setup lang="ts">
import TextField from '@/components/ui/TextField.vue'
import MainLayout from '@/components/layout/MainLayout.vue'
import { ref, watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { usePaymentStore } from '@/store/payment'
import { useAssets } from '@/use/assets'
import axios from 'axios'

const { contact, method, amount, setAmount } = usePaymentStore()
const router = useRouter()
const assets = useAssets()

let isSubmitingPayment = ref(false)

let localAmount = ref(amount)
watch(localAmount, (val) => {
  setAmount(val)
})

const submitPayment = async () => {
  isSubmitingPayment.value = true

  await axios.post('/api/make-payment')
  router.push({ name: 'PaymentCompleted' })
}
</script>
