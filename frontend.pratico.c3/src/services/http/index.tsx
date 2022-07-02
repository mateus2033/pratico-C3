import axios from 'axios';

export async function getEmpresas(){
    const resposta = await axios.get('http://localhost:4000/empresas')
    .then((response)=>{
        return response
    } )
    if(resposta) return resposta;
    else return null;
}

export async function getFuncoes(){
    const resposta = await axios.get('http://localhost:4000/funcoes')
    .then((response)=>{
        return response
    } )
    if(resposta) return resposta;
    else return null;
}

export async function getColaboradores(){
    const resposta = await axios.get('http://localhost:4000/colaboradores')
    .then((response)=>{
        return response
    } )
    if(resposta) return resposta;
    else return null;
}