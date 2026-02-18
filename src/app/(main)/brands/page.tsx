"use client";

import { Suspense } from 'react';
import BrandsTemplate from '@/components/pages/brands/components/BrandsTemplate';

export default function BrandsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <BrandsTemplate />
        </Suspense>
    );
}
