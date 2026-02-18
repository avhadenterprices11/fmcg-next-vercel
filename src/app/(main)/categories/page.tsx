import { CategoryExplorer } from './_components/CategoryExplorer';
import { BentoIntro } from './_components/BentoIntro';

const CategoriesPage = () => {
  return (
    <div className="w-full min-h-screen bg-background relative z-0">
      {/* <BentoIntro /> */}
      <CategoryExplorer />
    </div>
  )
}

export default CategoriesPage