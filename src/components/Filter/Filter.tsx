import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(event.target.value));
    }

    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={onFilterChange}
                placeholder="Filter contacts"
            />
        </div>
    );
};
