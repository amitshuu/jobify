import React, { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAppContext } from '../context/appContext';
import Jobs from './Jobs';
import Loading from './Loading';
import PageBtnContainer from './PageBtnContainer';
const JobsContainer = () => {
  const {
    jobs,
    totalJobs,
    getJobs,
    isLoading,
    searchStatus,
    searchType,
    search,
    numOfPages,
    sort,
    page,
  } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [page, searchStatus, searchType, search, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length < 1) {
    return (
      <Wrapper>
        <h5>No jobs to display...</h5>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Jobs key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
