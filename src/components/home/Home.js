import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Body, Card, CardItem, Text } from 'native-base'
import React, { useEffect, useState, useRef } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from 'react-native'
import Swiper from 'react-native-deck-swiper'
// import { useEffect } from 'react/cjs/react.development'

const Home = () => {
    const [loader, setLoader] = useState(true)
    const [disquettes, setDisquettes] = useState()

    const useSwiper = useRef(null)
    const handleOnSwipedLeft = () => useSwiper.current.swipeLeft()
    const handleOnSwipedRight = () => useSwiper.current.swipeRight()

    const getAllDisquette = async () => {
        try {
            let response = await fetch(
                'http://localhost:8080/getAllDisquette/',
                {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                },
            )
            let json = await response.json()
            setTimeout(() => {
                setLoader(false)
            })
            return json
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllDisquette().then((allDisquettes) =>
            setDisquettes(
                allDisquettes.filter((disquette) => disquette.isValid === 1),
            ),
        )
    }, [])

    return (
        <View style={styles.container}>
            {loader ? (
                <ActivityIndicator size="large" />
            ) : (
                <Swiper
                    ref={useSwiper}
                    cards={disquettes}
                    renderCard={(card) => {
                        console.log('card', card)
                        return (
                            // <View style={styles.card}>
                            //     <Text style={styles.text}>{card}</Text>
                            //     <View style={styles.container_button}>
                            //         <Button
                            //             transparent
                            //             style={styles.dislike_button}
                            //         >
                            //             <Ionicons size={60} name="close-circle" />
                            //         </Button>
                            //         <Button transparent style={styles.like_button}>
                            //             <Ionicons size={60} name="heart-circle" />
                            //         </Button>
                            //     </View>
                            // </View>
                            <>
                                {card && (
                                    <Card style={styles.card}>
                                        <LinearGradient
                                            colors={['#CD8EFF', '#F57777']}
                                            start={[0.2, 0.1]}
                                            end={[0.9, 0.4]}
                                            style={styles.linearGradient}
                                        >
                                            <LinearGradient
                                                colors={[
                                                    'rgba(174,227,255,0.9)',
                                                    'rgba(245,119,119,0.2)',
                                                ]}
                                                start={[1, 0]}
                                                end={[0, 0.8]}
                                                style={styles.linearGradient}
                                            >
                                                <CardItem
                                                    style={{
                                                        flex: 4,
                                                        backgroundColor:
                                                            'transparent',
                                                    }}
                                                >
                                                    <Body
                                                        style={{
                                                            justifyContent:
                                                                'center',
                                                            alignItems:
                                                                'center',
                                                        }}
                                                    >
                                                        <Text
                                                            style={{
                                                                fontSize: 60,
                                                                alignSelf:
                                                                    'flex-start',
                                                                marginBottom: -25,
                                                            }}
                                                        >
                                                            "
                                                        </Text>
                                                        {/* {console.log('card', card)} */}
                                                        <Text
                                                            style={
                                                                styles.disquette
                                                            }
                                                        >
                                                            {card.content}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                fontSize: 60,
                                                                alignSelf:
                                                                    'flex-end',
                                                            }}
                                                        >
                                                            "
                                                        </Text>
                                                    </Body>
                                                </CardItem>
                                                <CardItem
                                                    footer
                                                    style={{
                                                        flex: 1,
                                                        justifyContent:
                                                            'space-around',
                                                        backgroundColor:
                                                            'transparent',
                                                    }}
                                                >
                                                    <TouchableOpacity
                                                        style={{
                                                            borderWidth: 1,
                                                            borderColor:
                                                                'transparent',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            width: 100,
                                                            height: 100,
                                                            backgroundColor:
                                                                'transparent',
                                                            borderRadius: 100,
                                                        }}
                                                        onPress={
                                                            handleOnSwipedLeft
                                                        }
                                                    >
                                                        <Ionicons
                                                            name={
                                                                'close-circle-outline'
                                                            }
                                                            size={90}
                                                            color="#E03763"
                                                        />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={{
                                                            borderWidth: 1,
                                                            borderColor:
                                                                'transparent',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            width: 100,
                                                            height: 100,
                                                            backgroundColor:
                                                                'transparent',
                                                            borderRadius: 100,
                                                        }}
                                                        onPress={
                                                            handleOnSwipedRight
                                                        }
                                                    >
                                                        <Ionicons
                                                            name={
                                                                'heart-circle-outline'
                                                            }
                                                            size={90}
                                                            color="#00B990"
                                                        />
                                                    </TouchableOpacity>
                                                </CardItem>
                                            </LinearGradient>
                                        </LinearGradient>
                                    </Card>
                                )}
                            </>
                        )
                    }}
                    verticalSwipe={false}
                    onSwiped={(cardIndex) => {
                        console.log(cardIndex)
                    }}
                    onSwipedAll={() => {
                        console.log('onSwipedAll')
                    }}
                    cardIndex={0}
                    backgroundColor={'#f4f4f4'}
                    stackSize={3}
                ></Swiper>
            )}
        </View>
    )
}

const width_proportion = '100%'
const height_proportion = '80%'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        borderRadius: 10,
    },
    card: {
        width: width_proportion,
        height: height_proportion,
        borderWidth: 2,
        borderColor: '#424242',
        justifyContent: 'center',
        borderRadius: 10,
    },
    disquette: {
        fontFamily: 'Barlow_200ExtraLight',
        fontSize: 28,
        marginLeft: 15,
        marginRight: 15,
    },
})

export default Home
