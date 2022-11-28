import React from 'react';
import { Text, View } from 'react-native';
import { env } from '../../../enviorment';
import { SCREEN_WIDTH } from '../../../utils/constants';
import Button from '../../components/Button';
import { Logo } from '../../components/Logo';

import styles from './styles';

const WelcomeScreen: React.FC = () => {
  
  return (
    <View style={styles.container} >
      <Logo />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.welcome}>Seja bem vindo {'\n'}Entregador(a)!</Text>
        <Text style={styles.subTitle}>Faça login para continuar</Text>

        <Button
          style={{ marginTop: SCREEN_WIDTH / 24 }}
          mode="outlined-white"
          title="Fazer login"
          color="primary"
          direction="row"
          onPress={() => {
            console.log('Precionei pae')
            // setLogEventAnalytic("LoginWelcomeButton");
            // navigation.navigate("Login");
          }}
        />
      </View>
      <Text>
        {env.VERSION_WITH_BUILD}
      </Text>
    </View>
  )
}

export default WelcomeScreen;