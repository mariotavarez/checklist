// React
import { LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface RoutesModel {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
