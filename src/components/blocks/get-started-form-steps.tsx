'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import type { FormData } from '@/lib/webhook'

interface FormStepProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  onValidationChange?: (isValid: boolean) => void
}

export function BasicInfoStep({ formData, setFormData, onValidationChange }: FormStepProps) {
  const validateFields = () => {
    const isValid = formData.name.trim() !== '' && 
                   formData.companyName.trim() !== '' && 
                   formData.email.trim() !== '' &&
                   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    onValidationChange?.(isValid)
    return isValid
  }

  React.useEffect(() => {
    validateFields()
  }, [formData.name, formData.companyName, formData.email])

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-1">
            Your Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData(prev => ({ ...prev, name: e.target.value }))
            }}
            placeholder="John Doe"
            required
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-2">
          <Label htmlFor="companyName" className="flex items-center gap-1">
            Company Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData(prev => ({ ...prev, companyName: e.target.value }))
            }}
            placeholder="Acme Inc."
            required
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-1">
            Work Email
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData(prev => ({ ...prev, email: e.target.value }))
            }}
            placeholder="john@acme.com"
            required
          />
        </div>
      </motion.div>
    </div>
  )
}

export function IndustryStep({ formData, setFormData, onValidationChange }: FormStepProps) {
  const industries = [
    'Software & Technology',
    'Professional Services',
    'Financial Services',
    'Healthcare & Medical',
    'Manufacturing',
    'Retail & E-commerce',
    'Real Estate',
    'Construction',
    'Education & Training',
    'Marketing & Advertising',
    'Consulting',
    'Insurance',
    'Telecommunications',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Agriculture',
    'Hospitality & Tourism',
    'Media & Entertainment',
    'Automotive',
    'Aerospace & Defense',
    'Biotechnology',
    'Pharmaceuticals',
    'Environmental Services',
    'Government & Public Sector',
    'Non-Profit',
    'Legal Services',
    'Architecture & Design',
    'Food & Beverage',
    'Sports & Recreation',
    'Other'
  ]

  const crmSystems = [
    'None',
    'Salesforce',
    'HubSpot',
    'Microsoft Dynamics',
    'Pipedrive',
    'GoHighLevel',
    'Other'
  ]

  const validateFields = () => {
    const isValid = formData.industry.trim() !== '' && 
                   formData.crm.trim() !== '' &&
                   (formData.crm !== 'Other' || formData.otherCrm.trim() !== '')
    onValidationChange?.(isValid)
    return isValid
  }

  React.useEffect(() => {
    validateFields()
  }, [formData.industry, formData.crm, formData.otherCrm])

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="space-y-2">
          <Label htmlFor="industry" className="flex items-center gap-1">
            Industry
            <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.industry}
            onValueChange={(value: string) => 
              setFormData(prev => ({ ...prev, industry: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-2">
          <Label htmlFor="crm" className="flex items-center gap-1">
            CRM System
            <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.crm}
            onValueChange={(value: string) => 
              setFormData(prev => ({ ...prev, crm: value, otherCrm: value !== 'Other' ? '' : prev.otherCrm }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your CRM" />
            </SelectTrigger>
            <SelectContent>
              {crmSystems.map((crm) => (
                <SelectItem key={crm} value={crm}>
                  {crm}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {formData.crm === 'Other' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              <Label htmlFor="otherCrm" className="flex items-center gap-1">
                Please specify your CRM
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="otherCrm"
                value={formData.otherCrm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setFormData(prev => ({ ...prev, otherCrm: e.target.value }))
                }
                placeholder="Enter your CRM name"
                className="mt-2"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
} 