import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { MapControls } from './constants';

interface SearchFormField {
  address: string;
}

const SearchForm = () => {
  const { register, handleSubmit, formState } = useForm<SearchFormField>({
    defaultValues: {
      address: '',
    },
  });

  const onSubmit: SubmitHandler<SearchFormField> = data => data;

  return (
    <>
      <form className="search-form" action="submit">
        <label htmlFor="address">
          <input type="text" placeholder="some text" name="addres" />
        </label>
        <button type="submit">
          <img src="" alt="submit" />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
