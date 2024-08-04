'use client'

import Marker from "./Marker";
import useSWR from "swr";
import { Store } from "../../model/Store";
import { NaverMap } from "../../model/Naver";
import { ImageIcon } from "../../model/Map";
import useCurrentStore from "@/hooks/useCurrentStore";

export default function Markers() {
  const { data: stores } = useSWR<Store[]>("/stores");
  const { data: map } = useSWR<NaverMap>("/map");
  const { data: currentStore } = useSWR<Store>("/current-store");

  // console.log("stores:", stores);
  // console.log("map:", map);
  // console.log('currentStore', currentStore);

  const { setCurrentStore, removeCurrentStore } = useCurrentStore();

  const MARKER_HEIGHT = 64;
  const MARKER_WIDTH = 54;
  const NUMBER_OF_MARKER = 13;
  const SCALE = 2 / 3;

  const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;
  const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;

  const getMarkerIcon = (
    markerIndex: number,
    isSelected: boolean
  ): ImageIcon => {
    return {
      url: isSelected ? "images/markers-selected.png" : "images/markers.png",
      size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
      origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
      scaledSize: new naver.maps.Size(
        SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
        SCALED_MARKER_HEIGHT
      ),
    };
  };

  if (!map || !stores) return null;
  
  return (
    <>
      {stores?.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            icon={getMarkerIcon(store.season, false)}
            key={store.nid}
            onClick={() => {
              setCurrentStore(store);
            }}
          />
        );
      })}
      {currentStore && (
        <Marker
          map={map}
          coordinates={currentStore.coordinates}
          icon={getMarkerIcon(currentStore.season, true)}
          key={currentStore.nid}
          onClick={removeCurrentStore}
        />
      )}
    </>
  );
}
