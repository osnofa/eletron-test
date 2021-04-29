import Home from './home/Home';
import Abc from './abc/Abc';
import Xyz from './xyz/Xyz';

export const routes = [
  {
    path: '/home',
    exact: true,
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
];

export const rootPath = '/filmes';
