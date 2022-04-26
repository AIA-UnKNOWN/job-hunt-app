import useApplicantPage from './hook';

const ApplicantPage = () => {
  const { renderPage } = useApplicantPage();

  return (
    <>
      {renderPage()}
    </>
  );
}

export default ApplicantPage;