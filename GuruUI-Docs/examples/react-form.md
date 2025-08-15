# React Contact Form Example

A complete contact form built with Guru UI components, including validation, loading states, and error handling.

## Use Case

Perfect for contact pages, support forms, or any scenario where you need user input with validation. Shows how to handle form state, validation, and user feedback.

## Live Example

```tsx
import React, { useState } from 'react'
import { 
  Button, 
  Input, 
  Textarea, 
  Card, 
  Alert, 
  Checkbox,
  Badge
} from 'guru-ui'
import 'guru-ui/style.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  newsletter: boolean
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked
      : e.target.value

    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate random success/failure for demo
      if (Math.random() > 0.3) {
        setSubmitStatus('success')
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          newsletter: false
        })
      } else {
        throw new Error('Server error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[color:var(--guru-heading)] mb-2">
            Contact Us
          </h2>
          <p className="text-[color:var(--guru-body)]">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <Alert variant="success" className="mb-6">
            Thank you for your message! We'll get back to you within 24 hours.
          </Alert>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <Alert variant="error" className="mb-6">
            Something went wrong. Please try again or contact us directly.
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[color:var(--guru-heading)] mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange('name')}
                placeholder="John Doe"
                error={!!errors.name}
                helperText={errors.name}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[color:var(--guru-heading)] mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                placeholder="john@example.com"
                error={!!errors.email}
                helperText={errors.email}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[color:var(--guru-heading)] mb-2">
              Subject *
            </label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange('subject')}
              placeholder="How can we help?"
              error={!!errors.subject}
              helperText={errors.subject}
              disabled={isSubmitting}
            />
          </div>

          {/* Message */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-[color:var(--guru-heading)]">
                Message *
              </label>
              <Badge variant={formData.message.length >= 10 ? 'success' : 'secondary'}>
                {formData.message.length}/500
              </Badge>
            </div>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange('message')}
              placeholder="Tell us more about your inquiry..."
              rows={5}
              maxLength={500}
              error={!!errors.message}
              helperText={errors.message || 'Minimum 10 characters required'}
              disabled={isSubmitting}
            />
          </div>

          {/* Newsletter Checkbox */}
          <div>
            <Checkbox
              checked={formData.newsletter}
              onChange={handleChange('newsletter')}
              disabled={isSubmitting}
            >
              <span className="text-sm text-[color:var(--guru-body)]">
                Subscribe to our newsletter for updates and tips
              </span>
            </Checkbox>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: '',
                  newsletter: false
                })
                setErrors({})
                setSubmitStatus('idle')
              }}
              disabled={isSubmitting}
            >
              Clear
            </Button>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 pt-6 border-t border-[color:var(--guru-accent)]/20">
          <p className="text-sm text-[color:var(--guru-body)] text-center">
            You can also reach us directly at{' '}
            <a 
              href="mailto:support@example.com" 
              className="text-[color:var(--guru-accent)] hover:underline"
            >
              support@example.com
            </a>{' '}
            or call us at{' '}
            <a 
              href="tel:+1234567890" 
              className="text-[color:var(--guru-accent)] hover:underline"
            >
              (123) 456-7890
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default ContactForm
```

## Key Features Demonstrated

### Form State Management
- Controlled inputs with TypeScript interfaces
- Form validation with error states
- Loading states during submission
- Success and error feedback

### User Experience
- Real-time validation feedback
- Character counting for textarea
- Clear button to reset form
- Accessible labels and descriptions

### Responsive Design
- Grid layout that stacks on mobile
- Consistent spacing and typography
- Mobile-friendly touch targets

### Error Handling
- Field-level validation
- Clear error messages
- Visual error indicators
- Graceful failure handling

## Usage Tips

### Validation Patterns

```tsx
// Email validation
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Required field validation
const isRequired = (value: string) => {
  return value.trim().length > 0
}

// Minimum length validation
const hasMinLength = (value: string, min: number) => {
  return value.length >= min
}
```

### Custom Validation Hook

```tsx
import { useState, useCallback } from 'react'

interface ValidationRule<T> {
  field: keyof T
  validator: (value: any) => string | undefined
}

export function useFormValidation<T>(rules: ValidationRule<T>[]) {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const validate = useCallback((data: T): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {}

    rules.forEach(rule => {
      const error = rule.validator(data[rule.field])
      if (error) {
        newErrors[rule.field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [rules])

  const clearError = useCallback((field: keyof T) => {
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }, [])

  return { errors, validate, clearError, setErrors }
}
```

### API Integration

```tsx
// API service
const api = {
  submitContact: async (data: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    return response.json()
  }
}

// In component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  if (!validate(formData)) return

  setIsSubmitting(true)
  
  try {
    await api.submitContact(formData)
    setSubmitStatus('success')
    resetForm()
  } catch (error) {
    setSubmitStatus('error')
    console.error('Submission error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

## Testing Example

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('validates required fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Test subject')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument()
    })
  })
})
```

## Accessibility Features

- Proper form labels and associations
- Error announcements for screen readers
- Keyboard navigation support
- Focus management during loading states
- ARIA attributes for form validation

## Related Examples

- [Form Validation Patterns](./form-validation.md)
- [Multi-step Forms](./multi-step-forms.md)
- [Vue Contact Form](./vue-form.md)
- [API Integration](./rest-apis.md)
