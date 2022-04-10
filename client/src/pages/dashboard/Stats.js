import React, { useEffect } from 'react';
import { ChartsContainer, StatsContainer } from '../../components';
import Loading from '../../components/Loading';
import { useAppContext } from '../../context/appContext';

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
