export default [
  {
    title: 'Dashboard',
    route: '/',
    active: false,
    icon: 'fa-solid fa-house fa-5x',
    index: 'home'
  },
  {
    title: 'Portals',
    route: '/posts',
    active: false,
    icon: 'fa-solid fa-newspaper fa-5x',
    index: 'post',
    children: [
      {
        title: 'Configuration',
        route: '/all-posts',
        active: false,
        icon: 'fa-solid fa-newspaper fa-5x',
        index: 'all-post',
        children: []
      },
      {
        title: 'CronJob',
        route: '/add-new',
        active: false,
        icon: 'fa-solid fa-newspaper fa-5x',
        index: 'add-new',
        children: []
      },
      {
        title: 'Categories',
        route: '/categories',
        active: false,
        icon: 'fa-solid fa-newspaper fa-5x',
        index: 'category',
        children: []
      }
    ]
  },
  {
    title: 'Configurations',
    route: '/config',
    active: false,
    icon: 'fa-solid fa-gear',
    children: [
      {
        title: 'Service',
        route: '/config-service',
        active: false,
        icon: 'fa-solid fa-photo-film',
        children: []
      },
      {
        title: 'Add new',
        route: '/media-add-new',
        active: false,
        icon: 'fa-solid fa-photo-film'
      }
    ]
  }
]
