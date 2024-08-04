import type { Coordinates } from './Store';
import { NaverMap } from "./Naver"

export type ImageIcon = {
    url: string;
    size: naver.maps.Size;
    origin: naver.maps.Point;
    scaledSize?: naver.maps.Size;
}

export type Marker = {
    map: NaverMap | undefined;
    coordinates: Coordinates;
    icon: ImageIcon;
    onClick?: () => void;
}