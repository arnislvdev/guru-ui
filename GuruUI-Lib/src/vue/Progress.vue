<template>
  <div :class="containerClasses">
    <div v-if="showLabel || showValue" :class="infoClasses">
      <div v-if="showLabel" :class="labelClasses">{{ label || 'Progress' }}</div>
      <div v-if="showValue" :class="valueClasses">{{ value }}/{{ max }}</div>
    </div>
    <div :class="trackClasses">
      <div
        :class="barClasses"
        :style="barStyle"
        v-bind="accessibilityProps as any"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ProgressCore, type ProgressCoreOptions } from '../core/ProgressCore'

export interface ProgressProps extends ProgressCoreOptions {
  value?: number
  max?: number
  label?: string
}

const props = withDefaults(defineProps<ProgressProps>(), {
  size: 'md',
  variant: 'default',
  showLabel: true,
  showValue: false,
  animated: false,
  striped: false,
  rounded: true,
  height: 'normal',
  value: 0,
  max: 100
})

// Computed values
const progressOptions = computed(() => ({
  size: props.size,
  variant: props.variant,
  showLabel: props.showLabel,
  showValue: props.showValue,
  animated: props.animated,
  striped: props.striped,
  rounded: props.rounded,
  height: props.height
}))

const percentage = computed(() => ProgressCore.calculatePercentage(props.value, props.max))
const progressColor = computed(() => ProgressCore.getProgressColor(percentage.value))

// Computed classes
const containerClasses = computed(() => ProgressCore.getContainerClasses(progressOptions.value))
const infoClasses = computed(() => ProgressCore.getInfoClasses(progressOptions.value))
const labelClasses = computed(() => ProgressCore.getLabelClasses(progressOptions.value))
const valueClasses = computed(() => ProgressCore.getValueClasses(progressOptions.value))
const trackClasses = computed(() => ProgressCore.getTrackClasses(progressOptions.value))
const barClasses = computed(() => ProgressCore.getBarClasses(progressOptions.value))

// Bar style
const barStyle = computed(() => ({
  width: `${percentage.value}%`
}))

// Accessibility props
const accessibilityProps = computed(() => ProgressCore.getAccessibilityProps(progressOptions.value))
</script>
