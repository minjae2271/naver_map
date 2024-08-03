import DetailHeader from '../_component/DetailHeader';
import DetailContent from '../_component/DetailContent';
import { getStores } from '../_lib/getStores';
import styles from '@/app/_component/detailSection.module.scss';
import cx from 'classnames';

type Params = {
    params: { name: string }
}

export default async function DetailPage({ params }: Params) {
    const { name } = params;
    const storeName = decodeURI(name);
    const expanded = true;

    const stores = await getStores();
    const store = stores.find((store) => store.name === storeName)

    return (
        <>
        <div className={cx(styles.detailSection, styles.selected , styles.expanded)}>
            <DetailHeader currentStore={store} expanded={expanded} />
            <DetailContent currentStore={store} expanded={expanded} />
        </div>
        </>
    )
}

// export const getStaticPaths: GetStaticPaths = async() => {
//     const paths = [{ params: { name: 'test'}}];
//     return { paths, fallback: false }
// }
export async function generateStaticParams() {
    const stores = await getStores()
   
    return stores.map((store) => ({
      name: store.name,
    }))
}