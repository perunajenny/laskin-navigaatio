import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {

    const {data} = route.params;
    
    return (
        <View style={styles.container}>
            <Text style={styles.view}>History</Text>
             <FlatList
                data={data}
                renderItem={({ item }) =>
                <Text>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    view: {
        marginTop: 50
      }
  });
  