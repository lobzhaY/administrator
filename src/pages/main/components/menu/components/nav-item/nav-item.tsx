import { Link } from 'react-router-dom';
import styles from './nav-item.module.scss';
import { Button } from 'antd';

type NavItemProps = {
  label: string;
  path: string;
};

export const NavItem: React.FC<NavItemProps> = ({ label, path }) => {
  return (
    <Button className={styles.navItemWrapper}>
      <Link to={path}>{label}</Link>
    </Button>
  );
};
