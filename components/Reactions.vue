<template>
  <div>
    
    <ul>

      <li id="like-container">
        <svg id="like" viewBox="0 0 60 60">
          <defs>
            <linearGradient id="like-bg-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(54,181,255,1)" stop-opacity="1" />
              <stop offset="100%" stop-color="rgba(0,106,255,1)" stop-opacity="1" />
            </linearGradient>
          </defs>

          <g id="like-bg">
            <circle cx="30" cy="30" r="30" fill="url(#like-bg-fill)"></circle>
          </g>

          <g id="like-shape">
            <g transform="scale(0.065) translate(200 170)">
              <rect x="0" y="195" width="125" height="280" fill="#ffffff" rx="12.065" ry="12.065"></rect>
              <path transform="translate(50 0)" fill="#ffffff" d="M 284.6 20.391 C 256.4 -0.309 217.4 11.591 215.8 12.091 C 212 13.291 209.5 16.791 209.5 20.691 L 209.5 106.491 C 209.5 135.591 195.7 160.191 168.4 179.691 C 147.3 194.791 125.7 200.991 125.5 201.091 C 125.3 201.091 125.2 201.191 125 201.291 L 110.953 206.386 C 107.953 201.486 109.124 465.81 110.824 458.41 C 122.724 471.11 150.7 476.791 169.5 476.791 L 379.3 476.791 C 423.9 476.791 452.4 453.491 457.4 412.791 L 484.2 242.591 C 488.1 217.891 478 192.891 458.4 178.891 C 447.3 170.891 434.2 166.691 420.5 166.691 L 311.4 166.691 L 311.4 87.091 C 311.4 55.891 302.4 33.491 284.6 20.391 Z"></path>
            </g>
          </g>

        </svg>
      </li>

      <li id="love-container">
        <svg id="love" viewBox="0 0 60 60">
          <defs>
            <linearGradient id="love-bg-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(255,54,120,1)" stop-opacity="1" />
              <stop offset="100%" stop-color="rgba(255,0,63,1)" stop-opacity="1" />
            </linearGradient>
          </defs>

          <g id="love-bg">
            <circle cx="30" cy="30" r="30" fill="url(#love-bg-fill)"></circle>
          </g>

          <g id="love-shape">
            <g transform="scale(0.1) translate(125 135)">
              <path fill="#ffffff" d="M254.791,33.251c-46.555,0-76.089,51.899-83.079,51.899c-6.111,0-34.438-51.899-83.082-51.899c-47.314,0-85.947,39.021-88.476,86.27c-1.426,26.691,7.177,47.001,19.304,65.402c24.222,36.76,130.137,125.248,152.409,125.248c22.753,0,127.713-88.17,152.095-125.247c12.154-18.483,20.731-38.711,19.304-65.402C340.738,72.272,302.107,33.251,254.791,33.251"/>
            </g>
          </g>

        </svg>
      </li>

      <li id="haha-container">
        <svg id="haha" viewBox="0 0 60 60">
          <defs>
            <linearGradient id="haha-bg-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(255,234,54,1)" stop-opacity="1" />
              <stop offset="100%" stop-color="rgba(255,164,0,1)" stop-opacity="1" />
            </linearGradient>
            <linearGradient id="haha-mouth-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(130,87,2,1)" stop-opacity="1" />
              <stop offset="100%" stop-color="rgba(179,127,33,1)" stop-opacity="1" />
            </linearGradient>
            <linearGradient id="haha-tongue-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(255,54,120,1)" stop-opacity="1" />
              <stop offset="100%" stop-color="rgba(255,0,63,1)" stop-opacity="1" />
            </linearGradient>
          </defs>

          <g id="haha-bg">
            <circle cx="30" cy="30" r="30" fill="url(#haha-bg-fill)"></circle>
          </g>

          <g id="haha-shape">
            <g transform="scale(0.1) translate(100 110)">
              <path fill="url(#haha-mouth-fill)" d="M 63.208 266.295 C 72.266 212.856 397.077 210.544 406.37 254.181 C 415.663 297.818 386.667 424.568 235.454 431.025 C 84.241 437.482 56.745 304.425 63.208 266.295 Z"></path>
              <path fill="url(#haha-tongue-fill)" d="M 112.794 392.648 C 112.794 392.648 240.288 266.263 353.356 389.016 C 353.356 389.016 237.832 489.375 112.794 392.648 Z"></path>
              <path fill="none" stroke="#333333" stroke-width="30" d="M 47.464 87.134 C 47.464 87.134 181.804 111.901 148.159 123.952 C 103.91 139.801 49.04 173.513 49.04 173.513" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 1.973359047696988, 5.4808844282072755)"></path>
              <path fill="none" stroke="#333333" stroke-width="30" d="M 378.498 148.159 C 378.498 148.159 327.271 121.368 279.088 120.234 C 230.905 119.1 348.994 55.647 348.994 55.647"></path>
            </g>
          </g>

        </svg>
      </li>

    </ul>

  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  declare const gsap: any

  function newTimeline(defaults = {}, options = {}) {
    return gsap.timeline({
      defaults: {
        duration: .4,
        transformOrigin: 'center',
        ...defaults
      },
      repeat: -1,
      ...options
    })
  }
  function animateLike() {
    const SHAPE = '#like-shape'
    newTimeline()
      .to(SHAPE, { x: 0, y: 7, scale: .8, rotate: 30, duration: .2 })
      .to(SHAPE, { x: -5, y: -3, rotate: -30, scale: 1.3 })
      .to(SHAPE, { x: 0, y: 0, rotate: 10, scale: 1 })
      .to(SHAPE, { rotate: 0 })
      .to(SHAPE, { delay: .6 })
  }
  function animateLove() {
    const SHAPE = '#love-shape'
    newTimeline()
      .to(SHAPE, { x: -5, y: 5, scale: .7, rotate: 30, duration: .2 })
      .to(SHAPE, { x: 2, y: 2, rotate: -30, scale: 1.6, duration: .3 })
      .to(SHAPE, { x: 0, y: 0, rotate: 15, scale: 1.3 })
      .to(SHAPE, { rotate: 0 })
      .to(SHAPE, { scale: 1, duration: .2 })
      .to(SHAPE, { delay: 1 })
  }
  function animateHaha() {
    const SHAPE = '#haha-shape'
    const timeline = newTimeline(
      { duration: .15 },
      { repeat: 2 }
    );
    [
      [-2, 2],
      [-4, 1],
      [-6, 0],
      [-8, -1],
      [-6, -2],
      [-4, -3],
      [-2, -4],
      [0, -4],
      [1, -3],
      [2, -2],
      [1, -1],
      [0, 0]
    ].forEach(([x, y], i) => {
      const scale = i % 2 === 0 ? 0.9 : 1
      timeline.to(SHAPE, { x, y, scale })
    })
    timeline.eventCallback('onComplete', () => {
      setTimeout(() => timeline.restart(), 500)
    })
  }

  onMounted(() => {
    setTimeout(() => animateLike(), 0)
    setTimeout(() => animateLove(), 300)
    setTimeout(() => animateHaha(), 500)
  })

</script>

<style lang="scss" scoped>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    li {
      margin-left: 1rem;
    }
  }
  #like-container,
  #love-container,
  #haha-container {
    svg {
      width: 50px;
      height: 50px;
    }
  }

</style>
