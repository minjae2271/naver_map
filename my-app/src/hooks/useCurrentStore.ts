import { Store } from "@/model/Store";
import { useCallback } from "react";
import { mutate } from "swr";

const useCurrentStore = () => {
    const setCurrentStore = useCallback((store: Store) => {
        mutate('/current-store', store)
    }, []);

    const removeCurrentStore = useCallback(() => {
        mutate('/current-store', null)
    }, []);

    return {
        setCurrentStore,
        removeCurrentStore
    }
}

export default useCurrentStore;