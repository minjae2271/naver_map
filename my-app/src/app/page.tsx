'use client';

import MapSection from "./_component/MapSection";
import { useEffect } from "react";
import useStores from "@/hooks/useStores";


export default function Home() {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores()
  }, [initializeStores]);

  return (
    <>
      <main style={{ width: '100%', height: '100%'}}>
        <MapSection />
      </main>
    </>
  );
}