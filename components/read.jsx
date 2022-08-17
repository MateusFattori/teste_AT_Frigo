import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, orderBy, query, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import {app, database} from '../services/firebase';

//definir a coleção
const contato = collection(database, 'contato');

export default function Read(){

    //read
    const [lista, setLista] = useState([]);
    const read = ()=>{
        getDocs(query(contato, orderBy("nome")))
        .then((data)=>{
            setLista(data.docs.map((item)=>{
            return{...item.data(), id:item.id};
            }));
            
        });
    }

    //mostrar os documentos 
    useEffect(()=>{
        read();
    },[]);

    //excluir
    const deleteBtn = (id) =>{
      const documento = doc(database, "contato", id);
      deleteDoc(documento)
      .then(() =>{ read(); });
    }

    //update - mostrar contato selecionado
    const [ID, setID] = useState(null);
    const [contatoUnico, setContatoUnico] = useState({});
    const [mostrar, setMostrar] = useState(false);
    const [nome, SetNome] = useState("");
    const [compra, SetCompra] = useState("");
    const [validade, SetValidade ] = useState("");
    const [mensagem, SetMensagem] = useState("");

    const show = async(id) =>{
      setID(id)
      if(ID != null){
        const contatoSimples = doc(database, "contato", ID);
        const resultado = await getDoc(contatoSimples);
        setContatoUnico({...resultado.data(), id:resultado.id});
        SetNome(contatoUnico.nome);
        SetCompra(contatoUnico.compra);
        SetValidade(contatoUnico.validade);
        SetMensagem(contatoUnico.mensagem);
      }

      if(mensagem != "") setMostrar(true); //provisório????
    }

    useEffect(() =>{ show(); }, [ID]);

    const bt_cancelar = () =>{
      setMostrar(false);
      SetNome('');
      SetCompra('');
      SetValidade('');
      SetMensagem('');
      setID(null);
    }

    const bt_alterar = (id) =>{
      const contatoShow = doc(database, 'contato', id);
      updateDoc(contatoShow, {
        nome:nome,
        compra:compra,
        validade:validade,
        mensagem:mensagem
      })
      .then(() =>{
        SetNome('');
        SetCompra('');
        SetValidade('');
        SetMensagem('');
        setID(null);
        read();
        setMostrar(false);
      });

      const bt_descartar = (id)=>{
        const contatoShow = doc(database, 'contato', id);
        
      }

    }

    return(
        <>

          {mostrar ?(
            <div className='card-bonito'>
              <h3 className="text-center">ALTERAR</h3>

              {/* Nome */}
              <input type="text" placeholder="Nome" className="form-control" required onChange={event=>SetNome(event.target.value)} value={nome} /> <br/>
              
              {/* Compra */}
              <input type="date" placeholder="Compra" className="form-control" required onChange={event=>SetCompra(event.target.value)} value={compra} /> <br/>
              
              {/* Validade */}
              <input type="date" placeholder="Validade" className="form-control" required onChange={event=>SetValidade(event.target.value)} value={validade} /> <br/>
              
              {/* Mensagem */}
              <textarea placeholder="Mensagem" className="form-control" required onChange={event=>SetMensagem(event.target.value)} value={mensagem} ></textarea> <br/>
              
              {/* Botão */}
              <input type="submit" value="Salvar" className="btn btn-outline-dark form-control B" onClick={()=> bt_alterar(contatoUnico.id)} />
              <input type="submit" value="Cancelar" className="btn btn-outline-danger form-control B" onClick={bt_cancelar} />
            </div>
          ):(
            <></>
          )}

<div>


{lista.map((lista)=>{
  return(

    <>
    <div className="card-bonito">

      <div className="card-header bg-dark text-light">
        Id: {lista.id}
      </div>

      {/* info */}
      <div  className="card-body">
        <p className="card-title text-info">Nome: {lista.nome}</p>
        <p className="card-subtitle">Compra: {lista.compra}</p>
        <p className="card-subtitle">Validade: {lista.validade}</p> 
        <p className="card-subtitle">Mensagem: {lista.mensagem}</p>
      </div>

      {/* botoes */}
      <div className="card-footer">
          <input type="button" value="Alterar" onClick={()=>show(lista.id)} className="btn btn-outline-warning form-control" />
        <div className="input-group">
          <input type="button" value="Excluir" onClick={()=>deleteBtn(lista.id)} className="btn btn-outline-danger form-control" />
          <input type="button" value="Decartado" onClick={()=>deleteBtn(lista.id)} className="btn btn-outline-danger form-control" />
        </div>
      </div>
    </div>
    
    </>
  )
})}
</div>

        </>
    );
}