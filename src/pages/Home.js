import {useState, useEffect} from 'react';
import {coinMarketsApi} from '../api/api'
import {Table} from '../components/Table'

export const Home =  () =>  {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  
  const getCoinMarkets = async () => {
    try{
      const res = await coinMarketsApi.getCoinMarkets();
      setData(res.data);
      setLoading(true);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect (() => {
    getCoinMarkets();
  }, [] );

  const searchFilter = data.filter (item => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
  return(
    <div className='container mt-5'>
      {loading ? (
        <div className='row'>
          <div className='col-12'>
            <input className='form-control  mb-4 ' placeholder='Search crypto name' value={search} onChange = {e => setSearch(e.target.value)}/>
            {search.length > 0 ?(
             <>
              {searchFilter.length > 0 ? (
                <Table data={searchFilter}/>
              ):(
                <div className='alert alert-danger text-center'>
                  No data found
                </div>
              )
            }
             </>
             
            ):(
              <Table data={data}/>
            )}
          </div>

        </div>
      ): (
        <div className='d-flex align-items-center justify-content-center' style={{height: '80vh'}}>
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) 
     }
    </div>
  ) ;
}


