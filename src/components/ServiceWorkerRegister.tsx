'use client';
import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    console.log('ServiceWorkerRegister mounted');
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('[SW] Registration successful with scope:', registration.scope);
        }).catch(err => {
          console.error('[SW] Registration failed:', err);
        });
      });
    }
  }, []);

  return null;
}
