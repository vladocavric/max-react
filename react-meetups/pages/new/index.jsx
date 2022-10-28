import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
export default function NewMeetupPage(params) {
    const router = useRouter()
    async function addMeetupHandler(meetupData) {
        const response = await fetch('/api/new', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)

        router.push('/')
    }
    return<NewMeetupForm onAddMeetup={addMeetupHandler}/>
}