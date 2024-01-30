import { Container } from '@/components/shared';
import CadastraEmpresa from '@/components/template/sebrae/CadastraEmpresa';
import CadastraProposta from '@/components/template/sebrae/CadastraProposta';
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    margin: '0 auto',
  },
};

const CadastraEmpresaFormulario = () => {

  if(1===1) {
  
    return (
      <div className='flex justify-center items-center  sm:w-90'>
        <CadastraProposta/>
      </div>
    
    )
  }

  return (
      <Container>
        <CadastraEmpresa />
      </Container>
  );
}

export default CadastraEmpresaFormulario;
