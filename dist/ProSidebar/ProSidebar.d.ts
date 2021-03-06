import React from 'react';
export interface Props {
    collapsed?: boolean;
    rtl?: boolean;
    toggled?: boolean;
    width?: string | number;
    image?: string;
    className?: string;
    children?: React.ReactNode;
    breakPoint?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    available?: Array<string>;
    onToggle?: (value: boolean) => void;
}
export interface SidebarContextProps {
    collapsed: boolean;
    rtl: boolean;
    toggled: boolean;
    available: Array<string>;
}
export declare const SidebarContext: React.Context<SidebarContextProps>;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
