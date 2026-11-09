// hooks/useSendEmail.ts
import { useState } from 'react';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
    
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setSuccess(false);
    setError(null);

    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
    };

    if (!payload.name || !payload.message) {
      setError('Por favor completa tu nombre y mensaje');
      return false;
    }

    if (!validateEmail(payload.email)) {
      setError('Por favor ingresa un correo electrónico válido');
      return false;
    }
  
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
  
      if (!response.ok || result?.success !== true) {
        throw new Error(
          typeof result?.error === 'string' ? result.error : 'Error al enviar el mensaje'
        );
      }
  
      setSuccess(true);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
};