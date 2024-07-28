import { Store } from "@/model/Store"
import { useCallback } from "react"
import { mutate } from "swr"
import { getStores } from "../app/_lib/getStores";

const useStores = () => {
    const initializeStores = useCallback(() => {
        const stores = getStores();
        mutate('/stores', stores);
    }, []);

    return {
        initializeStores,
    };
};

export default useStores;