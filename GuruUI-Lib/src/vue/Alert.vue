<template>
  <div 
    :class="alertClasses" 
    v-bind="accessibilityProps as any"
  >
    <span v-if="icon" :class="iconClasses">
      {{ alertIcons[variant as keyof typeof alertIcons] }}
    </span>
    <div :class="contentClasses">
      <div v-if="title" :class="titleClasses">{{ title }}</div>
      <div :class="descriptionClasses">
        <slot />
      </div>
    </div>
    <button
      v-if="dismissible && onDismiss"
      :class="dismissButtonClasses"
      @click="handleDismiss"
      aria-label="Dismiss alert"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { AlertCore, type AlertCoreOptions } from '../core/AlertCore'

export interface AlertProps extends AlertCoreOptions {
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  size: 'md',
  dismissible: false,
  icon: true,
  border: false,
  rounded: false
})

const emit = defineEmits<{
  dismiss: []
}>()

// Icon components for each variant
const alertIcons = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌'
}

// Computed classes
const alertOptions = computed(() => ({
  variant: props.variant,
  size: props.size,
  dismissible: props.dismissible,
  icon: props.icon,
  border: props.border,
  rounded: props.rounded
}))

const alertClasses = computed(() => AlertCore.getClasses(alertOptions.value))
const iconClasses = computed(() => AlertCore.getIconClasses(alertOptions.value))
const contentClasses = computed(() => AlertCore.getContentClasses())
const titleClasses = computed(() => AlertCore.getTitleClasses())
const descriptionClasses = computed(() => AlertCore.getDescriptionClasses())
const dismissButtonClasses = computed(() => AlertCore.getDismissButtonClasses(alertOptions.value))

// Accessibility props
const accessibilityProps = computed(() => AlertCore.getAccessibilityProps(alertOptions.value))

// Event handlers
const handleDismiss = () => {
  emit('dismiss')
  props.onDismiss?.()
}
</script>
