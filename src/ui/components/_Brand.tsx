import cn from 'classnames';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.svg';

type Props = {
  url?: string;
  className?: string;
};

function Brand({ url, className }: Props) {
  return (
    <Link to={String(url)}>
      <img className={cn(className)} src={logo} alt="dti-epms" />
    </Link>
  );
}

Brand.defaultProps = {
  url: '/',
  className: 'h-8 w-auto',
};

export default Brand;
