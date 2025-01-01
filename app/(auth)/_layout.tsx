import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function AuthLayout() {
	return (
		<>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='sign-in'
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='sign-up'
					options={{
						headerShown: false,
					}}
				/>
			</Stack>

			<StatusBar backgroundColor='#161622' style='light' />
		</>
	);
	// try {
	// 	return (
	// 		<View style={{ flex: 1, backgroundColor: 'red' }}>
	// 			<Text style={{ color: 'white' }}>Testing Layout</Text> {/* Debug text */}
	// 			<Stack>
	// 				<Stack.Screen
	// 					name='sign-in'
	// 					options={{
	// 						headerShown: false,
	// 					}}
	// 				/>
	// 				<Stack.Screen
	// 					name='sign-up'
	// 					options={{
	// 						headerShown: false,
	// 					}}
	// 				/>
	// 			</Stack>
	// 			<StatusBar backgroundColor='#161622' style='light' />
	// 		</View>
	// 	);
	// } catch (error) {
	// 	console.error('Auth Layout Error:', error);
	// 	return (
	// 		<View style={{ flex: 1, backgroundColor: 'blue' }}>
	// 			<Text style={{ color: 'white' }}>Error in Auth Layout</Text>
	// 		</View>
	// 	);
	// }
}
