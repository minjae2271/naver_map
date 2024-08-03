export async function getStores() {
    const stores = (await import('../../../public/stores.json')).default;
    return stores
}