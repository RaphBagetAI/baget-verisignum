'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createRetainer as createPaymentLink } from '@/app/actions'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useEffect, useRef } from 'react'

const initialState = {
  success: false,
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generating...' : 'Generate Link'}
    </Button>
  )
}

export function GenerateLinkForm() {
  const [state, formAction] = useFormState(createPaymentLink, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="bg-card p-6 sm:p-8 rounded-lg border">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Generate New Link</h2>
      <form ref={formRef} action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="productName">Product Name</Label>
          <Input id="productName" name="productName" type="text" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Monthly Amount ($)</Label>
          <Input id="amount" name="amount" type="number" step="0.01" required />
        </div>
        <SubmitButton />
        {state.message && (
           <p className={`text-sm ${state.success ? 'text-green-600' : 'text-destructive'}`}>
             {state.message}
           </p>
        )}
      </form>
    </div>
  )
}
