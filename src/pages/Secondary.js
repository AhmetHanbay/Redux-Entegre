import React from "react";
import { Text , SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";

const Secondary = () => {

    const list = useSelector(s => s.nameList);
    return(
        <SafeAreaView>
            <Text>Secondary Screen</Text>
            <FlatList 
            keyExtractor={(_, index) => index.toString()}
            data={list} 
            renderItem={({item}) => <Text>{item}</Text>}/>
        </SafeAreaView>
    );
}

export default Secondary;