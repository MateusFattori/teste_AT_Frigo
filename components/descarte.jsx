import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, orderBy, query, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import {app, database} from '../services/firebase';

const Descarte = props =>{
    const [nome, SetNome] = useState(props.nome);
    const [compra, SetCompra] = useState(props.compra);
    const [validade, SetValidade] = useState(props.validade);
    const [mensagem, SetMensagem] = useState(props.mensagem);
};

Descartar.getInitialProps = async props =>{
    return { some,props }
};

export default Descarte