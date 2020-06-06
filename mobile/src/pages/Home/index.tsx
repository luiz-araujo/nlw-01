import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Picker,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import axios from "axios";

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const navigation = useNavigation();
  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("0");
  function handleNavigateToPoints() {
    navigation.navigate("Points", { selectedUf, selectedCity });
  }

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);

        const teste = ufs.map((uf) => ({
          label: uf,
          value: uf,
        }));
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("../../assets/home-background.png")}
          style={styles.container}
          imageStyle={{ width: 274, height: 368 }}
        >
          <View style={styles.main}>
            <Image source={require("../../assets/logo.png")} />
            <View>
              <Text style={styles.title}>
                Seu marketplace de coleta de resíduos.
              </Text>
              <Text style={styles.description}>
                Ajudamos pessoas a encontrarem pontos de coleta de forma
                eficiente.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Picker
              onValueChange={(item) => setSelectedUf(item)}
              selectedValue={selectedUf}
              style={styles.input}
            >
              <Picker.Item label={"Selecione um estado"} value="0" />
              {ufs.sort().map((uf) => {
                return <Picker.Item key={uf} label={uf} value={uf} />;
              })}
            </Picker>

            <Picker
              onValueChange={(item) => setSelectedCity(item)}
              selectedValue={selectedCity}
              style={styles.input}
            >
              <Picker.Item label={"Selecione uma cidade"} value="0" />
              {cities.map((city) => (
                <Picker.Item key={city} label={city} value={city} />
              ))}
            </Picker>

            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
              <View style={styles.buttonIcon}>
                <Text>
                  {" "}
                  <Icon name="arrow-right" color="#FFF" size={24} />{" "}
                </Text>
              </View>
              <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
