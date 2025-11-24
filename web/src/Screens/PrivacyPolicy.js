import {useEffect, useState} from 'react';
import '../App.css';
import Header from '../Components/Header';
import axios from 'axios';

function PrivacyPolicy() {
  const [body, setBoady] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
const apiUrl = 'https://smile-app-19915.botics.co/modules/privacy-policy/';
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
      <Header />
      <div style={{minHeight: '100vh'}} className="gradient-background">
      {loading ? <div style={{paddingTop: "40vh"}}><div className="spinner"></div> </div> : <div class="px-5 pt-5">
          <div class="col-md-10 privacy-policy  privacy" dangerouslySetInnerHTML={{__html: body}} />
        </div>}
      </div>
    </>
  );
}

export default PrivacyPolicy;
