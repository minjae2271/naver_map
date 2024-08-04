'use client';

import Script from "next/script";
import { useEffect, useRef } from "react";
import { NaverMap } from "../../model/Naver";
import styles from "../_component/map.module.scss";


type Props = {
    onLoad?: (map: NaverMap) => void;
    initialCenter?: [number, number];
    initialZoom?: number;
}

export default function Map({ onLoad, initialZoom,  initialCenter}: Props) {

    const mapRef = useRef<NaverMap | null>(null);

    const initializeMap = () => {
        const mapOptions = {
            center: initialCenter ? new window.naver.maps.LatLng(...initialCenter) : new window.naver.maps.LatLng(37.3595704, 127.105399),
            zoom: initialZoom ? initialZoom : 10,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        }
        const map = new window.naver.maps.Map('map', mapOptions);
        mapRef.current = map;

        if (onLoad) {
            onLoad(map)
        }
    }

    useEffect(() => {
        return () => {
            mapRef.current?.destroy();
        }
    }, []);

    return (
        <>
            <Script
                strategy='beforeInteractive'
                type="text/javascript"
                src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
                onReady={initializeMap}
            />
            <div id="map" className={styles.map}/>
        </>
    )
}