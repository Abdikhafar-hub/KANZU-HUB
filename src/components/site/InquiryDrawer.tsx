import React, { useEffect } from "react";
import { X, Trash2, MessageCircle, ArrowRight } from "lucide-react";
import { useInquiry } from "@/context/InquiryContext";

export function InquiryDrawer() {
  const { 
    inquiryItems, 
    isDrawerOpen, 
    setDrawerOpen, 
    removeFromInquiryList, 
    getWhatsAppListLink 
  } = useInquiry();

  // Prevent scroll on body when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer Body */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-background border-l border-hairline shadow-2xl transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <div>
            <h2 className="font-display text-xl text-ink">Inquiry List</h2>
            <p className="mt-1 text-[10px] text-muted-foreground uppercase tracking-wider">
              {inquiryItems.length} {inquiryItems.length === 1 ? "Item" : "Items"} selected
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-ink transition-colors duration-200"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {inquiryItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full border border-hairline flex items-center justify-center text-muted-foreground">
                <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
              </div>
              <h3 className="mt-4 font-display text-lg">Your list is empty</h3>
              <p className="mt-2 text-xs text-muted-foreground max-w-xs leading-relaxed">
                Add premium thobes, overtops, or handcrafted accessories to compile your customized inquiry.
              </p>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="mt-6 border border-ink px-6 py-2.5 text-[10px] uppercase tracking-wider text-ink hover:bg-ink hover:text-white transition-colors duration-200"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            inquiryItems.map((item, idx) => (
              <div key={`${item.product.slug}-${item.color}-${item.size}-${idx}`} className="flex gap-4 border-b border-hairline pb-4 last:border-0 last:pb-0">
                {/* Thumbnail */}
                <div className="h-24 w-18 flex-shrink-0 overflow-hidden bg-ivory border border-hairline">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <h4 className="font-display text-sm text-ink">{item.product.name}</h4>
                    <p className="mt-1 text-[10px] text-muted-foreground uppercase tracking-wider">
                      {item.product.category}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
                      <span>Color: <strong className="text-ink">{item.color}</strong></span>
                      <span>Size: <strong className="text-ink">{item.size}</strong></span>
                      <span>Qty: <strong className="text-ink">{item.qty}</strong></span>
                    </div>
                  </div>

                  {/* Remove Action */}
                  <button
                    type="button"
                    onClick={() => removeFromInquiryList(item.product.slug, item.color, item.size)}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-red-600 hover:text-red-800 transition-colors w-fit"
                  >
                    <Trash2 className="h-3.5 w-3.5" strokeWidth={1.25} />
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {inquiryItems.length > 0 && (
          <div className="border-t border-hairline p-6 bg-ivory">
            <p className="text-[10px] text-center uppercase tracking-wider text-muted-foreground mb-4">
              Pricing is provided dynamically upon representative inquiry
            </p>
            <a
              href={getWhatsAppListLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-ink py-4 text-[11px] uppercase tracking-[0.24em] text-white hover:bg-gold hover:text-ink transition-colors duration-200 font-medium"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Submit Inquiry via WhatsApp
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-3 w-full border border-hairline py-3 text-[10px] uppercase tracking-wider text-muted-foreground hover:text-ink transition-colors bg-white font-medium"
            >
              Continue Adding Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
