export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    href?: string;
    children?: NavItem[];
  }
  