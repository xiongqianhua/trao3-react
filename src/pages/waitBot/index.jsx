import React, { useState } from 'react'
import { View,Image,Text} from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';
import carPark from "../../../assets/images/img-bot.png";
export default function Index (){
  const waitBot =()=>{
    Taro.reLaunch({
      url:'botCharge'
    })
  }
  return (
      <View className='waitBotPage'>
        <View className='wait-box'>
          <Image src={carPark} className='imgBanner'/>
          <Text className='tips'>机器人正在赶来，请稍候…</Text>
        </View>
      </View>
    )
}
