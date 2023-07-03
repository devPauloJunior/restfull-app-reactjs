import Redirect from './Components/Redirect';
import { UserContextProvider } from './context/UserContext';

const App = () => {
  return (
    <>
      <UserContextProvider>
          <Redirect />
      </UserContextProvider>
    </>
  );
}

export default App;
