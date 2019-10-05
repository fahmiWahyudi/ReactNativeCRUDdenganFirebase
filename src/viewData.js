import React, { useState, useEffect } from 'react'
import{
    View,
    Text
} from 'react-native'
import { db } from './config/config'

export const ViewData = () => {

    let dataFirebase = db.ref('items')
    const [data, setData] = useState()

    useEffect(() => {
        dataFirebase.on('value', snapshot=>{
            let data = snapshot.val()
            let item = Object.values(data)
            setData(item[0])
        })
    }, [setData])
    return(
        <View>
            {data != null?(
                <Text>{data.name}</Text>
            ):(
                <Text>Loadiing.....</Text>
            )}
        </View>
    )
}
