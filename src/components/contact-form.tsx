// src/components/contact-form.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm as useFormspree } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Send, ShieldCheck, Sparkles, Brain, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { registerContactInSER } from '@/lib/backend-api';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
  fullName: z.string().min(3, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Please tell me a bit more" }),
  acceptance: z.boolean().refine(val => val === true, {
    message: "You must accept the terms"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const INSPIRATIONAL_QUOTES = [
  { text: "The future belongs to those who learn more skills and combine them in creative ways.", icon: Brain },
  { text: "Education is the most powerful weapon which you can use to change the world.", icon: GraduationCap },
  { text: "Technology is best when it brings people together.", icon: Sparkles },
  { text: "AI won't replace humans, but humans using AI will replace those who don't.", icon: ShieldCheck }
];

export default function ContactForm({ dict }: { dict: any }) {
  // Use the alias to avoid collision with react-hook-form's useForm
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
    setCurrentStep('email');
    
    // Step 1: Send to Formspree
    await handleSubmitFormspree(values);

    // Step 2: Sync with SER Backend (Resilient)
    setCurrentStep('sync');
    await registerContactInSER({
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      message: values.message,
      source: 'Web Personal Efraín',
      sourceDomain: typeof window !== 'undefined' ? window.location.hostname : 'efraingb.org',
      metadata: {
        page: typeof window !== 'undefined' ? window.location.pathname : '/',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
      }
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
          <CheckCircle2 className="w-12 h-12 text-green-500 animate-in zoom-in duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{dict.successTitle || "Message Received"}</h3>
        <p className="text-muted-foreground mb-8">{dict.successDescription || "Thank you. I will get back to you shortly."}</p>
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
              {currentStep === 'email' ? (dict.step1Label || "Notifying the team...") : (dict.step2Label || "Syncing with SER Platform...")}
            </h4>
            
            <div className="mt-8 max-w-xs mx-auto">
               <motion.div 
                 key={quoteIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-card/50 p-6 sm:p-8 rounded-3xl border border-border shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dict.labelName || "Full Name"}</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="rounded-xl border-accent/10 focus:border-accent" />
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
                  <FormLabel>{dict.labelEmail || "Email"}</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="rounded-xl border-accent/10 focus:border-accent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.labelPhone || "Phone (Optional)"}</FormLabel>
                <FormControl>
                  <Input placeholder="+506 8888 8888" {...field} className="rounded-xl border-accent/10 focus:border-accent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.labelMessage || "Tell me about your project"}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={dict.placeholderMessage || "Hello, I would like to discuss..."} 
                    className="min-h-[120px] rounded-xl border-accent/10 focus:border-accent resize-none" 
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
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-accent/5 p-4 bg-muted/5">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs font-normal text-muted-foreground">
                    {dict.privacyNote || "I agree that my data will be processed to manage this contact and synchronized with my educational platforms if necessary."}
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full rounded-xl shadow-lg hover:shadow-accent/20 transition-all font-bold tracking-wide"
            disabled={currentStep !== 'idle'}
          >
            {dict.submitButton || "Send Strategic Inquiry"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
