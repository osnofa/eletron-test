import Home from './home/Home';
import Abc from './abc/Abc';
import Xyz from './xyz/Xyz';
import Movies from './movies/Movies';

export const routes = [
  {
    path: '/home',
    page: Home,
    name: 'Home',
  },
  {
    path: '/abc',
    page: Abc,
    name: 'Abc',
  },
  {
    path: '/xyz',
    page: Xyz,
    name: 'Xyz',
  },
  {
    path: '/movies',
    page: Movies,
    name: 'Movies',
  },
];

export const rootPath = '/filmes';
