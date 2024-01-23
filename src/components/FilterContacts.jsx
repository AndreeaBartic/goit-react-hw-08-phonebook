import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contacts/contactSlice';

const FilterContacts = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </>
  );
};
export default FilterContacts;
