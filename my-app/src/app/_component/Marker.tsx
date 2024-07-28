import useSWR from "swr";
import { useEffect } from "react"
import { NaverMap} from "../../model/Naver"
import { ImageIcon } from "../../model/Map"
import { Store } from "@/model/Store";

type Props = {
    map: NaverMap | undefined,
    coordinates: [number, number],
    icon: ImageIcon;
    onClick?: () => void;
}

export default function Marker({map, coordinates, icon, onClick}: Props) {
    const { data: currentStore } = useSWR<Store>("/current-store");

    useEffect(() => {
        let marker: naver.maps.Marker | null = null;

        if (map && coordinates) {
            marker = new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(...coordinates),
                icon,
            })
        }

        if (onClick && coordinates) {
            console.log('coordinates', coordinates)
            map?.setCenter(new naver.maps.LatLng(...coordinates))
            naver.maps.Event.addListener(marker, 'click', onClick);
        }
        return () => {
            marker?.setMap(null);
        }
    }, []);

    return null
}