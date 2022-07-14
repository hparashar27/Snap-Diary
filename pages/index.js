import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import SnapList from '../components/Snaps/SnapList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Snaps</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React Snaps!'
        />
      </Head>
      <SnapList Snaps={props.Snaps} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       Snaps: DUMMY_SnapS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://Hparashar27:7300788823@cluster0.xs2pd.mongodb.net/Snaps?retryWrites=true&w=majority'
  );
  const db = client.db();

  const SnapsCollection = db.collection('Snaps');

  const Snaps = await SnapsCollection.find().toArray();

  client.close();

  return {
    props: {
      Snaps: Snaps.map((Snap) => ({
        title: Snap.title,
        address: Snap.address,
        image: Snap.image,
        id: Snap._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;