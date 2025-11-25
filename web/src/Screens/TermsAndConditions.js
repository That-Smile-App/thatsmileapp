import {useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';

function TermsAndConditions() {
  const [body, setBoady] = useState('');
  const [loading, setLoading] =useState(false)

  useEffect(() => {
    setLoading(true)
const apiUrl = 'https://smile-app-19915.botics.co/modules/terms-and-conditions/';
    const headers = {
        'Content-Type': 'application/json'}

    axios.get(apiUrl, {headers})
      .then(response => {
        setBoady(response?.data[0]?.body)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false)
      });
  }, []);

  return (
    <>
      <div style={{minHeight: '100vh'}} className="gradient-background">
      
        {loading ? <div style={{paddingTop: "40vh"}}><div className="spinner"></div> </div> : <div class="px-5 pt-5">
          <div class="col-md-10 term-condition" dangerouslySetInnerHTML={{__html: body}} />
        </div>}
        
      </div>
    </>
  );
}

export default TermsAndConditions;
