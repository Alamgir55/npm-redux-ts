import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
//import {useTypedSelector} from '../hooks/useTypedSelector';

const RespositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const state = useSelector((state: any) => state.respositories)
  //const {data, error, loading} = useTypedSelector((state) => state.respositories);
  console.log(state);
  
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    searchRepositories(term);
  } 

  return (
    <div>
      <form onSubmit={() => onSubmit} >
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {/* {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data} */}
    </div>
  )
}

export default RespositoriesList;