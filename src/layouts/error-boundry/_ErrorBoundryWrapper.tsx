import { Component, ErrorInfo, ReactNode } from 'react';

import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundryWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.warn('Uncaught error:', error, errorInfo); // eslint-disable-line
  }

  public render() {
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="fixed bg-white z-50 inset-0 w-screen h-screen bg-opacity-100">
          <div className="w-full h-full bg-white bg-opacity-100">
            <div className="flex flex-col justify-center items-center h-full gap-12">
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold">Internal Server Error</div>
                <div className="font-light text-sm">
                  Sorry, something went wrong in our end
                </div>

                <Link to="/">
                  <button className="btn primary md !mt-5 px-5" type="button">
                    Go to homepage
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundryWrapper;
