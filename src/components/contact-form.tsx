// src/components/contact-form.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm as useFormspree } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Send, ShieldCheck, Sparkles, Brain, GraduationCap, Building2, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { registerContactInSER } from '@/lib/backend-api';

const contactFormSchema = z.object({
  fullName: z.string().min(3, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Please tell me a bit more" }),
  company: z.string().optional(),
  budget: z.string().optional(),
  gotcha: z.string().optional(), // Honeypot
  acceptance: z.boolean().refine(val => val === true, {
    message: "You must accept the terms"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const INSPIRATIONAL_QUOTES = [
  { text: "The future belongs to those who learn more skills and combine them in creative ways.", icon: Brain },
  { text: "AI won't replace humans, but humans using AI will replace those who don't.", icon: ShieldCheck }
];

export default function ContactForm({ dict, isCorporate = false }: { dict: any; isCorporate?: boolean }) {
  const [state, handleSubmitFormspree] = useFormspree("mgojeqgo");
  const [currentStep, setCurrentStep] = useState<'idle' | 'email' | 'sync' | 'success'>('idle');
  const [quoteIndex, setQuoteIndex] = useState(0);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      company: '',
      budget: '',
      gotcha: '',
      acceptance: false
    }
  });

  useEffect(() => {
    if (currentStep === 'email' || currentStep === 'sync') {
      const interval = setInterval(() => {
        setQuoteIndex((prev) => (prev + 1) % INSPIRATIONAL_QUOTES.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot validation
    if (values.gotcha && values.gotcha.length > 0) {
      console.warn("Spam bot detected via honeypot.");
      setCurrentStep('success'); // Silent fail
      return;
    }

    setCurrentStep('email');
    
    // Step 1: Send to Formspree
    await handleSubmitFormspree(values);

    // Step 2: Sync with SER Backend
    setCurrentStep('sync');
    await registerContactInSER({
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      message: `${isCorporate ? '[CORPORATE INQUIRY] ' : ''} Company: ${values.company || 'N/A'} | Budget: ${values.budget || 'N/A'} | Msg: ${values.message}`,
      source: isCorporate ? 'Solutions Hub (Corporate)' : 'Web Personal Efraín',
      sourceDomain: typeof window !== 'undefined' ? window.location.hostname : 'efraingb.org',
    });

    setCurrentStep('success');
  };

  const QuoteIcon = INSPIRATIONAL_QUOTES[quoteIndex].icon;

  if (currentStep === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-card rounded-3xl border border-accent/20 shadow-2xl"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{dict.successTitle || "Briefing Requested"}</h3>
        <p className="text-muted-foreground mb-8">{dict.successDescription || "Your data is being verified under Zero-Trust protocols. I will respond within 24 hours."}</p>
        <Button onClick={() => { setCurrentStep('idle'); form.reset(); }} variant="outline">
          {dict.sendAnother || "Send Another"}
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {(currentStep === 'email' || currentStep === 'sync') && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md rounded-3xl p-8 text-center"
          >
            <Loader2 className="w-12 h-12 text-accent animate-spin mb-6" />
            <h4 className="text-xl font-semibold text-primary mb-2">
              {currentStep === 'email' ? "Authenticating Request..." : "Securing Data Transfer..."}
            </h4>
            
            <div className="mt-8 max-w-xs mx-auto">
               <motion.div 
                 key={quoteIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex flex-col items-center"
               >
                 <QuoteIcon className="w-6 h-6 text-accent/40 mb-3" />
                 <p className="text-sm italic text-muted-foreground leading-relaxed">
                   "{INSPIRATIONAL_QUOTES[quoteIndex].text}"
                 </p>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-card/50 p-6 sm:p-8 rounded-3xl border border-border shadow-xl backdrop-blur-sm">
          {/* Honeypot field (hidden from humans) */}
          <div className="hidden" aria-hidden="true">
            <FormField
              control={form.control}
              name="gotcha"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input tabIndex={-1} autoComplete="off" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase font-bold text-muted-foreground">{dict.labelName || "Full Name"}</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase font-bold text-muted-foreground">{dict.labelEmail || "Corporate Email"}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {isCorporate && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-bold text-muted-foreground">Organization</FormLabel>
                    <FormControl>
                      <div className="relative">
                         <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                         <Input placeholder="Acme Corp" {...field} className="pl-10 rounded-xl" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-bold text-muted-foreground">Opex/Capex Range</FormLabel>
                    <FormControl>
                      <div className="relative">
                         <Wallet className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                         <Input placeholder="Strategic Range" {...field} className="pl-10 rounded-xl" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase font-bold text-muted-foreground">{dict.labelMessage || "Project Vision"}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={dict.placeholderMessage || "Brief description of architectural gaps..."} 
                    className="min-h-[100px] rounded-xl resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptance"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-accent/5 p-3 bg-muted/5">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-[10px] font-normal text-muted-foreground leading-tight">
                    {dict.privacyNote || "I agree that my corporate data will be processed to manage this contact and synchronized under Zero-Trust protocols."}
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full rounded-xl shadow-lg font-bold tracking-wide transition-all active:scale-[0.98]"
            disabled={currentStep !== 'idle'}
          >
            {dict.submitButton || "Unlock Strategy"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
