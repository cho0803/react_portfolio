const TAB_ITEM = [
  {
    tab: 'REACT PROJECT',
    key: 'react',
    items: [
      {
        id: 1,
        item: 'Portfolio',
        key: 'react',
      },
      {
        id: 2,
        item: 'Resume',
        key: 'react',
      }, 
      {
        id: 3,  
        item: 'Leaflet.js Map',
        key: 'about',
      }, 
    ],
  },
  {
    tab: 'ANIMATION',
    key: 'animation',
    items: [
      {
        id: 1,
        item: 'Particle',
      },
      {
        id: 2,
        item: 'Spinning',
      },
    ],
  },
  {
    tab: 'EFFECT',
    key: 'effect',
    items: [
      {
        id: 1,
        item: 'Spinning',
      },
    ],
  },
]

const getContents = (value: string) => {
  const NEW_LIST = TAB_ITEM.filter((item) => {
    return item.key === value
  })
  return NEW_LIST[0].items
}

const baseUrl = 'projects'

export { TAB_ITEM, baseUrl, getContents }
