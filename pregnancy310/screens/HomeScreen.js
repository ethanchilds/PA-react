import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'

function Home() {
  const [waterAmount, setWaterAmount] = useState(0);
	const [percentage, setPercentage] = useState(0);
	const size = 300;
	const strokeWidth = 5;
	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	const onPress = () => {
		setWaterAmount(waterAmount + 100)
		setPercentage(Math.round((waterAmount + 100)/ 3700 * 100))
	}

	return (
		<ScrollView>
			<View style={styles.title}>
				<Text style={styles.title}>
					Water Tracker
				</Text>
			</View>
			<View style={styles.container}>
				<Svg width={size} height={size}>
					<G rotation={-90} origin={center}>
						<Circle stroke={'#E6E7E8'} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} fill={'white'}/>
						<Circle 
							stroke={'#aee2f5'} 
							cx={center} 
							cy={center} 
							r={radius} 
							strokeWidth={strokeWidth}
							strokeDasharray={circumference}
							strokeDashoffset={circumference - (circumference * percentage) / 100}
							fill={'white'}
						/>
					</G>
				</Svg>
				<View style={styles.textView}>
					<Text style={styles.percentText}>{percentage}%</Text>
					<Text style={styles.amountText}>{waterAmount} / 3700 mL</Text>
					<TouchableOpacity onPress={onPress}>
						<View style = {styles.button}>
							<Text style = {styles.buttonText}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
  title: {
		color: '#aee2f5',
		fontSize: 50,
		margin: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 25,
		alignSelf: 'center',
	},
	textView: {
		position: 'absolute',
	},
	percentText: {
		color: '#aee2f5',
		fontSize: 75,
		maring: 5,
	},
	amountText: {
		color: '#aee2f5',
		fontSize: 20,
		alignSelf: 'center',
		margin: 5,
		marginBottom: 10,
	},
	button: {
		width: 50,
		borderRadius: 10,
		backgroundColor: 'black',
		alignSelf: 'center',
		margin: 5,
	},
	buttonText: {
		color: '#aee2f5',
		fontSize: 25,
		alignSelf: 'center'
	}
})

export default Home