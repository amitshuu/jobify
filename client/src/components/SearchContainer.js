import React from 'react';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useAppContext } from '../context/appContext';
import { FormRow } from '../components';
import FormRowSelect from './FormRowSelect';
const SearchContainer = () => {
  const {
    search,
    searchStatus,
    searchType,
    sortOptions,
    isLoading,
    handleChange,
    statusOptions,
    jobTypeOptions,
    sort,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className='form'>
        <h4>Search form</h4>
        <div className='form-center'>
          <FormRow
            name='search'
            value={search}
            handleChange={handleSearch}
            type='text'
          />
          <FormRowSelect
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            type='submit'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
