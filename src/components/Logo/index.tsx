import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';

export function Logo(): JSX.Element {
    return (
        <View style={styles.logo}>
            <Image
                style={styles.logoImg}
                source={require("../../../assets/welcome_logo.png")}
            />
        </View>
    )
}
