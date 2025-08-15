<template>
  <div :class="containerClasses">
    <button
      ref="buttonRef"
      type="button"
      :disabled="disabled || loading"
      :class="toggleClasses"
      v-bind="accessibilityProps as any"
      @click="handleClick"
    >
      <span
        :class="thumbClasses"
        :style="thumbStyle"
      />
      <span v-if="loading" :class="loadingClasses">
        ⏳
      </span>
    </button>
    <div v-if="label || description" class="ml-3">
      <div v-if="label" :class="labelClasses">{{ label }}</div>
      <div v-if="description" :class="descriptionClasses">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ToggleCore, type ToggleCoreOptions } from '../core/ToggleCore'

export interface ToggleProps extends ToggleCoreOptions {
  modelValue?: boolean
  label?: string
  description?: string
}

const props = withDefaults(defineProps<ToggleProps>(), {
  size: 'md',
  variant: 'default',
  disabled: false,
  required: false,
  loading: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

const buttonRef = ref<HTMLButtonElement>()

// Computed classes
const toggleOptions = computed(() => ({
  size: props.size,
  variant: props.variant,
  disabled: props.disabled,
  required: props.required,
  label: props.label || '',
  description: props.description || '',
  loading: props.loading
}))

const containerClasses = computed(() => ToggleCore.getContainerClasses())
const toggleClasses = computed(() => [
  ToggleCore.getToggleClasses(toggleOptions.value),
  props.modelValue && ToggleCore.getToggleActiveClasses(toggleOptions.value)
].filter(Boolean).join(' '))
const thumbClasses = computed(() => [
  ToggleCore.getThumbClasses(toggleOptions.value),
  'absolute left-0.5 top-1/2 -translate-y-1/2 transform'
].join(' '))
const loadingClasses = computed(() => 'absolute inset-0 flex items-center justify-center ' + ToggleCore.getLoadingClasses())
const labelClasses = computed(() => ToggleCore.getLabelClasses(toggleOptions.value))
const descriptionClasses = computed(() => ToggleCore.getDescriptionClasses(toggleOptions.value))

// Thumb position
const thumbStyle = computed(() => ({
  transform: props.modelValue 
    ? `translateX(${ToggleCore.getThumbActiveClasses(toggleOptions.value)})` 
    : 'translateX(0.125rem)'
}))

// Accessibility props
const accessibilityProps = computed(() => ({
  ...ToggleCore.getAccessibilityProps(toggleOptions.value),
  'aria-checked': props.modelValue
}))

// Event handlers
const handleClick = () => {
  if (props.disabled || props.loading) return
  
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>
