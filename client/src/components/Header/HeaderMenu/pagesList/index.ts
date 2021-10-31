interface PagesList {
  access: string,
  name: string,
  link: string,
};

const pagesList:PagesList[] = [
  {
    name: 'Progres',
    link: '/progres',
    access: 'close',
  },
  {
    name: 'About project',
    link: '/aboutproject',
    access: 'free',
  },
  {
    name: 'Setting',
    link: '/setting',
    access: 'free',
  },
];

export default pagesList;