
import React, { useState } from 'react';
import TvLayout from '@/components/TvLayout';
import TvNavbar from '@/components/TvNavbar';
import TvSection from '@/components/TvSection';
import TvHeader from '@/components/TvHeader';
import TvGrid from '@/components/TvGrid';
import TvCard from '@/components/TvCard';
import { categories, featuredContent, popularContent, recentlyAdded } from '@/data/mock-data';
import { NavGroup, NavigableItem, TizenNavigation, useTizenNavigation } from '@/components/TizenNavigation';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { currentFocus } = useTizenNavigation();

  const handleNavItemClick = (category: string) => {
    setActiveCategory(category);
    toast(`Selected category: ${category}`);
  };

  const handleCardSelect = (title: string) => {
    toast(`Selected content: ${title}`);
  };

  return (
    <TvLayout>
      <header className="mb-8">
        <h1 className="text-4xl font-display font-bold tracking-tight">
          Samsung TV
        </h1>
        <p className="text-muted-foreground mt-2">Discover content crafted for your big screen</p>
      </header>

      <TvNavbar 
        items={categories.map(category => ({
          id: category.toLowerCase(),
          label: category,
          active: category === activeCategory,
          onClick: () => handleNavItemClick(category)
        }))}
      />

      <TizenNavigation>
        <div className="flex-1 w-full">
          <TvSection delay={100}>
            <TvHeader title="Featured" subtitle="Highlighted Content" />
            <NavGroup id="featured-content" className="w-full">
              {featuredContent.map((item, index) => (
                <NavigableItem 
                  key={item.id} 
                  id={`featured-${item.id}`}
                  onSelect={() => handleCardSelect(item.title)}
                  className="w-full"
                >
                  <TvCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    className="mb-6"
                  />
                </NavigableItem>
              ))}
            </NavGroup>
          </TvSection>

          <TvSection delay={200}>
            <TvHeader title="Popular" subtitle="Trending Now" />
            <NavGroup id="popular-content" className="w-full">
              <TvGrid columns={3} gap={6}>
                {popularContent.map((item) => (
                  <NavigableItem 
                    key={item.id}
                    id={`popular-${item.id}`}
                    onSelect={() => handleCardSelect(item.title)}
                  >
                    <TvCard
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </NavigableItem>
                ))}
              </TvGrid>
            </NavGroup>
          </TvSection>

          <TvSection delay={300}>
            <TvHeader title="Recently Added" subtitle="New Content" />
            <NavGroup id="recent-content" className="w-full">
              <TvGrid columns={3} gap={6}>
                {recentlyAdded.map((item) => (
                  <NavigableItem 
                    key={item.id}
                    id={`recent-${item.id}`}
                    onSelect={() => handleCardSelect(item.title)}
                  >
                    <TvCard
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </NavigableItem>
                ))}
              </TvGrid>
            </NavGroup>
          </TvSection>
        </div>
      </TizenNavigation>
      
      <footer className="mt-auto pt-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Samsung TV Application</p>
        <p className="mt-1">Navigate with arrow keys, select with Enter</p>
      </footer>
    </TvLayout>
  );
};

export default Index;
