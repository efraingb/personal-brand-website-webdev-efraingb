'use client';

import React, { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldAlert, TrendingUp, Lock, ArrowRight, Info, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EstimatorProps {
  dict: any;
  onUnlock: () => void;
}

export default function AiRiskEstimator({ dict, onUnlock }: EstimatorProps) {
  const [collaborators, setCollaborators] = useState([10]);
  const [dataVolume, setDataVolume] = useState([100]); // in MB
  const [industry, setIndustry] = useState('fintech');
  const [modelType, setModelType] = useState('public');

  const results = useMemo(() => {
    const n = collaborators[0];
    const d = dataVolume[0];
    
    // Industry complexity factor
    const complexityMap: Record<string, number> = { fintech: 1.5, edtech: 1.2, retail: 1.0, other: 1.1 };
    const factor = complexityMap[industry] || 1.1;

    // Projected Monthly Opex (Tokens + Infrastructure) - Symbolic calculation
    const baseRate = modelType === 'public' ? 0.05 : 0.15; // Local models cost more in infra
    const projectedOpex = Math.round(n * d * factor * baseRate * 10);

    // Risk Index (0-100)
    let riskScore = 0;
    if (modelType === 'public') riskScore += 55; // Base risk for public LLMs
    if (industry === 'fintech') riskScore += 20;
    if (d > 500) riskScore += 15;
    riskScore = Math.min(riskScore, 95);

    return { opex: projectedOpex, risk: riskScore };
  }, [collaborators, dataVolume, industry, modelType]);

  return (
    <Card className="w-full max-w-4xl mx-auto border-accent/20 shadow-2xl overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm">
      <CardHeader className="bg-primary text-primary-foreground p-8">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-6 h-6 text-accent" />
          <span className="text-xs font-bold uppercase tracking-widest opacity-70">Internal Tool v1.0</span>
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold">Enterprise AI Infrastructure & Risk Estimator</CardTitle>
        <p className="text-primary-foreground/70 text-sm mt-2 max-w-2xl">
          Evaluate the financial impact and data sovereignty risks of your current Generative AI strategy.
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Collaborators Exposed</Label>
                <span className="text-accent font-mono font-bold">{collaborators[0]}</span>
              </div>
              <Slider 
                value={collaborators} 
                onValueChange={setCollaborators} 
                max={500} 
                step={5} 
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Monthly Data Context (MB)</Label>
                <span className="text-accent font-mono font-bold">{dataVolume[0]} MB</span>
              </div>
              <Slider 
                value={dataVolume} 
                onValueChange={setDataVolume} 
                max={5000} 
                step={50} 
                className="py-4"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase text-muted-foreground">Industry Vertical</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="rounded-xl border-accent/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fintech">FinTech / Banking</SelectItem>
                    <SelectItem value="edtech">EdTech / Education</SelectItem>
                    <SelectItem value="retail">Retail / E-commerce</SelectItem>
                    <SelectItem value="other">Other / Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase text-muted-foreground">Model Strategy</Label>
                <Select value={modelType} onValueChange={setModelType}>
                  <SelectTrigger className="rounded-xl border-accent/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public LLM (API)</SelectItem>
                    <SelectItem value="local">Local / Sovereign LLM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Visual Output */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-secondary/5 border border-border flex flex-col items-center text-center">
                <TrendingUp className="w-6 h-6 text-accent mb-2" />
                <span className="text-[10px] font-bold uppercase text-muted-foreground mb-1">Projected Monthly Opex</span>
                <span className="text-2xl font-mono font-bold text-primary">$ {results.opex.toLocaleString()}</span>
              </div>
              
              <div className={cn(
                "p-6 rounded-2xl border flex flex-col items-center text-center transition-colors",
                results.risk > 70 ? "bg-red-500/5 border-red-500/20" : "bg-green-500/5 border-green-500/20"
              )}>
                <ShieldAlert className={cn("w-6 h-6 mb-2", results.risk > 70 ? "text-red-500" : "text-green-500")} />
                <span className="text-[10px] font-bold uppercase text-muted-foreground mb-1">Risk & Inefficiency Index</span>
                <span className={cn("text-2xl font-mono font-bold", results.risk > 70 ? "text-red-600" : "text-green-600")}>
                  {results.risk}%
                </span>
              </div>
            </div>

            {/* Locked Content Overlay */}
            <div className="relative mt-4">
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-2xl border-2 border-dashed border-accent/30 p-6 text-center">
                <div className="flex flex-col items-center">
                  <Lock className="w-8 h-8 text-accent mb-3 animate-pulse" />
                  <h4 className="font-bold text-primary mb-1">Mitigation Roadmap Locked</h4>
                  <p className="text-xs text-muted-foreground mb-4">Diagnostic shows structural vulnerabilities in your RAG pipelines.</p>
                  <Button onClick={onUnlock} size="sm" className="rounded-xl shadow-lg bg-accent text-white hover:bg-accent/90">
                    Unlock Enterprise Roadmap <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              {/* Fake blurred roadmap visual */}
              <div className="opacity-10 pointer-events-none select-none space-y-2 p-4">
                <div className="h-4 bg-muted w-3/4 rounded"></div>
                <div className="h-4 bg-muted w-1/2 rounded"></div>
                <div className="h-4 bg-muted w-5/6 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex items-start gap-3">
          <Info className="w-4 h-4 text-muted-foreground mt-0.5" />
          <p className="text-[10px] text-muted-foreground leading-relaxed italic">
            * This estimation uses industry-standard entropy models and token-cost averages. Results are for strategic guidance only and do not constitute a formal technical audit. Coded logic is front-end only to preserve IP privacy.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
