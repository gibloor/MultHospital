interface PagesList {
  access: string,
  name: string,
};

const pagesList:PagesList[] = [
  {
    name: 'multfilms',
    access: 'close',
  },
  {
    name: 'aboutProject',
    access: 'free',
  },
  {
    name: 'setting',
    access: 'free',
  },
  {
    name: '',
    access: '',
  }
];

export default pagesList;