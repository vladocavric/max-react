import { useState } from 'react';
import { useNavigate, redirect, useActionData } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const data = useActionData()
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [error, setError] = useState();
  const navigate = useNavigate();

  // async function submitHandler(event) {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     const formData = new FormData(event.target);
  //     const post = {
  //       title: formData.get('title'),
  //       body: formData.get('post-text'),
  //     };
  //     await savePost(post);
  //     navigate('/');
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setIsSubmitting(false);
  // }

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
      />
    </>
  );
}

export default NewPostPage;

export const action = async ({request}) => {
  const formData = await request.formData()
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  }

  try {
    await savePost(post)
  } catch (err) {
    if(err.status === 422) {
      return err
    }
    throw err
  }
  return redirect('/blog')
}
