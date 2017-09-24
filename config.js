const __DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

const __PORT__ = process.env.PORT || 3000;

const __PRODUCTION__ = process.env.NODE_ENV === 'production';


export {
  __DEVELOPMENT__,
  __PORT__,
  __PRODUCTION__,
};
