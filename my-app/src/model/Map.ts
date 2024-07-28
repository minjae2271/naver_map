import { NaverMap } from "./Naver"

export type ImageIcon = {
    url: string;
    size: naver.maps.Size;
    origin: naver.maps.Point;
    scaledSize?: naver.maps.Size;
}

export type Marker = {
    map: NaverMap | undefined;
    coordinates: [number, number];
    icon: ImageIcon;
    onClick?: () => void;
}