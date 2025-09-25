"use client";
import React from 'react';
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { ArrowDownIcon } from 'lucide-react';
import Lenis from 'lenis';

export default function Footer() {

    React.useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (

            <div>
                < MinimalFooter />
            </div>
            );
        }