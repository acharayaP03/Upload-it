import { View, Text, ScrollView, Image, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/customButton';

export default function App() {
	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView
				contentContainerStyle={{
					height: '100%',
				}}
			>
				<View className='w-full justify-center items-center min-h-[85vh] px-4'>
					<Image source={images.storage} className='w-[200px] h-[100px]' resizeMode='contain' />
					<View className='relative'>
						<Text className='text-[48px] mt-4  text-center text-secondary-200 font-pextrabold '>
							UploadIt
						</Text>
						<Image
							source={images.path}
							className='w-[136px] h-[15px] -bottom-1 -right-10  absolute'
							resizeMode='contain'
						/>
					</View>
					<Text className='text-md font-pmedium text-gray-100 text-center mt-7'>
						Save your files in the cloud and access them from anywhere. Upload your files and share
						them
					</Text>
					<CustomButton
						title='Continue with Email'
						handlePress={() => router.push('/sign-in')}
						containerStyles='w-full mt-7'
					/>
				</View>
				<StatusBar backgroundColor='#161622' barStyle='light-content' />
			</ScrollView>
		</SafeAreaView>
	);
}
