import Head from 'next/head';

//importar components
import Cadastrar from "../components/cadastrar";

export default function Home() {

  return (
    <>
      <Head>
        <title> Crud Simples com Firestore </title>
      </Head>

      <main className="container">

        <div className="row">

          <a href="/alterar"><button className='A'>Ver produtos</button></a>

          <div className="borda"> 
            <Cadastrar></Cadastrar>
          </div>

        </div>

      </main>
    </>
  );
}
