/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import View from './theme/view';



function App(): JSX.Element {

    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: '#fff', height: '100%', paddingHorizontal: 20 }}>
                <View >
                    <View style={styles.header}>
                        <Image style={styles.LogoWrapper} resizeMode='contain' source={require('./images/DeBruce_logo.png')} />
                        <View style={styles.headerWrapper}>
                            <Text style={styles.link}>agilities.org</Text>
                            <Text style={styles.email}>info@debruce.org</Text>
                        </View>
                    </View>
                    <View >
                        <View style={styles.mainImageWrapper}>
                            <Image style={{ width: '100%', height: '100%' }} resizeMode='contain' source={require('./images/agile_logo.png')} />
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.title}>User Name:</Text>
                            <Text style={styles.value}>David Ellison</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.title}>Date Taken</Text>
                            <Text style={styles.value}>{Date()}</Text>
                        </View>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.title}>Result</Text>
                            <Text style={styles.value}>Click Here</Text>
                        </View>
                    </View>
                    <View style={styles.qrBox}>
                        <View style={styles.qrWrapper} >
                            <QRCode
                                value="Here's your Demo App ! @David Ellison "
                                size={200}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    LogoWrapper: {
        height: 100,
        width: 100,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headerWrapper: {
        paddingTop: 20
    },
    email: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ef4a23'
    },
    link: {
        fontSize: 14,
        fontWeight: '400',
        color: '#333'
    },
    mainImageWrapper: {
        height: 120,
        marginVertical: 30
    },
    infoWrapper: {
        paddingTop: 14
    },
    title: {
        fontSize: 14,
        color: '#333'
    },
    value: {
        fontSize: 16,
        color: '#ef4a23',
        fontWeight: '500'
    },
    qrBox: {
        marginVertical: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrWrapper: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 290,
        backgroundColor: '#ee314d',
        borderRadius: 29,

    }
});

export default App;
