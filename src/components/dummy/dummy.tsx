import styles from './dummy.module.scss';

type DummyProps = {
  text: string;
};

export const Dummy: React.FC<DummyProps> = ({ text }) => {
  return (
    <div className={styles.dummyWrapper}>
      <h3>{text}</h3>
    </div>
  );
};
