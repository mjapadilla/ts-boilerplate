import { req, $req } from './req';
import QueryProvider, {
  Hydrate,
  useQuery,
  END_POINT,
  TOKEN_KEY,
  dehydrate,
  useMutation,
  queryClient,
} from './store';

export {
  req,
  $req,
  Hydrate,
  useQuery,
  dehydrate,
  TOKEN_KEY,
  END_POINT,
  useMutation,
  queryClient,
};

export default QueryProvider;
