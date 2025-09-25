"use client";
import React from 'react';
import { MinimalFooter } from "@/components/ui/minimal-footer";
import Lenis from 'lenis';
import { TextHoverEffect } from './ui/text-hover-effect';

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
            <div className="h-[30rem] flex items-center justify-center">
                <TextHoverEffect text="Tradoo" />
            </div>
        </div>
    );
}