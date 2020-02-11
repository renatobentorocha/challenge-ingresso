import { IEvent } from '../store/modules/films/types';

const event: IEvent = {
  event: {
    id: '23041',
    title: 'Arlequina em Aves de Rapina',
    city: 'São Paulo',
    siteURL:
      'https://www.ingresso.com/sao-paulo/home/filmes/arlequina-em-aves-de-rapina',
    images: [
      {
        url:
          'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23041-cartaz.jpg',
        type: 'PosterPortrait',
      },
      {
        url:
          'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23041-destaque.jpg',
        type: 'PosterHorizontal',
      },
    ],
    genres: ['Ação', 'Aventura'],
    trailers: [
      {
        type: 'Youtube',
        url: 'https://www.youtube.com/watch?v=PEvCzJulUZI',
        embeddedUrl: '//www.youtube.com/embed/PEvCzJulUZI',
      },
      {
        type: 'Youtube',
        url: 'https://www.youtube.com/watch?v=PEvCzJulUZI',
        embeddedUrl: '//www.youtube.com/embed/PEvCzJulUZI',
      },
    ],
  },
};

export default event;
