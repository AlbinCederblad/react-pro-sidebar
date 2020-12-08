import React, { forwardRef, LegacyRef, useContext } from 'react';
import classNames from 'classnames';
import { SidebarContext } from '../ProSidebar';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  active?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  firstchild?: boolean;
  popperarrow?: boolean;
  id?: string;
}

const MenuItem: React.ForwardRefRenderFunction<unknown, Props> = (
  { children, className, icon, active, prefix, suffix, firstchild, popperarrow, id, ...rest },
  ref,
) => {
  const menuItemRef: LegacyRef<HTMLLIElement> = (ref as any) || React.createRef<HTMLLIElement>();

  const { available } = useContext(SidebarContext);
  function isVisible(): Boolean {
    if (available.length === 0) return true;
    if (available.includes(id)) return true;
    return false;
  }

  return (
    <>
      {isVisible() ? (
        <li
          {...rest}
          ref={menuItemRef}
          className={classNames('pro-menu-item', className, { active })}
        >
          <div className="pro-inner-item" tabIndex={0} role="button">
            {icon ? (
              <span className="pro-icon-wrapper">
                <span className="pro-icon">{icon}</span>
              </span>
            ) : null}

            {prefix ? <span className="prefix-wrapper">{prefix}</span> : null}
            <span className="pro-item-content">{children}</span>
            {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
          </div>
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default forwardRef<unknown, Props>(MenuItem);
