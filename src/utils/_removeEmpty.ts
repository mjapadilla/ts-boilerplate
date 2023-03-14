import { isEmpty, isUndefined, omitBy } from 'lodash';

const removeEmpty = (obj: object) =>
  omitBy(obj, (x: object | string) => isEmpty(`${x}`) || isUndefined(`${x}`));

export default removeEmpty;
