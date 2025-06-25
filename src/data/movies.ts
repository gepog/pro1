import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Crown',
  description: 'A biographical drama about the reign of Queen Elizabeth II, exploring the personal and political challenges faced by the British monarchy.',
  genre: ['Drama', 'Biography', 'History'],
  year: 2016,
  rating: 'TV-MA',
  duration: '60 min',
  thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
  backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    year: 2016,
    rating: 'TV-14',
    duration: '51 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2340
  },
  {
    id: '2',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    genre: ['Fantasy', 'Adventure', 'Drama'],
    year: 2019,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1890
  },
  {
    id: '3',
    title: 'Money Heist',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '70 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 3120
  },
  {
    id: '4',
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    genre: ['Sci-Fi', 'Mystery', 'Drama'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2780
  },
  {
    id: '5',
    title: 'Bridgerton',
    description: 'Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.',
    genre: ['Romance', 'Drama', 'Period'],
    year: 2020,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1560
  },
  {
    id: '6',
    title: 'The Queen\'s Gambit',
    description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.',
    genre: ['Drama', 'Coming-of-age'],
    year: 2020,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2450
  },
  {
    id: '7',
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games for a tempting prize.',
    genre: ['Thriller', 'Drama', 'Action'],
    year: 2021,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 4200
  },
  {
    id: '8',
    title: 'Ozark',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1980
  },
  {
    id: '9',
    title: 'Narcos',
    description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.',
    genre: ['Crime', 'Biography', 'Drama'],
    year: 2015,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2100
  },
  {
    id: '10',
    title: 'House of Cards',
    description: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
    genre: ['Drama', 'Political', 'Thriller'],
    year: 2013,
    rating: 'TV-MA',
    duration: '60 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1750
  },
  {
    id: '11',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2008,
    rating: 'TV-MA',
    duration: '47 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 3850
  },
  {
    id: '12',
    title: 'Better Call Saul',
    description: 'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque.',
    genre: ['Crime', 'Drama'],
    year: 2015,
    rating: 'TV-MA',
    duration: '47 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2650
  }
];

// Practical Information content
const practicalInfoMovies: Movie[] = [
  {
    id: 'practical-1',
    title: 'Getting Started Guide',
    description: 'Learn how to navigate and use all the features of our platform effectively.',
    genre: ['Tutorial', 'Guide'],
    year: 2024,
    rating: 'All',
    duration: '15 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 450
  },
  {
    id: 'practical-2',
    title: 'Account Management',
    description: 'How to manage your account settings, billing, and subscription preferences.',
    genre: ['Tutorial', 'Account'],
    year: 2024,
    rating: 'All',
    duration: '12 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 320
  },
  {
    id: 'practical-3',
    title: 'Troubleshooting Common Issues',
    description: 'Solutions to the most frequently encountered problems and how to resolve them.',
    genre: ['Support', 'Help'],
    year: 2024,
    rating: 'All',
    duration: '18 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 280
  },
  {
    id: 'practical-4',
    title: 'Privacy & Security Settings',
    description: 'Understanding and configuring your privacy settings and security options.',
    genre: ['Security', 'Privacy'],
    year: 2024,
    rating: 'All',
    duration: '14 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 390
  },
  {
    id: 'practical-5',
    title: 'Mobile App Features',
    description: 'Discover all the features available in our mobile application.',
    genre: ['Mobile', 'Features'],
    year: 2024,
    rating: 'All',
    duration: '16 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 510
  },
  {
    id: 'practical-6',
    title: 'Parental Controls',
    description: 'How to set up and manage parental controls for family-friendly viewing.',
    genre: ['Family', 'Controls'],
    year: 2024,
    rating: 'All',
    duration: '13 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 340
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: movies.slice(6, 12)
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  },
  {
    id: 'drama',
    title: 'Drama Series',
    movies: movies.filter(movie => movie.genre.includes('Drama')).slice(0, 8)
  },
  {
    id: 'crime',
    title: 'Crime & Thriller',
    movies: movies.filter(movie => movie.genre.includes('Crime') || movie.genre.includes('Thriller')).slice(0, 8)
  },
  {
    id: 'practical-info',
    title: 'Practical Information',
    movies: practicalInfoMovies
  }
];

export const getMostLikedMovies = (movieLikes: Record<string, number>) => {
  return movies
    .map(movie => ({
      ...movie,
      likes: movieLikes[movie.id] || movie.likes || 0
    }))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};