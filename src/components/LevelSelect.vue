<template>
  <ion-select
    :value="modelValue"
    interface="action-sheet"
    :interface-options="{ header: 'Select a log level' }"
    :label="label"
    @ion-change="$emit('update:modelValue', $event.detail.value)"
  >
    <ion-select-option
      v-for="name in levelNames"
      :key="name"
      :value="name"
    >
      {{ name }}
    </ion-select-option>
  </ion-select>
</template>

<script setup lang="ts">
import { LogLevel } from '@aparajita/capacitor-logger'
import { IonSelect, IonSelectOption } from '@ionic/vue'

const props = defineProps<{
  label: string
  modelValue: string
  includeSilent: boolean
}>()

const levelNames = Object.values(LogLevel).filter(
  (level) => typeof level === 'string',
)

if (!props.includeSilent) {
  levelNames.shift()
}

defineEmits(['update:modelValue'])
</script>
