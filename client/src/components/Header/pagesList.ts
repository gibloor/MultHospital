interface PagesList {
  access: string,
  name: string,
  link: string,
}

const pagesList:PagesList[] = [
  {
    access: 'close',
    name: 'Progres',
    link: '/progres'
  },
  {
    access: 'free',
    name: 'About project',
    link: '/aboutproject'
  },
  {
    access: 'free',
    name: 'Setting',
    link: '/setting'
  },
]

export default pagesList