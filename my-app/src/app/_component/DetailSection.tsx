import { Store } from '@/model/Store';
import styles from './detailSection.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import useSWR from 'swr';
import { useState } from 'react';
import cx from "classnames";
import DetailContent from './DetailContent';

export default function DetailSection() {
    const { data: currentStore} = useSWR<Store>('/current-store');
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={cx(styles.detailSection, currentStore ? styles.selected : '', expanded ? styles.expanded : '')}>
            <div className={styles.header}>
                <button className={cx(styles.arrowButton, expanded ? styles.expanded : '')} onClick={() => setExpanded(!expanded)} disabled={!currentStore}>
                    <IoIosArrowUp size={20} color='#666666' />
                </button>
                {!currentStore && <p className={styles.title}>매장을 선택해 주세요.</p>}
                {currentStore && <p className={styles.title}>{currentStore.name}</p>}
            </div>
            <DetailContent currentStore={currentStore} expanded={expanded} />
        </div>
    )
}