import { Question1 } from '../components/Question1';
import { Question2 } from '../components/Question2';
import { Question3 } from '../components/Question3';

const Home = () => {
  return (
    <>
      <h1 className="p-10">React Questions</h1>
      <Question1 />
      <Question2 />
      <Question3 />
    </>
  );
};

export default Home;
