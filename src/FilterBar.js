import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native'
import Category from './components/Explore/Category'
import { Mainbar } from './Mainbar'
import { Mainbar1 } from './Mainbar1'
import { Test } from './Test'

export function Filterbar () {

    const [count , setCount, setCount2] = useState(<Mainbar />);
    const [show ] = useState(0);
    return(
        <View>
        <View style={styles.filtervbar}>
            <ScrollView
            scrollEventThrottle={16}
            >
                <View style={ styles.filtervbar}>
                <View style={styles.filterinbar}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity
                            onPress={() => setCount(Mainbar())}
                            >
                            <Category 
                            name='Еда'
                            />
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => setCount(Mainbar1())}>
                            <Category 
                            name='Лекарства'/>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => setCount(<Text>Урааа</Text>)}>
                            <Category 
                            name='Товары'/>
                            </TouchableOpacity>
                            <Category 
                            name='Услуги'/>
                            <Category 
                            name='Маски'/>
                            <Category 
                            name='Правильное питание'/>
                            <Category 
                            name='Кино1111'/>
                            
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View>
                
                <Button
                title='knopka'
                onPress={() => setCount(Mainbar1())}
                ></Button>
                <Button
                title='knopka1'
                onPress={() => setCount(Mainbar())}
                ></Button>
            </View>
        </View>
        {count}
        </View>
    )
}

const styles = StyleSheet.create({
    filtervbar:{
      backgroundColor: 'white',
    },
    filterinbar:{
      marginTop: 15,
      height: 50,
    }
});