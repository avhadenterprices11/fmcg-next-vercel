'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CategoryHoverContextType = {
    hoveredImage: string | null;
    setHoveredImage: (image: string | null) => void;
};

const CategoryHoverContext = createContext<CategoryHoverContextType | undefined>(undefined);

export const CategoryHoverProvider = ({ children }: { children: ReactNode }) => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    return (
        <CategoryHoverContext.Provider value={{ hoveredImage, setHoveredImage }}>
            {children}
        </CategoryHoverContext.Provider>
    );
};

export const useCategoryHover = () => {
    const context = useContext(CategoryHoverContext);
    if (!context) {
        throw new Error('useCategoryHover must be used within a CategoryHoverProvider');
    }
    return context;
};
