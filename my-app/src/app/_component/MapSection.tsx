import { NaverMap } from '@/model/Naver';
import useMap from "@/hooks/useMap";
import useCurrentStore from '@/hooks/useCurrentStore';
import Map from './Map';
import Markers from './Markers';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function MapSection() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const query = useMemo(() => new URLSearchParams(searchParams), [searchParams]);
    const initialZoom = useMemo(() => query.get('zoom') ? Number(query.get('zoom')): 10, [query]);
    const initialCenter = useMemo((): [number, number] => query.get('lat') && query.get('lng') ? [Number(query.get('lat')), Number(query.get('lng'))] : [37.5262411, 126.99289439], [query])

    const { initializeMap } = useMap();
    const { removeCurrentStore } = useCurrentStore();

    const onLoadMap = (map: NaverMap) => {
        initializeMap(map);
        naver.maps.Event.addListener(map, 'click', removeCurrentStore);
    }
    return (
        <>
            <Map onLoad={onLoadMap} initialZoom={initialZoom} initialCenter={initialCenter}/>
            <Markers />
        </>
    )
}