<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <slot name="icon-left" />
    <span v-if="$slots.default" class="button-content">
      <slot />
    </span>
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonCore, type ButtonCoreOptions } from '../core/ButtonCore'

export interface ButtonProps extends ButtonCoreOptions {
  // Vue-specific props can be added here
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary', 
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false,
  rounded: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const buttonClasses = computed(() => {
  return ButtonCore.getClasses(props)
})

const accessibilityProps = computed(() => {
  return ButtonCore.getAccessibilityProps(props)
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped>
.button-content {
  @apply flex items-center justify-center;
}

/* Loading state styles */
button:disabled {
  @apply cursor-not-allowed;
}

/* Focus ring offset for dark backgrounds */
.focus\:ring-offset-2:focus {
  --tw-ring-offset-color: var(--guru-background, #121212);
}
</style>
