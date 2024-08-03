
import styles from './detailSection.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import cx from "classnames";
import { Store } from '@/model/Store';

type Props = {
    currentStore?: Store,
    expanded: boolean,
    onClickArrow?: () => void
}

export default function DetailHeader({ currentStore, expanded, onClickArrow}: Props) {

  return (
    <>
      <div className={styles.header}>
        <button
          className={cx(styles.arrowButton, expanded ? styles.expanded : "")}
          onClick={onClickArrow}
          disabled={!currentStore}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore && <p className={styles.title}>매장을 선택해 주세요.</p>}
        {currentStore && <p className={styles.title}>{currentStore.name}</p>}
      </div>
    </>
  );
}
