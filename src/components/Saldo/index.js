import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { WARNA_UTAMA } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo : </Text>
                    <Text style={styles.valueSaldo}>Rp.100.000</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelPoint}>Antar Point : </Text>
                    <Text style={styles.valuePoint}>100 Points</Text>
                </View>
            </View>
            <View style={styles.butttonAksi}>
            <ButtonIcon title="Add Saldo"/>
            <Gap width={10}/>
            <ButtonIcon title="Get Point"/>
            </View>
        </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 30,
        marginRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginTop: -windowHeight * 0.09,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informasiSaldo: {
        width : '60%',
    },
    labelSaldo : {
        fontsize : 20, 
        fontFamily : 'TitilliumWeb-regular'
    }, 
    valueSaldo : {
        fontsize : 20, 
        fontFamily : 'TitilliumWeb-Bold'
    }, 
    labelPoint : {
        fontsize : 12, 
        fontFamily : 'TitilliumWeb-regular'
    }
    , 
    valuePoint : {
        fontsize : 12, 
        fontFamily : 'TitilliumWeb-Bold',
        color : WARNA_UTAMA
    },
    butttonAksi : {
        flex : 1 ,
        flexDirection : 'row',
        justifyContent : 'flex-end'
    }
    
})