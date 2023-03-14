type TParams = {
  transform: object;
  duration: number;
  onSuccess: () => void;
};

const wait = (t: number) =>
  new Promise((r) => {
    setTimeout(r, t);
  });

const post = async ({ transform, duration = 2000, onSuccess }: TParams) => {
  await wait(duration);
  if (onSuccess) {
    onSuccess();
  }
  return transform;
};

const get = async ({ transform, duration = 2000, onSuccess }: TParams) => {
  await wait(duration);
  if (onSuccess) {
    onSuccess();
  }
  return transform;
};

const put = async ({ transform, duration = 2000, onSuccess }: TParams) => {
  await wait(duration);
  if (onSuccess) {
    onSuccess();
  }
  return transform;
};

const remove = async ({ transform, duration = 2000, onSuccess }: TParams) => {
  await wait(duration);
  if (onSuccess) {
    onSuccess();
  }
  return transform;
};

const patch = async ({ transform, duration = 2000, onSuccess }: TParams) => {
  await wait(duration);
  if (onSuccess) {
    onSuccess();
  }
  return transform;
};

export { post, get, put, patch, remove };
