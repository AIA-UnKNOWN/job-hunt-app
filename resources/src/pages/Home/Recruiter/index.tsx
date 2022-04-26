import useRecruiterPage from './hook';

const RecruiterPage = () => {
  const { renderPage } = useRecruiterPage();

  return (
    <>
      {renderPage()}
    </>
  );
}

export default RecruiterPage;