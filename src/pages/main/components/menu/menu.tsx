import { LogoutOutlined } from '@ant-design/icons';
import logoSrc from '../../../../assets/logo.png';
import styles from './menu.module.scss';
import { Button } from 'antd';
import { navItemsText, ROUTES_PATH } from '../../../../constants';
import { NavItem } from './components';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.nav}>
        <NavLink to={ROUTES_PATH.main} >
          <div className={styles.logoWrapper}>
            <img src={logoSrc} alt="Logo" />
          </div>
        </NavLink>
        <ul>
            {
                navItemsText.map((elem) => <NavItem label={elem.label} path={elem.path} />)
            }
        </ul>
      </nav>

      <div className={styles.logoutWrapper}>
        <Button icon={ <LogoutOutlined />} iconPosition={'end'}>
          <span>Выйти</span>
        </Button>
      </div>
    </header>
  );
};
