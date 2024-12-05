/*
 * @Author: qianhua.xiong
 */
import React, { useState } from 'react'
import { View,Image,Text} from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';
import carQR from "../../../assets/images/car-qr.png";
export default function Index (){

  const goScan =()=>{
    Taro.navigateTo({
      url:'pages/callBot/index'
    })
  }
  return (
      <View className='qrChargeBotPage'>
        <View className='wait-box'>
          <Image src={carQR} className='imgBanner'/>
          <Text className='tips'>请打开e充电APP/小程序扫描充电机器人</Text>
          <Text className='tips'>屏幕右下方二维码下单</Text>
        </View>
      </View>
    )
}
