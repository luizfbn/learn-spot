import React, { useEffect, useState } from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select'
import axios from 'axios'

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}

interface Item {
  label: string
  value: string
}

const Home = () => {
  const [selectedUf, setSelectedUf] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  const [ufs, setUfs] = useState<Item[]>([])
  const [cities, setCities] = useState<Item[]>([])

  const navigation = useNavigation()

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
      let ufInitials: Item[] = []
      res.data.map(uf => ufInitials.push({ label: uf.sigla, value: uf.sigla }))

      setUfs(ufInitials)
    })
  }, [])

  useEffect(() => {
    if (selectedUf === '0') return

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(res => {
        let cityNames: Item[] = []
        res.data.map(city => cityNames.push({ label: city.nome, value: city.nome }))

        setCities(cityNames)
    })
  }, [selectedUf])

  function handleNavigateToPoints() {
    navigation.navigate('Points', { uf: selectedUf, city: selectedCity })
  }

  return (
      <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container}
          imageStyle={{ width: 274, height: 368 }}
      >
          <View style={styles.main}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={styles.title}>Seu marketplace de aulas</Text>
              <Text style={styles.description}>Ajudamos alunos a encontrarem professores de forma eficiente</Text>
          </View>
          <View style={styles.footer}>
            <RNPickerSelect 
              style={pickerSelectStyles}
              placeholder={{label: "Digite a UF", value: null}}
              value={selectedUf}
              onValueChange={ value => { setSelectedUf(String(value)) } }
              items={ufs}
            />

            <RNPickerSelect 
              disabled={selectedUf === '0'}
              style={pickerSelectStyles}
              placeholder={{label: "Digite a cidade", value: null}}
              value={selectedCity}
              onValueChange={ value => { setSelectedCity(String(value)) } }
              items={cities}
            />

            <RectButton style={styles.button} onPress={ handleNavigateToPoints }>
                <View style={styles.buttonIcon}>
                    <Text>
                        <Icon name="arrow-right" color="#FFF" size={24} />
                    </Text>
                </View>
                <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#5D576B',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#F7567C',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    paddingRight: 30,
  },
  inputAndroid: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    paddingRight: 30,
  }
})

export default Home