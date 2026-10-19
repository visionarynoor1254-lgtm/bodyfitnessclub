import { CheckCircle2, ChevronRight, Copy, Dumbbell, ShieldCheck, X } from 'lucide-react';
import React, { useState } from 'react';
import { GalleryImage, MembershipPlan, ProgramDetail } from '../types.ts';
import { GymImage } from './GymImage.tsx';

// 1. Join / Membership Enquiry Modal
interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanOrProgram?: string;
  onShowToast: (msg: string) => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultPlanOrProgram,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selection, setSelection] = useState(defaultPlanOrProgram || 'Club Standard Access');
  const [experience, setExperience] = useState('Intermediate (1-3 years lifting)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || (!email.trim() && !phone.trim())) return;

    const payload = {
      name,
      email,
      phone,
      selection,
      experience,
      notes,
      date: new Date().toISOString()
    };

    const saved = JSON.parse(localStorage.getItem('bfc_membership_enquiries') || '[]');
    saved.push(payload);
    localStorage.setItem('bfc_membership_enquiries', JSON.stringify(saved));

    setSubmitted(true);
    onShowToast(`Enquiry registered for ${name}. Our staff will connect with you.`);
  };

  const handleCopySummary = () => {
    const text = `BODY FITNESS CLUB Enquiry:
Name: ${name}
Contact: ${email || phone}
Plan/Program: ${selection}
Experience: ${experience}`;
    navigator.clipboard.writeText(text);
    onShowToast('Enquiry summary copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#121212] border border-[#262626] rounded-sm p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#707070] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 space-y-5 text-center">
            <div className="w-14 h-14 mx-auto bg-[#E52B2B]/20 text-[#E52B2B] rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-impact text-3xl text-white">ENQUIRY CONFIRMED</h3>
            <p className="text-sm text-[#9E9E9E] leading-relaxed max-w-sm mx-auto">
              Thank you <strong className="text-white">{name}</strong>. We have logged your request for <strong className="text-[#E52B2B]">{selection}</strong>. Our front desk manager will confirm schedule and access terms.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1f1f1f] hover:bg-[#282828] text-xs font-semibold text-white rounded-sm border border-[#333333]"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Summary</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#E52B2B] hover:bg-[#CC1F1F] text-xs font-bold text-white rounded-sm uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold tracking-wider text-[#E52B2B] uppercase">BODY FITNESS CLUB</span>
              <h3 className="font-impact text-2xl sm:text-3xl text-[#F5F5F5] uppercase">
                MEMBERSHIP & TRAINING ENQUIRY
              </h3>
              <p className="text-xs text-[#9E9E9E]">
                Fill out the form below to receive confirmed rates and coordinate your initial training pass.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Marcus Vance"
                className="w-full px-3 py-2 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marcus@example.com"
                  className="w-full px-3 py-2 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555-0199"
                  className="w-full px-3 py-2 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1">
                Selected Plan / Discipline
              </label>
              <select
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
                className="w-full px-3 py-2 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none cursor-pointer"
              >
                <option value="Club Standard Access">Club Standard Access</option>
                <option value="All-Access Conditioning">All-Access Conditioning (Turf & Racks)</option>
                <option value="Guided Coaching & Access">Guided Coaching & Access</option>
                <option value="Strength Training Program">Strength Training Program</option>
                <option value="Personal Training 1-on-1">Personal Training 1-on-1</option>
                <option value="Cardio & Conditioning">Cardio & Conditioning</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1">
                Training Background
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3 py-2 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none cursor-pointer"
              >
                <option value="Beginner (New to barbell & strength)">Beginner (New to barbell & strength)</option>
                <option value="Intermediate (1-3 years lifting)">Intermediate (1–3 years lifting)</option>
                <option value="Advanced / Competitive lifter">Advanced / Competitive lifter</option>
                <option value="Returning after a break">Returning after a break</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1">
                Notes or Specific Questions (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Preferred training days, goals, or previous injuries..."
                className="w-full px-3 py-2 bg-[#181818] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-white font-bold text-sm tracking-wider uppercase rounded-sm transition-colors cursor-pointer shadow-md"
              >
                SUBMIT MEMBERSHIP ENQUIRY →
              </button>
            </div>

            <p className="text-[11px] text-[#666666] text-center">
              Rates confirmed in person or by direct response from our staff.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

// 2. Program Details Modal
interface ProgramModalProps {
  program: ProgramDetail | null;
  onClose: () => void;
  onEnquire: (title: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onEnquire }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#262626] rounded-sm p-6 sm:p-8 shadow-2xl my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#707070] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#222222] bg-[#1a1a1a]">
            <GymImage
              src={program.image}
              fallbackSrc={program.fallbackImage}
              alt={program.alt}
              className="w-full h-full object-cover filter brightness-95"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90 pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-semibold text-[#E52B2B] uppercase tracking-wider">PROGRAM BLUEPRINT</span>
              <h2 className="font-impact text-3xl sm:text-4xl text-white">{program.title}</h2>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-[#E52B2B] uppercase tracking-wider">{program.headline}</h3>
            <p className="text-sm text-[#D1D1D1] leading-relaxed">{program.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#222222]">
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-[#E52B2B]" />
                <span>Core Focus Areas</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#9E9E9E]">
                {program.focusAreas.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#E52B2B] font-bold">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E52B2B]" />
                <span>Dedicated Equipment</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#9E9E9E]">
                {program.equipment.map((eq, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#E52B2B] font-bold">·</span>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-[#181818] border border-[#262626] rounded-sm text-xs text-[#9E9E9E] space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white block">Program Cadence</span>
            <p>{program.structure}</p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onEnquire(program.title);
              }}
              className="flex-1 py-3 px-4 bg-[#E52B2B] hover:bg-[#CC1F1F] text-white font-bold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>ENQUIRE ABOUT THIS PROGRAM</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 bg-[#1f1f1f] hover:bg-[#282828] text-white text-xs font-semibold rounded-sm border border-[#333333]"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// 3. About Gym Philosophy Modal ("ABOUT OUR GYM →")
interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJoin: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenJoin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#121212] border border-[#262626] rounded-sm p-6 sm:p-8 shadow-2xl my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#707070] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-wider text-[#E52B2B] uppercase">CLUB ETHOS & STANDARDS</span>
            <h3 className="font-impact text-3xl sm:text-4xl text-white uppercase">
              ABOUT BODY FITNESS CLUB
            </h3>
          </div>

          <p className="text-sm text-[#9E9E9E] leading-relaxed">
            BODY FITNESS CLUB is built for individuals who take their physical progression seriously. We have removed the gimmicks and crowds to provide an athletic, focused training ground.
          </p>

          <div className="space-y-4 pt-2 border-t border-[#222222]">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white uppercase">Equipment Integrity</h4>
              <p className="text-xs text-[#888888]">
                Every barbell is maintained, rust-free, and regularly lubricated. Plates are calibrated cast iron and dense competition urethane.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white uppercase">Floor Etiquette</h4>
              <p className="text-xs text-[#888888]">
                We expect all members to re-rack weights in correct pairs, wipe down benches, and share power racks during peak hours.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white uppercase">Direct Guidance</h4>
              <p className="text-xs text-[#888888]">
                Our coaches are available on the floor for form checks, spotter assistance, and equipment advice.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenJoin();
              }}
              className="flex-1 py-3 px-4 bg-[#E52B2B] hover:bg-[#CC1F1F] text-white font-bold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>TOUR OUR GYM / JOIN NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 bg-[#1f1f1f] hover:bg-[#282828] text-white text-xs font-semibold rounded-sm border border-[#333333]"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// 4. Lightbox Modal
interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#101010] border border-[#262626] rounded-sm overflow-hidden cursor-default shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#080808]/80 text-white hover:bg-[#E52B2B] rounded-sm transition-colors cursor-pointer"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
          <GymImage
            src={image.src}
            fallbackSrc={image.fallbackSrc}
            alt={image.title}
            className="w-full h-full object-contain"
            containerClassName="w-full h-full"
          />
        </div>

        <div className="p-6 bg-[#121212] border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">PHOTOGRAPHY ARCHIVE</span>
            <h3 className="font-impact text-2xl text-white">{image.title}</h3>
            <p className="text-xs text-[#9E9E9E] mt-1">{image.caption}</p>
          </div>
          <span className="font-impact text-xl text-white/30 shrink-0">BODY FITNESS CLUB</span>
        </div>
      </div>
    </div>
  );
};
