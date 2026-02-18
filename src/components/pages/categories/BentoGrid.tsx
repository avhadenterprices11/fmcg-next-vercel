"use client"
import { Wine, Sparkles, ShoppingBag, Beer, Martini, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface BentoItemProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function BentoItem({ title, icon, className = '', onClick }: BentoItemProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer border border-slate-200 ${className}`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 text-slate-700 group-hover:text-purple-600 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="mt-auto text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}

// Spirits detail view component
function SpiritsDetail({ onBack }: { onBack: () => void }) {
  const [selectedSpirit, setSelectedSpirit] = useState('Whisky');

  const allSpirits = [
    { name: 'Whisky', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['Scotch', 'Irish'] },
    { name: 'Vodka', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['Premium', 'Classic'] },
    { name: 'Rum', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['White', 'Dark', 'Spiced'] },
    { name: 'Gin', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['London Dry', 'Craft'] },
    { name: 'Tequila', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['Blanco', 'Reposado'] },
    { name: 'Cognac', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['VS', 'VSOP', 'XO'] },
    { name: 'Liqueur', icon: <Wine size={40} strokeWidth={1.5} />, subcategories: ['Fruit', 'Cream', 'Herbal'] },
  ];

  const selectedSpiritData = allSpirits.find(s => s.name === selectedSpirit);
  const gridSpirits = allSpirits.filter(s => s.name !== selectedSpirit);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-4 gap-4 min-h-[600px]">
        {/* Left column - Back button, Spirits heading, and Selected Spirit */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-slate-800 border border-slate-200 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 px-8 min-w-[200px]">Spirits</h2>
          </div>
          
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 border border-slate-200">
            <h3 className="text-slate-800 mb-6 text-xl">{selectedSpiritData?.name}</h3>
            <div className="space-y-3">
              {selectedSpiritData?.subcategories.map((sub, index) => (
                <p key={index} className="text-slate-600">• {sub}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right grid - Other spirit categories */}
        <div className="col-span-3 grid grid-cols-3 gap-4 grid-rows-2">
          {gridSpirits.map((category) => (
            <BentoItem
              key={category.name}
              title={category.name}
              icon={category.icon}
              className="h-full min-h-[280px]"
              onClick={() => setSelectedSpirit(category.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  const [showSpiritsDetail, setShowSpiritsDetail] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-6">
      {/* Main Bento Grid */}
      <div className="grid grid-cols-4 gap-4" style={{ gridAutoRows: 'auto' }}>
        {/* Spirit - Tall left column */}
        <div className="row-span-3 col-span-1">
          <BentoItem
            title="Spirit"
            icon={<Wine size={48} strokeWidth={1.5} />}
            className="h-full"
          />
        </div>

        {/* Champagne - Wide top right with height matching Spirit width */}
        <div className="col-span-3 aspect-[3/1]">
          <BentoItem
            title="Champagne"
            icon={<Sparkles size={48} strokeWidth={1.5} />}
            className="h-full"
          />
        </div>

        {/* Shop All & Beer & Cider - Combined card */}
        <div className="row-span-2 col-span-2">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer border border-slate-200 h-full">
            <div className="relative z-10 flex flex-col h-full justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-slate-700 group-hover:text-purple-600 transition-colors duration-300">
                  <ShoppingBag size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                  Shop All
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Beer & Cider - Tall column (same as Spirit) */}
        <div className="row-span-3 col-span-1">
          <BentoItem
            title="Beer & Cider"
            icon={<Beer size={48} strokeWidth={1.5} />}
            className="h-full"
          />
        </div>

        {/* Cocktail mixer tonic - Wide bottom */}
        <div className="col-span-3 aspect-[3/1]">
          <BentoItem
            title="Cocktail mixer tonic"
            icon={<Martini size={40} strokeWidth={1.5} />}
            className="h-full"
          />
        </div>
      </div>

      {/* Spirits Detail Section - Always visible below Main Grid */}
      <div className="mt-6">
        <SpiritsDetail onBack={() => {}} />
      </div>

      {/* New Section 1 - Based on sketch */}
      <div className="mt-8">
        <div className="">
          {/* Header with number, back button, and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* Large content area */}
          <div className="p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
            {/* Content goes here */}
          </div>
        </div>
      </div>

      {/* New Section 2 - Two column layout */}
      <div className="mt-8">
        <div className="">
          {/* Header with back button and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Left column - narrower */}
            <div className="col-span-1 p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Left content */}
            </div>

            {/* Right column - wider */}
            <div className="col-span-1 p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Right content */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section 3 - L-shaped layout */}
      <div className="mt-8">
        <div className="">
          {/* Header with back button and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* L-shaped layout */}
          <div className="grid grid-cols-5 gap-4 mt-4">
            {/* Left large section */}
            <div className="col-span-2 row-span-2 p-8 min-h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Main content area */}
            </div>

            {/* Right top section */}
            <div className="col-span-3 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Top right content */}
            </div>

            {/* Right bottom section */}
            <div className="col-span-3 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Bottom right content */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section 4 - Tall left with stacked right blocks */}
      <div className="mt-8">
        <div className="">
          {/* Header with back button and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* Layout with tall left and stacked right */}
          <div className="grid grid-cols-5 gap-4 mt-4">
            {/* Left tall section - spans all rows */}
            <div className="col-span-2 row-span-3 p-8 min-h-[750px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Main tall content area */}
            </div>

            {/* Right stacked sections - 3 equal cards */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Top block */}
            </div>

            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Middle block */}
            </div>

            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Bottom block */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section 5 - Tall left with 2x2 grid on right */}
      <div className="mt-8">
        <div className="">
          {/* Header with back button and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* Layout with tall left and 2x2 grid on right */}
          <div className="grid grid-cols-12 gap-4 mt-4">
            {/* Left tall section - spans all rows */}
            <div className="col-span-4 row-span-2 p-8 min-h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Main tall content area */}
            </div>

            {/* Right side - 2x2 grid of cards */}
            {/* Top row - 2 cards */}
            <div className="col-span-4 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Top left card */}
            </div>

            <div className="col-span-4 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Top right card */}
            </div>

            {/* Bottom row - 2 cards */}
            <div className="col-span-4 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Bottom left card */}
            </div>

            <div className="col-span-4 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Bottom right card */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section 6 - Complex mixed grid layout */}
      <div className="mt-8">
        <div className="">
          {/* Header with back button and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* Complex mixed grid layout */}
          <div className="grid grid-cols-8 gap-4 mt-4">
            {/* Left tall section - spans full height */}
            <div className="col-span-2 row-span-2 p-8 min-h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Left tall content */}
            </div>

            {/* Middle left column - top card */}
            <div className="col-span-2 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Middle left top */}
            </div>

            {/* Middle center - merged tall card spanning both rows */}
            <div className="col-span-2 row-span-2 p-8 min-h-[600px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Middle center merged tall card */}
            </div>

            {/* Right top section */}
            <div className="col-span-2 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Right top */}
            </div>

            {/* Middle left column - bottom card */}
            <div className="col-span-2 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Middle left bottom */}
            </div>

            {/* Right bottom section */}
            <div className="col-span-2 p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Right bottom */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section 7 - Alternating tall and stacked cards */}
      <div className="mt-8">
        <div className="">
          {/* Header with back button and Spirits heading */}
          <div className="flex items-center gap-3 p-4 border-b border-slate-200">
            <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-slate-800">Spirits</h2>
            </div>
          </div>

          {/* Alternating layout with tall and stacked cards */}
          <div className="grid grid-cols-12 gap-4 mt-4">
            {/* First column - Tall card spanning all rows */}
            <div className="col-span-4 row-span-3 p-8 min-h-[750px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Left tall card */}
            </div>

            {/* Second column - 3 stacked cards */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl px-[59px] py-[57px]">
              {/* Top card column 2 */}
            </div>

            {/* Third column - Tall card spanning all rows */}
            <div className="col-span-2 row-span-3 p-8 min-h-[750px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Center tall card */}
            </div>

            {/* Fourth column - 3 stacked cards */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Top card column 4 */}
            </div>

            {/* Second column - Middle card */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Middle card column 2 */}
            </div>

            {/* Fourth column - Middle card */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Middle card column 4 */}
            </div>

            {/* Second column - Bottom card */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Bottom card column 2 */}
            </div>

            {/* Fourth column - Bottom card */}
            <div className="col-span-3 p-8 min-h-[238px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
              {/* Bottom card column 4 */}
            </div>
          </div>
        </div>
      </div>

      {/* New Section 8 - Grid layout - left column and right 2x2 grid */}
      <div className="mt-8">
        <div className="">
          {/* Grid layout - left column and right 2x2 grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Left column - Back button, Spirits heading, and content */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
                  <ArrowLeft size={24} />
                </button>
                <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                  <h2 className="text-slate-800">Spirits</h2>
                </div>
              </div>
              
              <div className="flex-1 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 border border-slate-200">
                {/* Main tall content area */}
              </div>
            </div>

            {/* Right side - 2x2 grid of cards */}
            <div className="col-span-3 grid grid-cols-2 gap-4 grid-rows-2">
              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                {/* Top left card */}
              </div>

              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                {/* Top right card */}
              </div>

              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                {/* Bottom left card */}
              </div>

              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                {/* Bottom right card */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section 9 - 2-column layout: Left sidebar + Right grid */}
      <div className="mt-8">
        <div className="">
          {/* 2-column layout: Left sidebar + Right grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* LEFT SIDEBAR COLUMN */}
            <div className="col-span-1 flex flex-col gap-4">
              {/* Back button and Spirits heading - ONLY here */}
              <div className="flex items-center gap-3">
                <button className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
                  <ArrowLeft size={24} />
                </button>
                <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                  <h2 className="text-slate-800">Spirits</h2>
                </div>
              </div>

              {/* Category list card */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                <h3 className="text-slate-800 mb-4 text-lg font-medium">Whisky</h3>
                <div className="space-y-2">
                  <p className="text-slate-600">• Scotch</p>
                  <p className="text-slate-600">• Irish</p>
                  <p className="text-slate-600">• Bourbon</p>
                  <p className="text-slate-600">• Rye</p>
                </div>
              </div>
            </div>

            {/* RIGHT GRID COLUMN - 2x2 spirit cards */}
            <div className="col-span-3 grid grid-cols-2 gap-4 grid-rows-2">
              {/* Card 1: Vodka */}
              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <Wine size={48} strokeWidth={1.5} className="text-slate-700 group-hover:text-purple-600 transition-colors mb-4" />
                <h3 className="text-slate-800">Vodka</h3>
              </div>

              {/* Card 2: Rum */}
              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <Wine size={48} strokeWidth={1.5} className="text-slate-700 group-hover:text-purple-600 transition-colors mb-4" />
                <h3 className="text-slate-800">Rum</h3>
              </div>

              {/* Card 3: Gin */}
              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <Wine size={48} strokeWidth={1.5} className="text-slate-700 group-hover:text-purple-600 transition-colors mb-4" />
                <h3 className="text-slate-800">Gin</h3>
              </div>

              {/* Card 4: Tequila */}
              <div className="p-8 min-h-[280px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <Wine size={48} strokeWidth={1.5} className="text-slate-700 group-hover:text-purple-600 transition-colors mb-4" />
                <h3 className="text-slate-800">Tequila</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}