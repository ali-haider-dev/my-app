export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  formats: ('ebook' | 'audiobook')[];
  duration?: string;
  pages?: number;
}

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
    description: 'A dazzling novel about all the choices that go into a life well lived.',
    formats: ['ebook', 'audiobook'],
    duration: '8h 15m',
    pages: 304,
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
    description: 'An easy & proven way to build good habits & break bad ones.',
    formats: ['ebook', 'audiobook'],
    duration: '5h 35m',
    pages: 320,
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80',
    description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller.',
    formats: ['ebook', 'audiobook'],
    duration: '16h 10m',
    pages: 496,
  },
  {
    id: '4',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&q=80',
    description: 'Timeless lessons on wealth, greed, and happiness.',
    formats: ['ebook', 'audiobook'],
    duration: '5h 48m',
    pages: 256,
  },
];
