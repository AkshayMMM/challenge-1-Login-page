import React,{Component} from 'react'
import {
     View,
     StyleSheet,
     ImageBackground,
     Image,
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'
    
export default class LOGIN extends Component{
    constructor(){
        super();
        this.state={
            name:null
        }
    }
   Updatevalue(username){
       // console.log(username)
        this.setState({name:username})

    }
    render(){
        return(
            <View style={styles.viewdesign}>
                <ImageBackground source= {require('../assets/running.jpg')}
                style={styles.backgroundImage}>
                    <Image source= {require('../assets/crown3.png')}
                    style={styles.picture}>

                    </Image>
                    <Text style={styles.textview}>WELCOME TO REACT NATIVE JOURNEY</Text>
                    <TextInput style={styles.inputview}
                    placeholder='username'
                    placeholderTextColor='blue'
                    onChangeText={(username)=>this.Updatevalue(username)}>

                    </TextInput>
                    <TextInput style={styles.inputview}
                    placeholder='password'
                    placeholderTextColor='blue'
                    secureTextEntry={true}
                    maxLength={10}>
                    </TextInput>
                    <TouchableHighlight style={styles.buttonview}
                    underlayColor="transparent"
                    onPress={()=>this.props.navigation.navigate("Flexbox",{username:this.state.name})}>
                        <Text style={styles.buttontext}>LOGIN</Text>
                    </TouchableHighlight>

                    
                </ImageBackground>
                
             </View>
    
         )
    }
}
const styles= StyleSheet.create({
    viewdesign:{
         height:"100%",
         width:"100%",
         backgroundColor:"black"
    
    },backgroundImage:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'

    },picture:{
        height:100,
        width:100,
        
    },textview:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:20
    },
    inputview:{
        width:"80%",
        height:55,
        backgroundColor:"orange",
        borderWidth:1,
        borderColor:'blue',
        marginTop:50,
        paddingLeft:50

    },
    buttonview:{
        width:'60%',
        height:55,
        backgroundColor:'red',
        marginTop:30,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    buttontext:{
        fontSize:22,
        fontWeight:'bold',
        color:'blue'
    }
})  
       
      
    
    
    
    
     
     
