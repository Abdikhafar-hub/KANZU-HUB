import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "@/lib/products";

export interface InquiryItem {
  product: Product;
  color: string;
  size: string;
  qty: number;
}

interface InquiryContextType {
  inquiryItems: InquiryItem[];
  addToInquiryList: (product: Product, color: string, size: string, qty: number) => void;
  removeFromInquiryList: (slug: string, color: string, size: string) => void;
  clearInquiryList: () => void;
  inquiryCount: number;
  
  isModalOpen: boolean;
  activeProduct: Product | null;
  openInquiryModal: (product: Product) => void;
  closeInquiryModal: () => void;
  
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  
  phone: string;
  getWhatsAppSingleLink: (product: Product) => string;
  getWhatsAppListLink: () => string;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

const PHONE_NUMBER = "+254700000000";

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("kanzubay_inquiry_list");
      if (stored) {
        setInquiryItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to parse inquiry list:", e);
    }
  }, []);

  const saveItems = (items: InquiryItem[]) => {
    setInquiryItems(items);
    try {
      localStorage.setItem("kanzubay_inquiry_list", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save inquiry list:", e);
    }
  };

  const addToInquiryList = (product: Product, color: string, size: string, qty: number) => {
    const existingIdx = inquiryItems.findIndex(
      (item) => item.product.slug === product.slug && item.color === color && item.size === size
    );
    if (existingIdx > -1) {
      const updated = [...inquiryItems];
      updated[existingIdx].qty += qty;
      saveItems(updated);
    } else {
      saveItems([...inquiryItems, { product, color, size, qty }]);
    }
    setDrawerOpen(true);
  };

  const removeFromInquiryList = (slug: string, color: string, size: string) => {
    const filtered = inquiryItems.filter(
      (item) => !(item.product.slug === slug && item.color === color && item.size === size)
    );
    saveItems(filtered);
  };

  const clearInquiryList = () => {
    saveItems([]);
  };

  const openInquiryModal = (product: Product) => {
    setActiveProduct(product);
    setModalOpen(true);
  };

  const closeInquiryModal = () => {
    setModalOpen(false);
    setActiveProduct(null);
  };

  const getWhatsAppSingleLink = (product: Product) => {
    const text = `Hello Kanzu Bay, I would like to inquire about the price of ${product.name}.`;
    return `https://wa.me/254700000000?text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppListLink = () => {
    let text = "Hello Kanzu Bay, I would like to inquire about the prices of the following items:\n";
    inquiryItems.forEach((item) => {
      text += `- ${item.product.name} (Color: ${item.color}, Size: ${item.size}, Qty: ${item.qty})\n`;
    });
    return `https://wa.me/254700000000?text=${encodeURIComponent(text)}`;
  };

  const inquiryCount = inquiryItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <InquiryContext.Provider
      value={{
        inquiryItems,
        addToInquiryList,
        removeFromInquiryList,
        clearInquiryList,
        inquiryCount,
        isModalOpen,
        activeProduct,
        openInquiryModal,
        closeInquiryModal,
        isDrawerOpen,
        setDrawerOpen,
        phone: PHONE_NUMBER,
        getWhatsAppSingleLink,
        getWhatsAppListLink,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}
