const initState = [
  {
    id: 1,
    name: 'Humberger',
    amount: 5,
    description: 'humbergerrrrr',
    img: '',
    spice: { muoi: 1, mam: 2 },
  },
  {
    id: 2,
    name: 'Bánh Mì',
    amount: 2,
    description: 'banh mi deyyyyyy',
    img: '',
    spice: {},
  },
  {
    id: 3,
    name: 'Bánh Bao',
    amount: 1,
    description: '',
    img: '',
    spice: { muoi: 2 },
  },
];

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      break;
    case 'delete':
      break;
    case 'update':
      break;
    default:
      return state;
  }
};
