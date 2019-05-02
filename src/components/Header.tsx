import React from 'react';
interface IHeaderProps {
  title: string;
}
function Header(props: IHeaderProps) {
  const { title } = props;
  return (
    <div>
      <nav className="nav-wrapper light-blue darken-2">
        <a href="" className="brand-logo">
          {title}
        </a>
      </nav>
    </div>
  );
}

export default Header;
