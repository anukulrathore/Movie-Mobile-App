import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const TabIcon = ({focused, icon, title} : any) => {
    if(focused) {
        return <ImageBackground
              source={images.highlight}
              className="w-[112px] h-16 flex-row justify-center items-center flex-1 rounded-full overflow-hidden"
            >
              <Image
                source={icon}
                className="w-5 h-5 mr-1"
                style={{ tintColor: '#151312' }}
              />
              <Text className="text-[14px] text-[#151312]">{title}</Text>
            </ImageBackground>
    }
    return <View className='w-[112px] h-14 flex-row items-center justify-center'>
        <Image
                source={icon}
                className="w-4 h-4 mr-1"
                style={{ tintColor: '#CCCCCC' }}
              />
              <Text className="text-[14px] text-[#151312]">{title}</Text>
    </View>
    
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle:{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarStyle: {
            backgroundColor: '#0f0D23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '0f0d23',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title="Saved"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
