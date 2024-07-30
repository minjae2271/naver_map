import { Store } from "@/model/Store"
import cx from 'classnames';
import styles from './detailSection.module.scss';
import Image from "next/image";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

type Props = {
    currentStore?: Store,
    expanded: boolean,
}

export default function DetailContent({ currentStore, expanded}: Props) {
    if(!currentStore) return null;
    return (
        <div className={cx(styles.detailContent, expanded ? styles.expanded : '')}>
            <div className={styles.images}>
                {currentStore.images.slice(0,3).map((image) => {
                    return (
                        <div style={{ position: 'relative', width: 120, height: 80}} key={image}>
                            <Image fill src={image} alt="detailImage" style={{ objectFit: 'cover'}}/>
                        </div>
                    )
                })}
            </div>
            {expanded && (
                <>
                    <div className={styles.description}>
                        <h2>설명</h2>
                        <p>{currentStore.description}</p>
                    </div>
                    <hr />
                    <div className={styles.basicInfo}>
                        <h2>기본 정보</h2>
                        <div className="address">
                            <IoLocationOutline size={20} />
                            <span>{currentStore.address || '주소 정보가 없습니다.'}</span>
                        </div>
                        <div className="phone">
                            <IoCallOutline size={20} />
                            <span>{currentStore.phone || '연락처 정보가 없습니다.'}</span>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.menus}>
                        <h2>메뉴</h2>
                        <ul>
                            {currentStore.menus?.map((menu) => {
                                return (
                                    <li className={styles.menu} key={menu.name}>
                                        <p className={styles.name}>{menu.name}</p>
                                        <p className={styles.price}>{menu.price}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}