import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Cookies from 'js-cookie';
import useMyJobPostings from '@screens/MyJobPostings/hook';

const usePostJob = () => {
  const { getMyJobPostings } = useMyJobPostings();
  const [postButtonText, setPostButtonText] = useState('Post');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [formError, setFormError] = useState({});

  const validate = () => {
    const error = {};
    const SUFFIX_MESSAGE = 'field is required';

    if (title === '') error.title = `Title ${SUFFIX_MESSAGE}`;
    if (description === '') error.description = `Description ${SUFFIX_MESSAGE}`;
    if (minSalary === '') error.minSalary = `Min Salary ${SUFFIX_MESSAGE}`;
    if (maxSalary === '') error.maxSalary = `Max Salary ${SUFFIX_MESSAGE}`;

    setFormError(error);
    return Object.keys(error).length === 0;
  }

  const postJob = async () => {
    if (!validate()) return;
    setPostButtonText('Posting...');
    try {
      const response = await fetch('/api/recruiter/job/post', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify({
          title,
          description,
          min_salary: minSalary,
          max_salary: maxSalary
        })
      });
      getMyJobPostings(Cookies.get('token'));
      clearInputs();
      toast('Posted a job', {
        position: "top-center",
        autoClose: 1000,
      });
    } catch(error) {
      console.error(error);
    } finally {
      setPostButtonText('Post');
    }
  }

  const clearInputs = () => {
    setTitle('');
    setDescription('');
    setMinSalary('');
    setMaxSalary('');
  }

  return {
    postButtonText, setPostButtonText,
    title, setTitle,
    description, setDescription,
    minSalary, setMinSalary,
    maxSalary, setMaxSalary,
    formError,
    postJob
  }
}

export default usePostJob;