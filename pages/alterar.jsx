import Read from "../components/read";
import Descarte from "../components/descarte"

export default function Aterar() {
        return(
            <>
                <main className="container">
                
                    <div className="row">
                    
                        <a href="/"><button className='A'>Cadastrar produto</button></a>

                
                    <div className="borda">
                    <h3 className="text-center">Exibir</h3>

                        <div className="cova">

                            <div>

                                <h5 className="text-center">Valido</h5>
                                <Read></Read>

                            </div>

                            <div>

                                <h5 className="text-center">Descarte</h5>
                                <Read></Read>

                            </div>

                        </div>

                    </div>

                    </div>
                </main>
            </>
        )
}