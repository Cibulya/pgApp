import { useForm, SubmitHandler } from 'react-hook-form';
import { MapControls } from '../../constants/map-constants';
import { useAppDispatch } from '../../hooks/redux-hook';
import { findPlaygrouns } from '../../redux/slices/playground-slice';

interface SearchFormField {
  address: string;
}

const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormField>({
    defaultValues: {
      address: '',
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SearchFormField> = data => {
    dispatch(findPlaygrouns(data.address));
  };

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="search-form-label" htmlFor="address">
          <input
            {...register('address')}
            className="search-form-input"
            type="text"
            placeholder="Search location..."
            name="address"
            id="address"
          />
        </label>
        <button className="search-form-button" type="submit">
          <img src={MapControls.find} alt="submit" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
