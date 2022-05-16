import { StatusBar } from 'expo-status-bar';

import {SafeAreaView,  StyleSheet,TextInput,Image,TouchableOpacity,Modal,Text,View,ScrollView,Dimensions,Button,Alert} from 'react-native';
import { DataTable,Checkbox } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  // const [number, onChangeNumber] = React.useState(null);
  const [qty, setQty] = useState(1);
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(1);
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [selectTable, setselectTable] = useState('');
  const [checked, setChecked] =useState(false);
  const [checked1, setChecked1] =useState(false);
  const [checked2, setChecked2] =useState(false);
  const count=0



  return (

    <SafeAreaView style={styles.container}>
      
      <Text style={styles.titleText}>Food Calculator</Text>
      
      <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
      <View>
     
      <TextInput
        style={styles.inputText}
        placeholder="customer Name"
        value={customer}
        onChangeText={setCustomer}
        
  
        
        
      />
       <TextInput
        style={styles.inputText}
        placeholder="Customer Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
  
        
    
      />
      <Text style={styles.labelText}>Waiter Name</Text>
      <View>
      <Picker
      style={styles.pickerText}
        selectedValue={selectedValue}
       
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Imran" value="Imran" />
        <Picker.Item label="Rajib" value="Rajib" />
        <Picker.Item label="Shifat" value="Shifat" />
      </Picker>
      </View>
      <Text style={styles.labelText}>Table No</Text>
      <View>
      <Picker
      style={styles.pickerText}
      
        selectedValue={selectTable}
       
        onValueChange={(itemValue, itemIndex) => setselectTable(itemValue)}
      >
        <Picker.Item label="Table 1" value="Table 1" />
        <Picker.Item label="Table 2" value="Table 2" />
        <Picker.Item label="Table 3" value="Table 3" />
      </Picker>
      </View>
     
    </View>
      
      <DataTable style={styles.DataTable}>
        <DataTable.Header>
          <DataTable.Title>
        Items Image
          </DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>
        <Checkbox style={styles.ChecStyle}
     status={checked ? 'checked' : 'unchecked'}
     onPress={() => {
       count+1
       setChecked(!checked);
       
     }}
      
     />
        <DataTable.Row>
      
          <DataTable.Cell>
          
      <TouchableOpacity
        onPress={() => Alert.alert('Food Details apear here')}
      >
          <Image
        style={styles.img}
        source={require('./assets/item2.jpeg')}
      >   
      </Image>
      </TouchableOpacity>


          </DataTable.Cell>
          <DataTable.Cell>
            <View>
          <TextInput
        style={styles.qtyText}
        onChangeText={setQty}
        // value={number}
        placeholder="Quantity"
        keyboardType="numeric"
      />
      </View>
          </DataTable.Cell>
          <DataTable.Cell numeric>{33 * qty}</DataTable.Cell>
         
        </DataTable.Row>
        <Checkbox style={styles.ChecStyle}
      status={checked2 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked2(!checked2);
      }}
     />
        <DataTable.Row>
       
          <DataTable.Cell>
          <TouchableOpacity
        onPress={() => Alert.alert('Hey There!', 'Three button alert dialog',
        [
          {text: 'Ask me later', onPress: () => console.log('Later button clicked')},
          {text: 'Yes', onPress: () => console.log('Yes button is clicked')},
          {text: 'OK', onPress: () => console.log('OK button clicked')},
        ],
        { 
          cancelable: false 
        })}
      >
          <Image
        style={styles.img}
        source={require('./assets/item3.jpeg')}
      />
      </TouchableOpacity>
          </DataTable.Cell>
          <DataTable.Cell>
            <View>
          <TextInput
        style={styles.qtyText}
        onChangeText={setQty1}
        // value={number}
        placeholder="Quantity"
        keyboardType="numeric"
      /></View>
          </DataTable.Cell>
          <DataTable.Cell numeric>{105* qty1}</DataTable.Cell>
        </DataTable.Row>
        <Checkbox style={styles.ChecStyle}
      status={checked1 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked1(!checked1);
      }}
     />
        <DataTable.Row>
          <DataTable.Cell>
          <TouchableOpacity
        onPress={() => Alert.alert('Food Details apear here')}
      >
          <Image
        style={styles.img}
        source={require('./assets/item4.jpeg')}
      />
      </TouchableOpacity>
          </DataTable.Cell>
          <DataTable.Cell>
            <View>
          <TextInput
        style={styles.qtyText}
        onChangeText={setQty2}
        // value={number}
        placeholder="Quantity"
        keyboardType="numeric"
      /></View>
          </DataTable.Cell>
          <DataTable.Cell numeric>{23*qty2}</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      <View style={styles.outer}>
      <Text style={styles.labelText}>Total Item</Text>
          <TextInput
        style={styles.outerText}
        
        value = {count}
    editable = {false}
      />
       <Text style={styles.labelText}>Total</Text>
          <TextInput
        style={styles.outerText}
        onChangeText={setQty}
        value = "190"
    editable = {false}
      />
      </View>
      <View style={styles.outer}>
      <Text style={styles.labelText}>Vat</Text>
          <TextInput
        style={styles.outerText}
        onChangeText={setQty}
        value = "10"
    editable = {false}
      />
       <Text style={styles.labelText}>Grand Total</Text>
          <TextInput
        style={styles.outerText}
        onChangeText={setQty}
        value = "200"
        editable = {false}
      />
      </View>
      
      <Button
        title="Save"
        onPress={() => Alert.alert('Data inserted')}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#6b8e23',
    paddingTop: 30,
    marginLeft:10,
    flex:1,
    paddingHorizontal: 30,
  
  },
  qtyText: {
    height: 40,
    width:70,

    borderWidth: 2,
    borderColor:'red', 
    borderRadius:12,
    padding: 10,
    
  },
  img:{
    height: windowHeight/6,
    width:windowWidth/5,
   
  },
  inputText:{
    borderWidth: 1,
    marginBottom:5,
 
    padding: 20,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRadius: 8,
    height: 65,
    width: windowWidth-100
  },
  pickerText:{
    
    marginTop:5,
    marginBottom:5,
    padding: 20,
    backgroundColor: '#fff',
    
    borderRadius: 8,
    height: 70,
    width: windowWidth/2 
  },
  titleText: {

    fontSize: 40,
    fontWeight: "bold",
    marginBottom:20,
    textAlign: 'center',
  },
  labelText:{
    fontSize: 16,
    fontWeight: "bold",
    color:'red',
    marginBottom:3,
    marginTop:3,
    padding:2,
    
  },
  DataTable:{
    width:windowWidth-100

  },
  outerText: {
    height: 50,
    width:windowWidth/5,

    borderWidth: 2,
    borderColor:'red', 
    borderRadius:12,
    padding: 10,
    
  },
  outer:{
    flex:1,
    flexDirection:'row',
    padding:20
  },
  ChecStyle:{
    paddingTop:10,
    paddingBottom:10
  }

  
});
