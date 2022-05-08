const state = {
    top: 0,
    pages: 0,
    threshold: 4,
    mouse: [0, 0],
    content: [
      {
        tag: '00',
        text: `Emerald bot commands`,
        images: ['/images/card-1.png', '/images/card-1.png', '/images/card-1.png', '/images/card-1.png', '/images/card-1.png', '/images/card-1.png'  ],
      },
      { tag: '01', text: `Float commands`, images: ['/images/card-1.png', '/images/card-1.png', '/images/card-1.png'] },
      { tag: '02', text: `Gated Access`, images: ['/images/card-1.png', '/images/card-1.png', '/images/card-1.png'] },
    ],
    depthbox: [
      {
        depth: 0,
        color: '#cccccc',
        textColor: '#ffffff',
        text: 'Join Us!',
      },
      // {
      //   depth: -5,
      //   textColor: '#272727',
      //   text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
      //   image: '/images/04zTfWB.jpg',
      // },
    ],
    lines: [
      { points: [[-20, 0, 0], [-9, 0, 0]], color: "black", lineWidth: 0.5 },
      { points: [[20, 0, 0], [9, 0, 0]], color: "black", lineWidth: 0.5 },
    ]
  }
  
  export default state