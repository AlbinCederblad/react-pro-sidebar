import React from 'react';
export declare type IconShapeType = 'square' | 'round' | 'circle';
export interface Props {
    className?: string;
    children?: React.ReactNode;
    iconShape?: IconShapeType;
    popperArrow?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
