import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
	return (
		<View className='flex-1 justify-center items-center'>
			<Text className='text-4xl text-gray-900 font-pblack'>Aora!</Text>
			<StatusBar style='auto' />
			<Link href='/home' className='text-blue-500'>
				Go to Home
			</Link>
		</View>
	);
}
