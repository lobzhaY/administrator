import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import styles from './modules-item.module.scss';

type ModulesItemProps = {
  name: string;
  color: string;
  description: string;
};

export const ModulesItem: React.FC<ModulesItemProps> = ({ name, color, description }) => {
  return (
    <Badge.Ribbon color={color} style={{ fontSize: '18px', padding: '10px 25px' }}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemContent}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.itemActions}>
          <Button icon={<CloseCircleOutlined />} />
          <Button icon={<EditOutlined />} />
        </div>
      </div>
    </Badge.Ribbon>
  );
};
