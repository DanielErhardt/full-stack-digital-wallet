import React, { useContext } from 'react';
import DependentCard from '../components/DependentCard';
import Header from '../components/Header';
import NGCashContext from '../context/NGCashContext';

const DependentsPage = () => {
  const { dependents } = useContext(NGCashContext);

  return (
    <main>
      <Header />
      {Object.entries(dependents as Record<string, string>).map(([depName, depId]) => (
        <DependentCard
          key={`dependent-${depName}`}
          username={depName}
          id={depId}
        />
      ))}
    </main>
  );
};

export default DependentsPage;
