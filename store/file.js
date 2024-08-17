// 'use client';
import { create } from 'zustand';
export const fileStore = create((set) => {
  return {
    file: null,
    setFile: (data) => set((state) => ({ file: data })),
  };
});
export const titleStore = create((set) => {
  return {
    title: '',
    courseType: '',
    subject: '',
    setData: (key, data) => set((state) => ({ ...state, [key]: data })),
  };
});
