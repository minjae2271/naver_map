import { Store } from '@/model/Store';
import styles from './detailSection.module.scss';
import useSWR from 'swr';
import { useState } from 'react';
import cx from "classnames";
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

export default function DetailSection() {
    const { data: currentStore} = useSWR<Store>('/current-store');
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={cx(styles.detailSection, currentStore ? styles.selected : '', expanded ? styles.expanded : '')}>
            <DetailHeader currentStore={currentStore} expanded={expanded} onClickArrow={() => setExpanded(!expanded)}/>
            <DetailContent currentStore={currentStore} expanded={expanded} />
        </div>
    )
}