import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

const BlackButton = ({text, func}) => {

  return (
    <TouchableOpacity
        onPress={() => func()}
        style={styles.btnContainer}
    >
        <Text style={styles.btnTxt}>{text}</Text>
    </TouchableOpacity>
  )
}

export default BlackButton