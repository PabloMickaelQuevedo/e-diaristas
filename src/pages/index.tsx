import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Userinformation from 'ui/components/data-display/UserInformation/Userinformation';
const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
        />
        <Userinformation 
        
        name={'Pablo Quevedo'}
        picture={'https://github.com/PabloMickaelQuevedo.png'}
        rating={5}
        description={'Rio Grande do Sul'}
        
        
        
        />

    </div>
  )
}

export default Home
