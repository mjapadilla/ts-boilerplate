interface IProps {
  key: string;
  value?: string | object;
}

const storage = {
  get: (key = '', value = {}): IProps => {
    return JSON.parse(sessionStorage.getItem(key) as string) || value;
  },
  set: (key = '', value = {}) => {
    const newValue = JSON.stringify(value);
    sessionStorage.setItem(key, newValue);
  },
  remove: (key = '') => {
    sessionStorage.removeItem(key);
  },
  clear: () => {
    sessionStorage.clear();
  },
};

export default storage;
