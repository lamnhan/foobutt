import {defineNuxtConfig} from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Foobutt',
      meta: [{name: 'description', content: 'Intergalactic social network.'}],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap',
        },
      ],
      script: [
        {src: '/js/gsap.min.js', defer: true},
        {src: '/js/MorphSVGPlugin3.js', defer: true},
        {src: '/js/DrawSVGPlugin3.js', defer: true},
        {src: '/js/ScrambleTextPlugin3.js', defer: true},
      ],
    },
  },

  css: ['@/assets/styles.scss'],

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('-'),
    },
  },
});
