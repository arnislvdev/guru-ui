<template>
  <div
    :class="avatarClasses"
    v-bind="accessibilityProps"
    :aria-label="name"
  >
    <img 
      v-if="src" 
      :src="src" 
      :alt="name" 
      :class="imageClasses"
    />
    <div v-else :class="fallbackClasses">
      <span class="text-xs font-semibold">{{ fallback || initials || '?' }}</span>
    </div>
    <span v-if="status" :class="statusClasses" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { AvatarCore, type AvatarCoreOptions } from '../core/AvatarCore'

export interface AvatarProps extends AvatarCoreOptions {
  src?: string
  name?: string
  fallback?: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  shape: 'circle',
  status: 'online',
  ring: false,
  ringColor: 'accent'
})

// Computed values
const avatarOptions = computed(() => ({
  size: props.size,
  shape: props.shape,
  status: props.status,
  ring: props.ring,
  ringColor: props.ringColor
}))

const initials = computed(() => {
  if (!props.name) return ''
  return props.name
    .split(' ')
    .filter(Boolean)
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

// Computed classes
const avatarClasses = computed(() => AvatarCore.getClasses(avatarOptions.value))
const imageClasses = computed(() => AvatarCore.getImageClasses(avatarOptions.value))
const fallbackClasses = computed(() => AvatarCore.getFallbackClasses(avatarOptions.value))
const statusClasses = computed(() => AvatarCore.getStatusClasses(avatarOptions.value))

// Accessibility props
const accessibilityProps = computed(() => AvatarCore.getAccessibilityProps(avatarOptions.value))
</script>
