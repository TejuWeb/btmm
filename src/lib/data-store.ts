"use client";

export interface Registration {
  id: string;
  name: string;
  phone: string;
  address: string;
  date: string;
  status: "pending" | "approved" | "rejected";
}

export interface Message {
  id: string;
  name: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

const STORAGE_KEYS = {
  REGISTRATIONS: "btmm_registrations",
  MESSAGES: "btmm_messages",
};

export const dataStore = {
  // --- Registrations ---
  getRegistrations: (): Registration[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
    return stored ? JSON.parse(stored) : [];
  },

  saveRegistration: async (data: Omit<Registration, "id" | "date" | "status">) => {
    const registrations = dataStore.getRegistrations();
    const newReg: Registration = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString("mr-IN"),
      status: "pending",
    };
    
    const updated = [newReg, ...registrations];
    localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));

    return newReg;
  },

  // --- Messages ---
  getMessages: (): Message[] => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return stored ? JSON.parse(stored) : [];
  },

  saveMessage: async (data: Omit<Message, "id" | "date" | "isRead">) => {
    const messages = dataStore.getMessages();
    const newMsg: Message = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleString("mr-IN"),
      isRead: false,
    };

    const updated = [newMsg, ...messages];
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));

    return newMsg;
  },

  markMessageAsRead: (id: string) => {
    const messages = dataStore.getMessages();
    const updated = messages.map(m => m.id === id ? { ...m, isRead: true } : m);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
  }
};
