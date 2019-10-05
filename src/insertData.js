import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
} from 'react-native'

import { db } from './config/config'

export const InsertData = () => {

    let [name, setName] = useState("")

    let addItem = item =>{
        db.ref('/items').push({
            name: name
        })
    }
    
    let handleSubmit = () =>{
        addItem(name);
        Alert.alert(name)
    }
    
    return(
        <View>
            <Text>Insert Name</Text>
            <TextInput 
                placeholder="Masukkan Nama"
                onChangeText={value=>setName(value)}
            />
            <Button 
                title={"Masukkan Data"}
                onPress={handleSubmit}
            />
        </View>
    )
}



//  InsertData