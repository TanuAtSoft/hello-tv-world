
export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  type: 'movie' | 'series' | 'documentary';
  category?: string;
}

// Mock data for the TV application
export const featuredContent: ContentItem[] = [
  {
    id: '1',
    title: 'Cosmic Voyager',
    description: 'Journey through the cosmos with stunning visuals and immersive storytelling.',
    image: 'https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?q=80&w=2673&auto=format&fit=crop',
    type: 'documentary',
    category: 'Science'
  },
  {
    id: '2',
    title: 'Ocean Depths',
    description: 'Explore the mysteries of the deep sea and the creatures that inhabit it.',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=2574&auto=format&fit=crop',
    type: 'documentary',
    category: 'Nature'
  },
  {
    id: '3',
    title: 'Digital Revolution',
    description: 'The evolution of technology and its impact on modern society.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2620&auto=format&fit=crop',
    type: 'documentary',
    category: 'Technology'
  }
];

export const popularContent: ContentItem[] = [
  {
    id: '4',
    title: 'Mountain Escape',
    description: 'A thrilling adventure through untamed wilderness.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop',
    type: 'movie',
    category: 'Adventure'
  },
  {
    id: '5',
    title: 'Urban Nights',
    description: 'A noir tale of mystery in the heart of the city.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2564&auto=format&fit=crop',
    type: 'series',
    category: 'Drama'
  },
  {
    id: '6',
    title: 'Desert Mirage',
    description: 'Survival against the odds in a harsh landscape.',
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2670&auto=format&fit=crop',
    type: 'movie',
    category: 'Thriller'
  }
];

export const recentlyAdded: ContentItem[] = [
  {
    id: '7',
    title: 'Forest Whispers',
    description: 'The hidden life and interconnectedness of forest ecosystems.',
    image: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=2670&auto=format&fit=crop',
    type: 'documentary',
    category: 'Nature'
  },
  {
    id: '8',
    title: 'Architectural Marvels',
    description: 'Exploring the most innovative buildings around the world.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2380&auto=format&fit=crop',
    type: 'series',
    category: 'Art & Design'
  },
  {
    id: '9',
    title: 'Northern Lights',
    description: 'The science and beauty behind one of nature\'s most spectacular phenomena.',
    image: 'https://images.unsplash.com/photo-1579033385971-a7bc024bb0e2?q=80&w=2574&auto=format&fit=crop',
    type: 'documentary',
    category: 'Science'
  }
];

export const categories = [
  'All',
  'Documentaries',
  'Movies',
  'Series'
];
