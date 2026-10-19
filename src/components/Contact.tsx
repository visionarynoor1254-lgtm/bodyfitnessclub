import { ArrowRight, Clock, ExternalLink, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/gymData.ts';

interface ContactProps {
  onOpenJoin: () => void;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenJoin, onShowToast }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [preferredMethod, setPreferredMethod] = useState<'whatsapp' | 'phone' | 'email'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('bfc_contact_messages') || '[]');
    saved.push({
      name,
      contact,
      message,
      preferredMethod,
      date: new Date().toISOString()
    });
    localStorage.setItem('bfc_contact_messages', JSON.stringify(saved));

    setSubmitted(true);
    onShowToast(`Thank you ${name}. Your message has been received.`);
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading strictly from prompt */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
              LOCATION & ACCESS
            </span>
          </div>
          <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight">
            READY TO <span className="text-[#E52B2B]">START?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9E9E9E] leading-relaxed">
            Drop by during operating hours for a walkthrough of the lifting platforms, or connect with our front desk team directly via phone, WhatsApp, or email.
          </p>
        </div>

        {/* 3 Dedicated Primary Action Buttons from Prompt */}
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={onOpenJoin}
            className="flex items-center justify-center gap-2.5 py-4 px-6 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-white font-bold text-sm tracking-wider uppercase rounded-sm shadow-lg transition-colors cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 px-6 bg-[#1f1f1f] hover:bg-[#282828] text-[#F5F5F5] hover:text-white border border-[#333333] hover:border-[#555555] font-semibold text-sm tracking-wider uppercase rounded-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>CHAT ON WHATSAPP</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#707070]" />
          </a>

          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 px-6 bg-[#1f1f1f] hover:bg-[#282828] text-[#F5F5F5] hover:text-white border border-[#333333] hover:border-[#555555] font-semibold text-sm tracking-wider uppercase rounded-sm transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#E52B2B]" />
            <span>GET DIRECTIONS</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#707070]" />
          </a>
        </div>

        {/* Grid: Verified Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Contact Details Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address & Maps Box */}
            <div className="p-6 bg-[#151515] border border-[#262626] rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E52B2B] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Gym Address</span>
              </div>
              <div className="font-mono text-sm text-[#F5F5F5] bg-[#111111] p-3 border border-[#222222] rounded-sm">
                {CONTACT_INFO.address}
              </div>
              <p className="text-xs text-[#707070]">
                Provisional location: {CONTACT_INFO.addressDisplay}. Free athlete parking and bike lock racks directly out front.
              </p>
            </div>

            {/* Direct Phone & WhatsApp Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#151515] border border-[#262626] rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 text-[#E52B2B]" />
                  <span>Phone</span>
                </div>
                <div className="font-mono text-xs text-[#F5F5F5] bg-[#111111] p-2.5 border border-[#222222] rounded-sm">
                  {CONTACT_INFO.phone}
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phoneTel}`}
                  className="inline-block text-xs text-[#E52B2B] hover:underline font-medium"
                >
                  Call front desk →
                </a>
              </div>

              <div className="p-5 bg-[#151515] border border-[#262626] rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </div>
                <div className="font-mono text-xs text-[#F5F5F5] bg-[#111111] p-2.5 border border-[#222222] rounded-sm">
                  {CONTACT_INFO.whatsapp}
                </div>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-[#25D366] hover:underline font-medium"
                >
                  Message directly →
                </a>
              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="p-6 bg-[#151515] border border-[#262626] rounded-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E52B2B] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Opening Hours</span>
                </div>
                <span className="font-mono text-[10px] text-[#707070]">
                  {CONTACT_INFO.hours[0].times.includes('05:30') ? 'STANDARD SCHEDULE' : 'PLACEHOLDER'}
                </span>
              </div>
              <div className="font-mono text-xs text-[#F5F5F5] bg-[#111111] p-3 border border-[#222222] rounded-sm">
                [PLACEHOLDER: confirmed opening hours]
              </div>
              <div className="space-y-2 pt-1 border-t border-[#222222]">
                {CONTACT_INFO.hours.map((item, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-[#9E9E9E]">{item.days}</span>
                    <span className="font-mono text-[#F5F5F5]">{item.times}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Working Direct Message / Enquiry Form */}
          <div className="lg:col-span-6 bg-[#151515] border border-[#262626] p-6 sm:p-8 rounded-sm">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold tracking-wider text-[#E52B2B] uppercase">DIRECT MESSAGE</span>
              <h3 className="font-impact text-2xl sm:text-3xl text-[#F5F5F5] uppercase">
                SEND AN ENQUIRY
              </h3>
              <p className="text-xs text-[#9E9E9E]">
                Have questions about lifting equipment, tour availability, or membership terms? Send our front desk a note.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#1a1a1a] border border-[#E52B2B]/40 rounded-sm space-y-4 text-center">
                <div className="w-10 h-10 mx-auto bg-[#E52B2B]/20 text-[#E52B2B] rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <h4 className="font-impact text-xl text-white">MESSAGE SENT</h4>
                <p className="text-xs text-[#9E9E9E] leading-relaxed">
                  Thank you <strong className="text-white">{name}</strong>. We will get back to you at <strong className="text-white">{contact}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#252525] hover:bg-[#333333] text-xs font-semibold text-white rounded-sm cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Smith"
                    className="w-full px-3.5 py-2.5 bg-[#101010] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm placeholder:text-[#555555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Email or Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. jordan@example.com or +1 555-0123"
                    className="w-full px-3.5 py-2.5 bg-[#101010] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm placeholder:text-[#555555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Preferred Response Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['whatsapp', 'phone', 'email'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPreferredMethod(method)}
                        className={`py-2 px-3 text-xs uppercase font-semibold rounded-sm border transition-colors capitalize ${
                          preferredMethod === method
                            ? 'bg-[#E52B2B] text-white border-[#E52B2B]'
                            : 'bg-[#101010] text-[#9E9E9E] border-[#2a2a2a] hover:border-[#444444]'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#9E9E9E] uppercase tracking-wider mb-1.5">
                    Message or Question
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you'd like to know about BODY FITNESS CLUB..."
                    className="w-full px-3.5 py-2.5 bg-[#101010] border border-[#2a2a2a] focus:border-[#E52B2B] text-sm text-[#F5F5F5] rounded-sm placeholder:text-[#555555] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-white font-bold text-sm tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
