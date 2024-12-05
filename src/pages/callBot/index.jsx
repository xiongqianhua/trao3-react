/*
 * @Author: qianhua.xiong
 */
/*
 * @Author: qianhua.xiong
 */
import React, { useState } from 'react'
import { View,Button,Image,Text,Radio} from '@tarojs/components';
import Taro from '@tarojs/taro'
import './index.scss';
import carPark from "../../../assets/images/car-park.png";
import carBg from '../../../assets/images/car.png';
export default function Index (){

  const waitBot =()=>{
    Taro.reLaunch({
      url:'waitBot'
    })
  }
  Taro.showToast({
    title: '当前暂无空闲机器人，请稍后再试',
    icon: 'none',
  });
  return (
      <View className='callBotPage'>
        <Image src={carPark} className='imgBanner'/>
        <View className='car-no'>
          <Text className='name'>当前车位：</Text>
          <Text className='number'>B1-E186</Text>
        </View>
        <View>
          <Text className='tips'>请正确标识爱车快充口位置，并打开充电口，帮助闪电宝赶来用最佳位姿对接充电</Text>
        </View>
        <View className='carBox'>
          <Image className='car' src={carBg}></Image>
          <View className='top'>
            <Text>正前方</Text>
            <Radio className='select'/>
          </View>
          <View className='left-top'>
            <Text>左前方</Text>
            <Radio className='select'/>
          </View>
          <View className='right-top'>
            <Text>右前方</Text>
            <Radio className='select'/>
          </View>
          <View className='bottom'>
            <Radio className='select'/>
            <Text>正后方</Text>
          </View>
          <View className='left-bottom'>
            <Text>左后方</Text>
            <Radio className='select'/>
          </View>
          <View className='right-bottom'>
            <Text>右后方</Text>
            <Radio className='select'/>
          </View>
        </View>
        <View className='pageBottom'>
          <Button className='scanQrButton' onClick={waitBot}>召唤充电机器人</Button>
        </View>
        {/* <View className='noBot'>
          <Text>当前暂无空闲机器人，请稍后再试</Text>
        </View> */}
      </View>
    )
}
