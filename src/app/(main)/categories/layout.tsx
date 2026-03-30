import { ReactNode } from 'react';
import { CategoryHoverProvider } from './_components/CategoryHoverContext';
import { CategoryTransitionLayout } from './_components/CategoryTransitionLayout';

export default function CategoriesLayout({ children }: { children: ReactNode }) {
    return (
        <CategoryHoverProvider>
            <CategoryTransitionLayout>
                {children}
            </CategoryTransitionLayout>
        </CategoryHoverProvider>
    );
}
