import PageMovies from "@components/pages/PageMovies.vue";
import PageShows from "@components/pages/PageShows.vue";

const mainMenuRoutes = [
  {
    path: '/movies',
    name: 'movies',
    component: PageMovies,
    meta: {
      label: 'Movies',
    },
    children: [
      {
        path: '/popular',
        name: 'moviesPopular',
        component: PageMovies,
        meta: {
          label: 'Popular movies',
        },
      },
      {
        path: '/latest',
        name: 'moviesLatest',
        component: PageMovies,
        meta: {
          label: 'Latest movies',
        },
      }
    ]
  },
  {
    path: '/shows',
    name: 'shows',
    component: PageShows,
    meta: {
      label: 'Shows',
    },
  }
];

export default mainMenuRoutes;
