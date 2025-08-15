<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        :class="modalClasses"
        v-bind="accessibilityProps as any"
      >
        <div 
          v-if="backdrop" 
          :class="backdropClasses" 
          @click="handleBackdropClick"
        />
        <div ref="containerRef" :class="contentClasses">
          <div v-if="title" :class="headerClasses">
            <h2 :id="titleId" class="text-lg font-semibold text-[color:var(--guru-heading,#ffffff)]">
              {{ title }}
            </h2>
            <button
              v-if="showCloseButton"
              :class="closeButtonClasses"
              @click="handleClose"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
          <div :class="bodyClasses">
            <slot />
          </div>
          <div :class="footerClasses">
            <slot name="footer">
              <button
                class="inline-flex items-center justify-center rounded-[var(--guru-radius,0.5rem)] bg-[color:var(--guru-accent,#ffffff)] px-4 py-2 text-sm font-medium text-[color:var(--guru-on-accent,#0b0b0b)] hover:bg-[color:var(--guru-accent-hover,#e5e5e5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--guru-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--guru-background,#121212)]"
                @click="handleClose"
              >
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { ModalCore, type ModalCoreOptions } from '../core/ModalCore'

export interface ModalProps extends ModalCoreOptions {
  open: boolean
  title?: string
}

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  centered: true,
  closeOnOverlayClick: true,
  closeOnEscape: true,
  showCloseButton: true,
  backdrop: true,
  animation: 'fade'
})

const emit = defineEmits<{
  close: []
  'update:open': [value: boolean]
}>()

const containerRef = ref<HTMLElement>()
const titleId = `modal-title-${Math.random().toString(36).substr(2, 9)}`

// Computed classes
const modalOptions = computed(() => ({
  size: props.size,
  centered: props.centered,
  animation: props.animation
}))

const modalClasses = computed(() => ModalCore.getClasses(modalOptions.value))
const backdropClasses = computed(() => ModalCore.getBackdropClasses(modalOptions.value))
const contentClasses = computed(() => ModalCore.getContentClasses(modalOptions.value))
const headerClasses = computed(() => ModalCore.getHeaderClasses())
const bodyClasses = computed(() => ModalCore.getBodyClasses())
const footerClasses = computed(() => ModalCore.getFooterClasses())
const closeButtonClasses = computed(() => ModalCore.getCloseButtonClasses())

// Accessibility props
const accessibilityProps = computed(() => ModalCore.getAccessibilityProps(modalOptions.value))

// Event handlers
const handleClose = () => {
  emit('close')
  emit('update:open', false)
}

const handleBackdropClick = () => {
  if (props.closeOnOverlayClick) {
    handleClose()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (props.closeOnEscape && e.key === 'Escape') {
    handleClose()
  }
}

// Focus management
const focusableElements = computed(() => {
  if (!containerRef.value) return []
  return Array.from(
    containerRef.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  )
})

const handleTab = (e: KeyboardEvent) => {
  if (e.key !== 'Tab') return
  
  const focusable = focusableElements.value
  if (focusable.length === 0) return
  
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  
  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }
}

// Lifecycle
onMounted(() => {
  if (props.open) {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keydown', handleTab)
    
    nextTick(() => {
      const focusable = focusableElements.value
      if (focusable.length > 0) {
        focusable[0]?.focus()
      }
    })
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('keydown', handleTab)
})

// Watch for open changes
watch(() => props.open, (newOpen) => {
  if (newOpen) {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keydown', handleTab)
    
    nextTick(() => {
      const focusable = focusableElements.value
      if (focusable.length > 0) {
        focusable[0]?.focus()
      }
    })
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('keydown', handleTab)
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .content,
.modal-leave-active .content {
  transition: transform 0.2s ease;
}

.modal-enter-from .content,
.modal-leave-to .content {
  transform: scale(0.95);
}
</style>
