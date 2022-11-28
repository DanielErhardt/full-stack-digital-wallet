import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type DependentCardProps = {
  id: string;
  username: string;
};

const DependentCard: FC<DependentCardProps> = ({ username, id }) => (
  <Link
    to={`/transactions/${id}`}
  >
    {username}
  </Link>
);

export default DependentCard;
