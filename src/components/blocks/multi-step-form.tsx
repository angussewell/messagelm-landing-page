'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BasicInfoStep, IndustryStep } from '@/components/blocks/get-started-form-steps'
import { CalendlyWidget } from '@/components/blocks/calendly-widget'
import { submitToWebhook, FormData, FormType } from '@/lib/webhook'

interface FormConfig {
  title: string
  submitButtonText: string
  formType: FormType
  header: {
    title: string
    description: string
  }
  calendlyHeader: {
    title: string
    description: string
  }
  steps: {
    basics: {
      title: string
      description: string
    }
    industry: {
      title: string
      description: string
    }
  }
  calendlyUrl: string
}

interface MultiStepFormProps {
  config: FormConfig
}

export function MultiStepForm({ config }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    industry: '',
    crm: '',
    otherCrm: '',
    formType: config.formType
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  const formSteps = [
    {
      id: 'basics',
      title: config.steps.basics.title,
      description: config.steps.basics.description,
      component: BasicInfoStep
    },
    {
      id: 'industry',
      title: config.steps.industry.title,
      description: config.steps.industry.description,
      component: IndustryStep
    }
  ] as const

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      if (isCurrentStepValid) {
        setCurrentStep(prev => prev + 1)
        setIsCurrentStepValid(false) // Reset validation for next step
      }
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      // When going back, we'll validate the previous step's data
      validateStep(currentStep - 1)
    }
  }

  const validateStep = (stepIndex: number) => {
    const step = formSteps[stepIndex].id
    let isValid = false

    switch (step) {
      case 'basics':
        isValid = formData.name.trim() !== '' && 
                 formData.companyName.trim() !== '' && 
                 formData.email.trim() !== '' &&
                 /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        break
      case 'industry':
        isValid = formData.industry.trim() !== '' && 
                 formData.crm.trim() !== '' &&
                 (formData.crm !== 'Other' || formData.otherCrm.trim() !== '')
        break
    }

    setIsCurrentStepValid(isValid)
    return isValid
  }

  const handleSubmit = async () => {
    if (!isCurrentStepValid) return

    setIsSubmitting(true)
    try {
      await submitToWebhook(formData)
      
      // Show Calendly after a brief delay for the loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      setShowCalendly(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // TODO: Add error handling UI if needed
      setIsSubmitting(false)
    }
  }

  const isLastStep = currentStep === formSteps.length - 1
  const CurrentStepComponent = formSteps[currentStep].component

  return (
    <main className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4">
      <div className={cn(
        "mx-auto",
        showCalendly ? "max-w-6xl" : "max-w-2xl"
      )}>
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-3 sm:mb-4 bg-gradient-to-br from-brand via-brand-purple to-brand-blue bg-clip-text text-transparent">
              {showCalendly ? config.calendlyHeader.title : config.header.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {showCalendly ? config.calendlyHeader.description : config.header.description}
            </p>
          </motion.div>
        </div>

        {/* Progress Steps */}
        {!showCalendly && (
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between relative">
              {formSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className="flex flex-col items-center relative z-10"
                >
                  <div 
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                      index <= currentStep 
                        ? "border-brand bg-brand text-background"
                        : "border-border bg-background text-foreground/40"
                    )}
                  >
                    {index + 1}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs sm:text-sm font-medium">{step.title}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">{step.description}</div>
                  </div>
                </div>
              ))}
              {/* Progress Bar */}
              <div className="absolute top-4 sm:top-5 left-0 right-0 h-[2px] bg-border -z-10">
                <motion.div 
                  className="h-full bg-brand origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: currentStep / (formSteps.length - 1) }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Form Content */}
        {showCalendly ? (
          <CalendlyWidget url={config.calendlyUrl} />
        ) : (
          <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <CurrentStepComponent 
                  formData={formData} 
                  setFormData={setFormData}
                  onValidationChange={setIsCurrentStepValid}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                  "h-9 sm:h-10 px-3 sm:px-4 py-2",
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={isSubmitting || !isCurrentStepValid}
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                  "h-9 sm:h-10 px-3 sm:px-4 py-2",
                  "bg-brand text-background hover:bg-brand/90",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                {isLastStep ? (isSubmitting ? 'Submitting...' : config.submitButtonText) : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 