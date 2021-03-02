import { Ionicons } from '@expo/vector-icons'
import { Body, Left, List, ListItem, Right, Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Profile = ({ navigation }) => {
    const isAdmin = true

    return (
        <View style={styles.container}>
            <List style={styles.list}>
                <ListItem itemDivider>
                    <Text style={{ marginTop: 20 }}>Général</Text>
                </ListItem>
                <ListItem
                    icon
                    button={true}
                    onPress={() => {
                        console.log('Changer le pseudo / se déco')
                    }}
                    style={styles.item}
                >
                    <Left>
                        <Ionicons name="person-circle-outline" size={25} />
                    </Left>
                    <Body>
                        <Text>Mon compte</Text>
                    </Body>
                    <Right>
                        <Ionicons name="chevron-forward-outline" />
                    </Right>
                </ListItem>
                <ListItem itemDivider>
                    <Text style={{ marginTop: 20 }}>Administration</Text>
                </ListItem>
                {isAdmin && (
                    <>
                        <ListItem
                            icon
                            button={true}
                            onPress={() => navigation.navigate('Validation')}
                        >
                            <Left>
                                <Ionicons name="albums-outline" size={25} />
                            </Left>
                            <Body>
                                <Text>Nouvelles disquettes</Text>
                            </Body>
                            <Right>
                                <Ionicons name="chevron-forward-outline" />
                            </Right>
                        </ListItem>
                        <ListItem
                            icon
                            button={true}
                            onPress={() =>
                                navigation.navigate('UsersManagement')
                            }
                        >
                            <Left>
                                <Ionicons
                                    name="people-circle-outline"
                                    size={25}
                                />
                            </Left>
                            <Body>
                                <Text>Gestions des utilisateurs</Text>
                            </Body>
                            <Right>
                                <Ionicons name="chevron-forward-outline" />
                            </Right>
                        </ListItem>
                    </>
                )}
            </List>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    account: {
        height: 100,
    },
    list: {
        backgroundColor: '#FFF',
    },
})

export default Profile
