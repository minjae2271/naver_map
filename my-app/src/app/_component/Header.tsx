"use client";

import Link from "next/link";
import Image from "next/image";
import {useSelectedLayoutSegment} from "next/navigation";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import styles from "./header.module.scss";
import useMap from "@/hooks/useMap";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import copy from "copy-to-clipboard";


export default function HeaderComponent() {
    const segment = useSelectedLayoutSegment();

    const { resetMapOption, getMapOptions } = useMap();
    const router = useRouter();

    const replaceAndCopyURL = useCallback(() => {
        const mapOptions = getMapOptions();
        const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

        router.replace(query);

        copy(location.origin + query);
        
    }, [getMapOptions, router])

    return (
        <header className={styles.header}>
            <div className={styles.flexItem}>
                <Link href="/" className={styles.box} onClick={resetMapOption}>
                    <Image src="https://lecture-1.vercel.app/inflearn.png" width={110} height={20} alt="Logo" />
                </Link>
            </div>
            {segment === null ?
                <div className={styles.flexItem}>
                    <button
                        onClick={replaceAndCopyURL}
                        className={styles.box}
                        style={{marginRight: 8}}
                    >
                        <AiOutlineShareAlt size={20} />
                    </button>
                    <button
                        onClick={() => {
                            alert('link!');
                        }}
                        className={styles.box}
                        style={{marginRight: 8}}
                    >
                        <VscFeedback size={20}/>
                    </button>
                </div> : null}
        </header>
    )
}