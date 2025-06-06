import { Button } from '@react-navigation/elements';
import axios from 'axios';
import React, { useState } from 'react';
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

type CEP = {
  cep: string
  logradouro:string,
  complemento: string,
  unidade: string,
  bairro: string,
  localidade: string,
  uf: string,
  estado: string,
  regiao: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

export const ConsultaCep = () => {
    const [data, setData] = useState<CEP>();
    const [cep, onChangeCep] = React.useState('');




    const getCep = async () => {
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                setData(response.data);
            })
    };

    console.log(cep)

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Consultar Cep</Text>
            <TextInput placeholder='Insira O CEP Desejado' style={styles.styleInput} onChangeText={onChangeCep} value={cep} />
            <Button onPress={getCep}>Consultar</Button>
            <TextInput style={styles.styleInput} value={data?.bairro} />
            <TextInput style={styles.styleInput} value={data?.estado} />
            <TextInput style={styles.styleInput} value={data?.localidade} />
            <TextInput style={styles.styleInput} value={data?.logradouro} />
        </View>
    );
};