import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage({ meetups }) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta name='description' description='lorem ipsum' />
			</Head>
			<MeetupList meetups={meetups} />;
		</>
	);
	// return<h1>some</h1>
}

// export async function getServerSideProps(context) {
// 	// fetch data from API
// 	const req = context.req
// 	const res = context.res
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
	// fetch data from API

	const client = await MongoClient.connect(
		process.env.REACT_APP_MONGO_API_URL
	);
	const db = client.db('meetups');
	const meetupCollection = db.collection('meetups');
	const meetups = await meetupCollection.find().toArray();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1, // on how many sec should page rerender
	};
}

export default HomePage;
