import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import * as actions from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="name"
        value={filters}
        onChange={e => {
          dispatch(actions.filter(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
