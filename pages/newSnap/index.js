//  this leads to the page - our-domain.com/Newmeetup

import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

 import NewSnapForm from "../../components/Snaps/NewSnapForm";

 function NewSnapPage (){
    const router = useRouter();

    async function AddSnapHandler (enterdSnapData){
        const response = await fetch ('/api/newSnap',{
            method : 'POST',
            body : JSON.stringify(enterdSnapData),
            headers: {
                'Content-Type' : 'application/json'
            }
      
        });
               // const body = await response.text();
        // console.log(body);
        const data = await response.json();
        console.log(data);
        router.push('/');
      }
       
    
    return(
            <Fragment>
              <Head>
                <title>Add a New Snap</title>
                <meta
                  name='description'
                  content='Add your own meetups and create amazing networking opportunities.'
                />
              </Head>
              <NewSnapForm onAddSnap={AddSnapHandler} />
            </Fragment>
        
    ) }
 


export default NewSnapPage; 