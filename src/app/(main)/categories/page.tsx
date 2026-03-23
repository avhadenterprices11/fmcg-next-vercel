import { Suspense } from 'react';
import { CategoryExplorer } from './_components/CategoryExplorer';
import { BentoIntro } from './_components/BentoIntro';

const CategoriesPage = () => {
  return (
    <div className="w-full min-h-screen bg-background relative z-0">
      {/* <BentoIntro /> */}
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <CategoryExplorer />
      </Suspense>
    </div>
  )
}

export default CategoriesPage