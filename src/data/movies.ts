import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'SKÀ Platform',
  description: 'Welcome to SKÀ - Your premier destination for streaming entertainment. Discover thousands of movies, series, and exclusive content.',
  genre: ['Platform', 'Entertainment'],
  year: 2024,
  rating: 'All',
  duration: '∞',
  thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
  backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  isFeatured: true,
  likes: 5000
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Matrix',
    description: 'A computer programmer discovers that reality as he knows it is actually a simulation controlled by machines.',
    genre: ['Sci-Fi', 'Action', 'Thriller'],
    year: 1999,
    rating: 'R',
    duration: '136 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2340
  },
  {
    id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
    genre: ['Sci-Fi', 'Action', 'Thriller'],
    year: 2010,
    rating: 'PG-13',
    duration: '148 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1890
  },
  {
    id: '3',
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2008,
    rating: 'PG-13',
    duration: '152 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 3120
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    genre: ['Crime', 'Drama'],
    year: 1994,
    rating: 'R',
    duration: '154 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2780
  },
  {
    id: '5',
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.',
    genre: ['Crime', 'Drama'],
    year: 1972,
    rating: 'R',
    duration: '175 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1560
  },
  {
    id: '6',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson through the eyes of an Alabama man with an IQ of 75.',
    genre: ['Drama', 'Romance'],
    year: 1994,
    rating: 'PG-13',
    duration: '142 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2450
  },
  {
    id: '7',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.',
    genre: ['Drama'],
    year: 1994,
    rating: 'R',
    duration: '142 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 4200
  },
  {
    id: '8',
    title: 'Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners.',
    genre: ['Crime', 'Drama', 'Biography'],
    year: 1990,
    rating: 'R',
    duration: '146 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1980
  },
  {
    id: '9',
    title: 'Casablanca',
    description: 'A cynical American expatriate struggles to decide whether to help his former lover escape Nazi-occupied Morocco.',
    genre: ['Drama', 'Romance', 'War'],
    year: 1942,
    rating: 'PG',
    duration: '102 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2100
  },
  {
    id: '10',
    title: 'Citizen Kane',
    description: 'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to discover the meaning of his final word.',
    genre: ['Drama', 'Mystery'],
    year: 1941,
    rating: 'PG',
    duration: '119 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1750
  },
  {
    id: '11',
    title: 'Vertigo',
    description: 'A former police detective juggles wrestling with his personal demons and becoming obsessed with a woman.',
    genre: ['Mystery', 'Romance', 'Thriller'],
    year: 1958,
    rating: 'PG',
    duration: '128 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 3850
  },
  {
    id: '12',
    title: 'Singin\' in the Rain',
    description: 'A silent film production company and cast make a difficult transition to sound.',
    genre: ['Comedy', 'Musical', 'Romance'],
    year: 1952,
    rating: 'G',
    duration: '103 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2650
  },
  {
    id: '13',
    title: 'Psycho',
    description: 'A Phoenix secretary embezzles money from her employer and flees to a remote motel run by a young man.',
    genre: ['Horror', 'Mystery', 'Thriller'],
    year: 1960,
    rating: 'R',
    duration: '109 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1890
  },
  {
    id: '14',
    title: 'Sunset Boulevard',
    description: 'A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.',
    genre: ['Drama', 'Film-Noir'],
    year: 1950,
    rating: 'Not Rated',
    duration: '110 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1560
  },
  {
    id: '15',
    title: 'Lawrence of Arabia',
    description: 'The story of T.E. Lawrence, the English officer who successfully united and led the diverse tribes.',
    genre: ['Adventure', 'Biography', 'Drama'],
    year: 1962,
    rating: 'PG',
    duration: '228 min',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 2340
  },
  {
    id: '16',
    title: 'The Wizard of Oz',
    description: 'Dorothy is swept away from Kansas to a magical land and embarks on a quest to see the Wizard.',
    genre: ['Adventure', 'Family', 'Fantasy'],
    year: 1939,
    rating: 'G',
    duration: '102 min',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1780
  },
  {
    id: '17',
    title: 'The Graduate',
    description: 'A disillusioned college graduate finds himself torn between his older lover and her daughter.',
    genre: ['Comedy', 'Drama', 'Romance'],
    year: 1967,
    rating: 'PG',
    duration: '106 min',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1920
  },
  {
    id: '18',
    title: 'On the Waterfront',
    description: 'An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 1954,
    rating: 'Not Rated',
    duration: '108 min',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1650
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
    title: 'Classic Movies',
    movies: movies.slice(6, 12)
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  },
  {
    id: 'drama',
    title: 'Drama Collection',
    movies: movies.filter(movie => movie.genre.includes('Drama')).slice(0, 8)
  },
  {
    id: 'crime',
    title: 'Crime & Thriller',
    movies: movies.filter(movie => movie.genre.includes('Crime') || movie.genre.includes('Thriller')).slice(0, 8)
  },
  {
    id: 'practical-info',
    title: 'Help & Support',
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