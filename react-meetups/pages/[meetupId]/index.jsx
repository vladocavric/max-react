import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';


export default function MeetupDetailsPage(props) {
	return (
		<>
			<Head>
				<title>{props.meetup.title}</title>
				<meta name='description' description='lorem ipsum' />
			</Head>
			<MeetupDetail {...props.meetup} />
		</>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		process.env.REACT_APP_MONGO_API_URL
	);
	const db = client.db('meetups');
	const meetupCollection = db.collection('meetups');
	const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
	client.close();
	const paths = meetups.map((meetup) => ({
		params: { meetupId: meetup._id.toString() },
	}));

	return {
		fallback: 'blocking', 
		// if true it will try to generate the page event if in paths id is not defined,
		// otherwise if false if if path is not defined it wil throw 404

		paths,
	};
}

export async function getStaticProps(context) {
	// fetch data from API

	const meetupId = context.params.meetupId;
	const client = await MongoClient.connect(
		process.env.REACT_APP_MONGO_API_URL
	);
	const db = client.db('meetups');
	const meetupsCollection = db.collection('meetups');
	const meetupRow = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});
	client.close();
	const meetup = {
		id: meetupRow._id.toString(),
		title: meetupRow.title,
		address: meetupRow.address,
		image: meetupRow.image,
		description: meetupRow.description,
	};
	return {
		props: {
			meetup
		},
		revalidate: 3600, // on how many sec should page rerender
	};
}
