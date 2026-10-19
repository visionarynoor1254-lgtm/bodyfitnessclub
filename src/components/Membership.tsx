import { ArrowRight, Check, Edit3 } from 'lucide-react';
import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData.ts';
import { MembershipPlan } from '../types.ts';

interface MembershipProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  // Allow interactive inline preview / editing of the placeholder for development as requested
  const [plans, setPlans] = useState<MembershipPlan[]>(MEMBERSHIP_PLANS);
  const [isEditingCustomRate, setIsEditingCustomRate] = useState(false);

  const handlePriceUpdate = (id: string, newRate: string) => {
    setPlans(prev => prev.map(p => p.id === id ? { ...p, priceNote: newRate } : p));
  };

  return (
    <section id="membership" className="w-full py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
                MEMBERSHIP TIERS
              </span>
            </div>
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight">
              FIND YOUR <span className="text-[#E52B2B]">TRAINING PLAN.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs text-[#9E9E9E] max-w-xs leading-relaxed">
              Transparent access to our facilities. Rates are confirmed directly with our front desk or via membership enquiry.
            </p>
            {/* Developer/Gym Owner Toggle for Testing Confirmed Rates */}
            <button
              onClick={() => setIsEditingCustomRate(!isEditingCustomRate)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333333] text-[11px] text-[#9E9E9E] hover:text-white rounded-sm transition-colors cursor-pointer whitespace-nowrap"
              title="Toggle editable price fields"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#E52B2B]" />
              <span>{isEditingCustomRate ? 'Done Editing' : 'Edit Placeholders'}</span>
            </button>
          </div>
        </div>

        {/* 3 Clean Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative bg-[#151515] rounded-sm border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  plan.recommended
                    ? 'border-[#E52B2B] shadow-2xl shadow-red-950/20 ring-1 ring-[#E52B2B]/40'
                    : 'border-[#262626] hover:border-[#444444]'
                }`}
              >
                {/* Top Banner if Recommended */}
                {plan.recommended && (
                  <div className="bg-[#E52B2B] text-[#F5F5F5] text-[11px] font-bold tracking-widest uppercase py-1 text-center">
                    MOST POPULAR TIER
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  {/* Plan Name & Duration */}
                  <div className="space-y-2">
                    <h3 className="font-impact text-2xl sm:text-3xl text-[#F5F5F5]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#E52B2B] font-semibold uppercase tracking-wider">
                      {plan.duration}
                    </p>
                    <p className="text-xs text-[#9E9E9E] leading-relaxed pt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Box with exact [PLACEHOLDER] requirement */}
                  <div className="p-4 bg-[#101010] border border-[#222222] rounded-sm space-y-1">
                    <span className="text-[10px] font-semibold text-[#707070] uppercase tracking-wider block">
                      Confirmed Pricing
                    </span>
                    {isEditingCustomRate ? (
                      <input
                        type="text"
                        value={plan.priceNote}
                        onChange={(e) => handlePriceUpdate(plan.id, e.target.value)}
                        className="w-full text-xs font-mono bg-[#1c1c1c] text-white p-1.5 border border-[#E52B2B] rounded-sm"
                      />
                    ) : (
                      <div className="font-mono text-xs sm:text-[13px] text-[#F5F5F5] bg-[#171717] px-2.5 py-2 rounded-sm border border-[#282828] text-balance">
                        {plan.priceNote}
                      </div>
                    )}
                    <span className="text-[10px] text-[#666666] block pt-1">
                      Verified at front desk upon registration
                    </span>
                  </div>

                  {/* Included Facilities */}
                  <div className="space-y-3 pt-2 border-t border-[#222222]">
                    <span className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider block">
                      Included Facilities:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#9E9E9E] leading-normal">
                          <Check className="w-3.5 h-3.5 text-[#E52B2B] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA: ENQUIRE ABOUT MEMBERSHIP → */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className={`w-full py-3.5 px-4 font-bold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer shadow-md ${
                        plan.recommended
                          ? 'bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-[#F5F5F5]'
                          : 'bg-[#1f1f1f] hover:bg-[#E52B2B] text-[#F5F5F5]'
                      }`}
                    >
                      <span>ENQUIRE ABOUT MEMBERSHIP</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Footer strip */}
                <div className="px-6 py-2 bg-[#101010] border-t border-[#1f1f1f] text-[10px] text-[#666666] flex justify-between">
                  <span>No hidden contracts</span>
                  <span>Direct Staff Contact</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Clarification */}
        <div className="mt-12 text-center max-w-xl mx-auto space-y-2">
          <p className="text-xs text-[#707070]">
            Corporate memberships and coach training packages are arranged directly with club management.
          </p>
        </div>

      </div>
    </section>
  );
};
