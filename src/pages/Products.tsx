import ButtonDefault from '../components/button-default/ButtonDefault';
import DefaultPage from '../config/layout/DefaultPage';

function Products() {
  function handleClick() {
    alert('Apertou no botao do products.');
  }

  return (
    <>
      <DefaultPage>
        <h1>Produtos</h1>
        <div style={{ textAlign: 'center' }}>
          <ButtonDefault label="Botão produto" action={handleClick} />
        </div>
      </DefaultPage>
    </>
  );
}

export default Products;
