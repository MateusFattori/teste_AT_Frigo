
import { useState } from "react";
import {app, database} from '../services/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

//definir a coleção
const contato = collection(database, 'contato');


export default function Cadastrar(){

    //hooks
    const [nome, SetNome] = useState('');
    const [compra, SetCompra] = useState('');
    const [validade, SetValidade] = useState('');
    const [mensagem, SetMensagem] = useState('');

    //create
    const create = () => {
        addDoc(contato, {

            nome:nome,
            compra:compra,
            validade:validade,
            mensagem:mensagem

            }).then(()=>{

                SetNome('');
                SetCompra('');
                SetValidade('');
                SetMensagem('');
                window.location.reload();
                read();

             });
    }
    

    return(
        <>
            <div>

            <h3 className="text-center"> Cadastrar </h3> 
            
            {/* Nome */}
            <input type="text" placeholder="Nome do produto" className="form-control" required onChange={event=>SetNome(event.target.value)} value={nome} />
            
            <br/>
            
                <div className="cova">

                    <div className="dia">

                        {/* Compra */}
                        <p className="text-center">Dia da compra</p>
                        <input type="date" placeholder="Dia da compra" className="form-control" required onChange={event=>SetCompra(event.target.value)} value={compra} /> 

                    </div>
                
                    <div className="dia">

                        {/* Validade */}
                        <p className="text-center">Validade do produto</p>
                        <input type="date" placeholder="Validade do produto" className="form-control" required onChange={event=>SetValidade(event.target.value)} value={validade} /> 
                
                    </div>

                </div>

                <br/>
                        
                {/* Mensagem */}
                <textarea placeholder="Mensagem" className="form-control" required onChange={event=>SetMensagem(event.target.value)} value={mensagem} ></textarea> 
            
                <br/>
            
                {/* Botão */}
                <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={create} />
            
            </div>
        
        </>
    );
}