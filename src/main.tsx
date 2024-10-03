import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 1,
        },
        components: {
          Button: {
            defaultHoverBg: 'rgba(0, 107, 80, 0.5);',
            defaultHoverColor: '#fff'
          },
        },
      }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
