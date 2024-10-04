import { Outlet } from 'react-router-dom';
import { Menu } from './components';
import styles from './main.module.scss';

export const MainPage: React.FC = () => {
  return (
    <main className={styles.mainWrapper}>
      <Menu />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
    </main>
  );
};
