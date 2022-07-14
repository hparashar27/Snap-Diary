import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import SnapDetail from '../../components/Snaps/SnapDetail';

function SnapDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.SnapData.title}</title>
        <meta name='description' content={props.SnapData.description} />
      </Head>
      <SnapDetail
        image={props.SnapData.image}
        title={props.SnapData.title}
        address={props.SnapData.address}
        description={props.SnapData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://Hparashar27:7300788823@cluster0.xs2pd.mongodb.net/Snaps?retryWrites=true&w=majority'
  );
  const db = client.db();

  const SnapsCollection = db.collection('Snaps');

  const Snaps = await SnapsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: Snaps.map((Snap) => ({
      params: { SnapId: Snap._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single Snap

  const SnapId = context.params.SnapId;

  const client = await MongoClient.connect('mongodb+srv://Hparashar27:7300788823@cluster0.xs2pd.mongodb.net/Snaps?retryWrites=true&w=majority'
  );
  const db = client.db();

  const SnapsCollection = db.collection('Snaps');

  const selectedSnap = await SnapsCollection.findOne({
    _id: ObjectId(SnapId),
  });

  client.close();

  return {
    props: {
      SnapData: {
        id: selectedSnap._id.toString(),
        title: selectedSnap.title,
        address: selectedSnap.address,
        image: selectedSnap.image,
        description: selectedSnap.description,
      },
    },
  };
}

export default SnapDetails;