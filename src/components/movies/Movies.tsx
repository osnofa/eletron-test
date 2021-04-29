/* #region  imports */
import useAxios from 'axios-hooks';
import { Field, Form, Formik } from 'formik';
import { url } from 'node:inspector';
import FilmList from './list/FilmList';
/* #endregion */

/* #region  constants */
const baseUrl = 'http://www.omdbapi.com/';
const apikey = '6a2d3120';

const initialValues = {
  name: '',
};
/* #endregion */

interface MoviesProps {}

const Movies: React.FC<MoviesProps> = () => {
  const [{ data, loading, error, response }, fetchMovies] = useAxios({
    url: baseUrl,
    params: {},
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await fetchMovies({
        url: baseUrl,
        params: { apikey: apikey, s: values.name },
      });
      console.info('response ==> ', response);
    } catch (error) {
      console.info('ERROR ==> ', error);
    }
    /*
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      console.info('submitted values ==> ', values);
      setSubmitting(false);
    }, 400);
    */
  };

  return (
    <>
      <h1>Movies</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <FilmList films={data ? data.Search : []} />
    </>
  );
};

export default Movies;
