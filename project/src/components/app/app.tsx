import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}: AppScreenProps): JSX.Element {
  return <MainScreen placeCardsCount={placeCardsCount}/>;
}

export default App;
