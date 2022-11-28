import React, { useContext } from 'react';
import DependentCard from '../components/DependentCard';
import Header from '../components/Header';
import List from '../components/List';
import NGCashContext from '../context/NGCashContext';

const DependentsPage = () => {
  const { dependents } = useContext(NGCashContext);

  return (
    <main>
      <Header />
      <List>
        {Object.entries(dependents as Record<string, string>).map(([depName, depId]) => (
          <DependentCard
            key={`dependent-${depName}`}
            username={depName}
            id={depId}
          />
        ))}
      </List>
    </main>
  );
};

export default DependentsPage;
