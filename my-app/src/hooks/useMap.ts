import { NaverMap } from "@/model/Naver";
import { useCallback } from "react";
import useSWR, { mutate } from "swr";

const useMap = () => {
    const { data:map } = useSWR('/map');

    const initializeMap = useCallback((map: NaverMap) => {
        mutate('/map', map);
    }, [])

    const resetMapOption = useCallback(() => {
        map.morph(new naver.maps.LatLng(37.5262411, 126.99289439), 10)
    }, [map])

    const getMapOptions = useCallback(() => {
        const mapCenter = map.getCenter();
        const center = [mapCenter.lat(), mapCenter.lng()];
        const zoom = map.getZoom();

        return { center, zoom }
    }, [map])

    return {
        initializeMap,
        resetMapOption,
        getMapOptions
    }
}

export default useMap;