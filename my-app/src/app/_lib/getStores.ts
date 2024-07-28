import { Store } from "../../model/Store";
import { mutate } from "swr"

export async function getStores() {
    const stores: Store[] = (await import('../../../public/stores.json')).default;
    return stores
}