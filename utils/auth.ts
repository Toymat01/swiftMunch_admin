import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAuth = (): boolean => {
  const router = useRouter();

  useEffect(() => {
    const token: string | null = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if token is not present
      router.push('/login');
    }
  }, [router]);

  // Return true if token exists, indicating user is authenticated
  return !!localStorage.getItem('token');
};
