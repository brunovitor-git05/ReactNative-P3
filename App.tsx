
import { TouchableOpacity, View, Text, Image, TextInput} from 'react-native';
import { styles } from './styles';

export default function App() {
  return  <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.entrar}>Entrar</Text>
        <Text style={styles.cancelar}>Cancelar</Text>
    </View>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
       <View style={styles.botao}> 
        <TextInput 
          placeholder="Iniciar sessão com meu e-mail ou cpf"
          placeholderTextColor="#000"
        />
      </View>
     
      <TouchableOpacity style={styles.botao2}>      
      <Image source={require('./assets/logo2.png')} style={styles.logo2} />
      <Text>Iniciar sessão com a Apple</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.botao3}>   
        <Image source={require('./assets/logo3.png')} style={styles.logo3} />   
        <Text style={styles.textoBotao3}>Iniciar sessão com o Facebook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao4}>
          <Image source={require('./assets/logo4.png')} style={styles.logo4} />
        <Text>Iniciar sessão com o Google</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.botao5}>
        <Text style={styles.textoBotao5}>Quero criar uma conta</Text>
      </TouchableOpacity>
    
    </View>
}