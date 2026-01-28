export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  players: string;
}

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'Memory Match',
    description: 'Test your memory with this classic card matching game',
    image: 'https://images.unsplash.com/photo-1611891487950-c1d5fc4b1c97?w=400&q=80',
    category: 'Puzzle',
    players: '1 Player',
  },
  {
    id: '2',
    title: 'Word Quest',
    description: 'Find hidden words in a grid of letters',
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&q=80',
    category: 'Word',
    players: '1 Player',
  },
  {
    id: '3',
    title: 'Number Puzzle',
    description: 'Arrange numbers in the correct order',
    image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=400&q=80',
    category: 'Logic',
    players: '1 Player',
  },
  {
    id: '4',
    title: 'Color Match',
    description: 'Match colors before time runs out',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
    category: 'Arcade',
    players: '1-2 Players',
  },
  {
    id: '5',
    title: 'Trivia Challenge',
    description: 'Test your knowledge across various topics',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&q=80',
    category: 'Trivia',
    players: '1-4 Players',
  },
];
