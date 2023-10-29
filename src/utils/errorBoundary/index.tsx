import React, { Component, PropsWithChildren, ReactNode } from "react";
import ErrorPage from "../../pages/Error";

export type ErrorState = {
  message: string | null;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true, error });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorPage
          error={{
            message: this.state.error ? this.state.error.toString() : null,
          }}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
