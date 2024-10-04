import { Button } from 'antd';
import { Dummy } from '../../../../components';

import { modulesText } from '../../../../constants/text/modules';

import styles from './modules.module.scss';
import { dataModules } from './modules_data';
import { ModulesItem } from './components';

export const Modules: React.FC = () => {
  return (
    <div className={styles.modulesWrapper}>
      <div className={styles.modulesHeader}>
        <h1>{modulesText.header}</h1>
        <Button>{modulesText.button}</Button>
      </div>
      <div className={styles.modulesContainer}>
        {dataModules.length > 0 ? (
          <div className={styles.allModulesWrapper}>
            {dataModules.map(elem => (
              <ModulesItem key={elem.id} name={elem.name} color={elem.color} description={elem.description} />
            ))}
          </div>
        ) : (
          <Dummy text={modulesText.dummy} />
        )}
      </div>
    </div>
  );
};
