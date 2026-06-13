import React from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import { useInquiry } from "@/context/InquiryContext";

export function InquiryModal() {
  const { isModalOpen, activeProduct, closeInquiryModal, getWhatsAppSingleLink, phone } = useInquiry();

  if (!isModalOpen || !activeProduct) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/75 backdrop-blur-md transition-opacity duration-300"
        onClick={closeInquiryModal}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md overflow-hidden bg-background border border-hairline p-8 shadow-2xl transition-all duration-300 transform scale-100">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeInquiryModal}
          className="absolute right-6 top-6 text-muted-foreground hover:text-ink transition-colors duration-200"
        >
          <X className="h-5 w-5" strokeWidth={1.25} />
        </button>

        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">Boutique Inquiry</p>
          <h3 className="mt-3 font-display text-2xl text-ink">Price Inquiry</h3>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            How would you like to inquire about the price of <br />
            <strong className="text-ink font-semibold">{activeProduct.name}</strong>?
          </p>
        </div>

        {/* Action Options */}
        <div className="mt-8 flex flex-col gap-4">
          <a
            href={getWhatsAppSingleLink(activeProduct)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeInquiryModal}
            className="flex items-center justify-center gap-3 w-full bg-ink py-4 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200 font-medium"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            Inquire via WhatsApp
          </a>

          <a
            href={`tel:${phone}`}
            onClick={closeInquiryModal}
            className="flex items-center justify-center gap-3 w-full border border-ink py-4 text-[11px] uppercase tracking-[0.24em] text-ink hover:bg-ink hover:text-white transition-colors duration-200 font-medium"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            Direct Call Inquiry
          </a>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
            Our atelier representative will assist you shortly
          </p>
        </div>
      </div>
    </div>
  );
}
