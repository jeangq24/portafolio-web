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
    if (!validateEmail(data.email)) {
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
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el mensaje');
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