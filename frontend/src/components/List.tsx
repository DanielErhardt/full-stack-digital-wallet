import React, { FC } from 'react';

type ListProps = {
  children: React.ReactNode;
};

const List: FC<ListProps> = ({ children }) => (
  <div className="list">
    {children}
  </div>
);

export default List;
