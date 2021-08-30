

import {AppRegistry} from 'react-native';
import React from "react";
import {  ListItem, Button, Icon,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import{ Card} from 'react-native-elements';
const DATA = [
 {
 id: '1',
 title: 'Pupusas',
 src:require('./src/imgs/pupusas.jpg'),
 description:'Es una tortilla gruesa hecha a mano de base de masa de maíz o arroz que está rellena de uno o más ingredientes. Los rellenos típicos de una pupusa son queso, frijol y chicharrón'
 },
 {
 id: '2',
 title: 'Tamales',
 src:require('./src/imgs/tamales.jpg'),
 description:'Es un alimento de origen precolombino, de las culturas mesoamericanas, preparado generalmente a base de masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.'
 },
 {
 id: '3',
 title: 'Elotes locos',
 src:require('./src/imgs/elote_loco.jpg'),
 description:'Es una mazorca entera de maíz dulce, cocida o asada, cubierta con mayonesa, mostaza, salsa negra (o salsa inglesa), kétchup y queso, que es muy popular en El Salvador.'
 },
 {
  id: '4',
  title: 'Sopa de pata',
  src:require('./src/imgs/sopa_de_pata.jpg'),
  description:'Sopa cuyo ingrediente base son las extremidades de la vaca, a las que se les agregan verduras como plátano, repollo, yuca, pipianes, ejotes y güisquil.'
  },
  {
    id: '5',
    title: 'Yuca frita',
    src:require('./src/imgs/yuca.jpg'),
    description:'La yuca se acompaña de chicharrones, trozos de cerdo o de las “pescadas”, pequeños peces típicos del país que se preparan fritos.'
    },
    {
      id: '6',
      title: 'Panes con gallina',
      src:require('./src/imgs/panes_con_pollo.jpg'),
      description:'Se preparan a partir de un pan de harina en forma alargada que se rellena con  lechuga, berro, tomate y pepino. Aunque no forma parte de los ingredientes principales, también puede llevar escabeche.'
      },
      {
        id: '7',
        title: 'Atol',
        src:require('./src/imgs/atol.jpg'),
        description:'Se preparan a base de elotes, semillas de marañón, maíz tostado y piña. El más famoso de todos es el atol shuco, uno elaborado a partir de maíz fermentado, agua y alhuashte, polvo obtenido al moler las semillas de ayote.'
        },
 ];

const Item = ({ title,img,description }) => (
  
    <Card style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Card.Divider style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
  />
  
    <Image style={styles.img} source={img} />
    <Text style={styles.description}>{description}</Text>
    </Card>
    );
    
    const App = () => {
    const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} description={item.description} />
    );
    
    return (
    <SafeAreaView style={styles.container}>
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
    </SafeAreaView>
    );
    }
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 4,
    alignItems:'center'
    },
    title: {
    fontSize: 32,
  textAlign: 'center',
    },
    description: {
        fontSize: 17,
        }
   ,
    img:{
   width:280,
   height:125,
   borderWidth:2,
   borderColor:'#d35647',
   resizeMode:'contain',
   alignItems:'center',
   margin:8
    }
    });
    AppRegistry.registerComponent("comida", () => App);