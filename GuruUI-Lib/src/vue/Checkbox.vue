<template>
  <div :class="containerClasses">
    <label class="group inline-flex items-start select-none">
      <span :class="checkboxClasses">
        <input
          ref="inputRef"
          type="checkbox"
          :disabled="disabled"
          :checked="modelValue"
          :indeterminate="indeterminate"
          :required="required"
          :class="inputClasses" 
          v-bind="accessibilityProps as any"
          @change="handleChange"
          @click="handleClick"
        />
        <svg
          :class="iconClasses"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <path d="M5 13l4 4L19 7" class="text-[color:var(--guru-on-accent,#0b0b0b)]" />
        </svg>
      </span>
      <span v-if="label || description" class="leading-snug ml-3">
        <span v-if="label" :class="labelClasses">{{ label }}</span>
        <span v-if="description" :class="descriptionClasses">{{ description }}</span>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { CheckboxCore, type CheckboxCoreOptions } from '../core/CheckboxCore'

export interface CheckboxProps extends CheckboxCoreOptions {
  modelValue?: boolean
  label?: string
  description?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'md',
  variant: 'default',
  disabled: false,
  indeterminate: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const inputRef = ref<HTMLInputElement>()

// Computed classes
const checkboxOptions = computed(() => ({
  size: props.size,
  variant: props.variant,
  disabled: props.disabled,
  indeterminate: props.indeterminate,
  required: props.required,
  label: props.label || '',
  description: props.description || ''
}))

const containerClasses = computed(() => CheckboxCore.getContainerClasses())
const checkboxClasses = computed(() => `relative inline-flex flex-none ${CheckboxCore.getCheckboxClasses(checkboxOptions.value)}`)
const inputClasses = computed(() => `peer absolute inset-0 cursor-pointer appearance-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${CheckboxCore.getCheckboxClasses(checkboxOptions.value)}`)
const iconClasses = computed(() => `pointer-events-none absolute inset-0 m-auto translate-y-[1px] opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ${CheckboxCore.getIconClasses(checkboxOptions.value)}`)
const labelClasses = computed(() => CheckboxCore.getLabelClasses(checkboxOptions.value))
const descriptionClasses = computed(() => CheckboxCore.getDescriptionClasses(checkboxOptions.value))

// Accessibility props
const accessibilityProps = computed(() => CheckboxCore.getAccessibilityProps(checkboxOptions.value))

// Event handlers
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', target.checked)
}

const handleClick = (event: Event) => {
  if (props.disabled) {
    event.preventDefault()
  }
}

// Watch for indeterminate changes
watch(() => props.indeterminate, (newValue) => {
  if (inputRef.value) {
    inputRef.value.indeterminate = newValue
  }
}, { immediate: true })
</script>
