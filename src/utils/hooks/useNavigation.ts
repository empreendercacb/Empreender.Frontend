// useNavigationConfig.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavigationTree } from '@/@types/navigation';

export const useNavigationConfig = () => {
  const [navigationConfig, setNavigationConfig] = useState<NavigationTree[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const userData = localStorage.getItem('admin');
        if (userData) {
          const parsedAdminData = JSON.parse(userData);
          const token = JSON.parse(parsedAdminData.auth).session.token;

          const response = await axios.get(`${import.meta.env.VITE_API_URL}/navigation`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setNavigationConfig(response.data);
        } else {
          console.error('Dados de administração não encontrados');
        }
      } catch (error) {
        console.error('Não foi possível carregar a configuração de navegação:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchConfig();
  }, []);

  return { navigationConfig, loading };
};
