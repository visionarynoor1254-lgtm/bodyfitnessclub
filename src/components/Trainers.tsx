import { ArrowRight, Calendar, CheckCircle2, MessageSquare, ShieldCheck, UserCheck } from 'lucide-react';
import React, { useState } from 'react';

interface TrainersProps {
  onOpenJoin: (planOrProgram?: string) => void;
  onShowToast: (message: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenJoin, onShowToast }) => {
  const [focusArea, setFocusArea] = useState('Strength & Barbell Mechanics');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [preferredDays, setPreferredDays] = useState('Morning (06:00 - 10:00)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientContact.trim()) return;

    // Save to localStorage enquiry log
    const savedEnquiries = JSON.parse(localStorage.getItem('bfc_coach_enquiries') || '[]');
    savedEnquiries.push({
      name: clientName,
      contact: clientContact,
      focus: focusArea,
      timing: preferredDays,
      date: new Date().toISOString()
    });
    localStorage.setItem('bfc_coach_enquiries', JSON.stringify(savedEnquiries));

    setSubmitted(true);
    onShowToast(`Thank you ${clientName}. Your coaching enquiry has been logged.`);
  };

  return (
    <section id="trainers" className="w-full py-20 lg:py-28 bg-[#080808] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading strictly from prompt */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
              COACHING & ADVICE
            </span>
          </div>
          <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight">
            GUIDANCE THAT <span className="text-[#E52B2B]">KEEPS YOU MOVING.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9E9E9E] leading-relaxed">
            BODY FITNESS CLUB pairs members with qualified coaches who emphasize sound biomechanics, individualized progression, and injury prevention. We do not use generic group scripts—every consultation starts with your actual training goals.
          </p>
        </div>

        {/* 2-Column Layout: Coaching Framework on Left, Interactive Enquiry on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: How Coaching Support Works */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-[#121212] border border-[#262626] rounded-sm space-y-6">
              <h3 className="font-impact text-2xl text-[#F5F5F5] uppercase tracking-wide">
                How We Deliver Coaching Support
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#191919] border border-[#2a2a2a] text-[#E52B2B] rounded-sm shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase">1. Movement Assessment & Goal Alignment</h4>
                    <p className="text-xs text-[#9E9E9E] leading-relaxed">
                      We evaluate joint mobility, squat depth, shoulder health, and past training history before assigning any program.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#191919] border border-[#2a2a2a] text-[#E52B2B] rounded-sm shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase">2. Form Mastery & Technical Cueing</h4>
                    <p className="text-xs text-[#9E9E9E] leading-relaxed">
                      Direct supervision on barbell, dumbbell, and conditioning movements to ensure every rep builds strength safely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#191919] border border-[#2a2a2a] text-[#E52B2B] rounded-sm shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase">3. Structured Periodization & Review</h4>
                    <p className="text-xs text-[#9E9E9E] leading-relaxed">
                      Regular check-ins to calibrate weights, volume, and recovery cycles based on your measurable gains.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Notice */}
              <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between text-xs text-[#707070]">
                <span>Trainer profiles available at club front desk</span>
                <span className="text-[#E52B2B] font-mono text-[11px]">1-ON-1 OR OPEN SESSIONS</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="p-5 bg-[#151515] border border-[#262626] rounded-sm flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold text-white block">Ready to discuss your training routine?</span>
                <span className="text-xs text-[#9E9E9E]">Speak directly with a coach at the front desk.</span>
              </div>
              <button
                onClick={() => onOpenJoin('Personal Training')}
                className="px-4 py-2 bg-[#E52B2B] hover:bg-[#CC1F1F] text-white text-xs font-bold rounded-sm tracking-wide shrink-0 transition-colors"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>

          {/* Right: Direct Coaching Consultation Request Card */}
          <div className="lg:col-span-6 bg-[#121212] border border-[#262626] p-6 sm:p-8 rounded-sm shadow-xl">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold tracking-wider text-[#E52B2B] uppercase">DIRECT COACH INQUIRY</span>
              <h3 className="font-impact text-2xl sm:text-3xl text-[#F5F5F5] uppercase">
                REQUEST A COACHING CONSULTATION
              </h3>
              <p className="text-xs text-[#9E9E9E]">
                Submit your training focus and our head trainer will contact you to coordinate a movement assessment.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#181818] border border-[#E52B2B]/40 rounded-sm space-y-4 text-center">
                <div className="w-12 h-12 mx-auto bg-[#E52B2B]/20 rounded-full flex items-center justify-center text-[#E52B2B]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-impact text-xl text-white">ENQUIRY LOGGED</h4>
                <p className="text-xs text-[#9E9E9E] leading-relaxed max-w-sm mx-auto">
                  We have received your coaching consultation request for <strong className="text-white">{focusArea}</strong>. Our front desk staff will reach out to you via <strong className="text-white">{clientContact}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#222222] hover:bg-[#333333] text-xs font-semibold text-white rounded-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm placeholder:text-[#555555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientContact}
                    onChange={(e) => setClientContact(e.target.value)}
                    placeholder="e.g. alex@example.com or +1 555-0199"
                    className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm placeholder:text-[#555555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Primary Training Focus
                  </label>
                  <select
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none cursor-pointer"
                  >
                    <option value="Strength & Barbell Mechanics">Strength & Barbell Mechanics</option>
                    <option value="Personal 1-on-1 Coaching">Personal 1-on-1 Coaching</option>
                    <option value="Cardio, Sleds & Conditioning">Cardio, Sleds & Conditioning</option>
                    <option value="Movement Screening & Injury Recovery">Movement Screening & Injury Recovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Preferred Training Time Slot
                  </label>
                  <select
                    value={preferredDays}
                    onChange={(e) => setPreferredDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none cursor-pointer"
                  >
                    <option value="Morning (06:00 - 10:00)">Morning (06:00 – 10:00)</option>
                    <option value="Midday (11:00 - 15:00)">Midday (11:00 – 15:00)</option>
                    <option value="Evening (16:00 - 21:00)">Evening (16:00 – 21:00)</option>
                    <option value="Weekend Mornings">Weekend Mornings</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-white font-bold text-sm tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>SUBMIT COACHING ENQUIRY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-[#666666] text-center pt-1">
                  We respect your privacy. No marketing spam.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
