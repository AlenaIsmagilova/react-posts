import type { ComponentType, FunctionComponent } from "react";
import { HashRouter } from "react-router-dom";

export function withRouter(WrappedComponent: ComponentType): FunctionComponent {
  return function wrappedComponenet() {
    return (
      <HashRouter>
        <WrappedComponent />
      </HashRouter>
    );
  };
}
