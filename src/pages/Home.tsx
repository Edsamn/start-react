import ButtonDefault from '../components/button-default/ButtonDefault';
import DefaultPage from '../config/layout/DefaultPage';

function Home() {
  function handleClick() {
    alert('Apertou no botao da home.');
  }

  return (
    <>
      <DefaultPage>
        <h1>Home</h1>
        <div style={{ textAlign: 'center' }}>
          <ButtonDefault label="Botão Home" action={handleClick} />
        </div>
      </DefaultPage>
    </>
  );
}

export default Home;
