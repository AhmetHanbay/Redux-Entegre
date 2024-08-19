import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, Button, View } from "react-native";
import { useDispatch } from "react-redux";  

const Primary = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();  

    const handleAdd = () => {
        dispatch({ type: 'ADD_NAME', payload: { name: text } });  
    };
    const handleClean = () => {
        dispatch({type : 'CLEAN_LIST'});
    }

    return (
        <SafeAreaView>
            <Text>Primary Screen</Text>
            <View style={{ 
                borderWidth: 1, 
                margin: 10, 
                padding: 5 
                }}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="İsim giriniz"
                />
            </View>
            <Button title="Ekle" onPress={handleAdd} />
            <Button title="Temizle" onPress={handleClean} />
        </SafeAreaView>
    );
}

export default Primary;
