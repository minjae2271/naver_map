import { Store } from '@/model/Store';

export async function getStores(): Promise<Store[]> {
    const stores = (await import('../../../public/stores.json')).default;
    return stores as Store[]
}