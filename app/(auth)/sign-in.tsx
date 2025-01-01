import { Dimensions, ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function SignIn() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	async function handleSubmit() {
		setIsSubmitting(true);
		try {
			// await signIn(form.email, form.password);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	}
	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full min-h-[85vh] flex justify-center items-center px-4 my-6'>
					<Image source={images.storage} className='w-[200px] h-[100px]' resizeMode='contain' />

					<Text className='text-2xl font-semibold text-white mt-10 font-psemibold text-center'>
						Log in to UploadIt
					</Text>

					<FormField
						title='Email'
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles='mt-7'
						keyboardType='email-address'
					/>

					<FormField
						title='Password'
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles='mt-7'
					/>
					<CustomButton
						title='Sign In'
						handlePress={handleSubmit}
						containerStyles='w-full mt-7'
						isLoading={isSubmitting}
					/>
					<View className='flex justify-center pt-5 flex-row gap-2'>
						<Text className='text-lg text-gray-100 font-pregular'>Don't have an account?</Text>
						<Link href='/sign-up' className='text-lg font-psemibold text-secondary'>
							Signup
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
