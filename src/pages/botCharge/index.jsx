/*
 * @Author: qianhua.xiong
 */
import React, { useState } from 'react'
import { View,Button,Image,Text,Icon} from '@tarojs/components';
import Taro from '@tarojs/taro'
import './index.scss';
import carPark from "../../../assets/images/img-car-park.png";
import LoadPic from '../../../assets/images/icon-loading.png';
import video1 from '../../../assets/video/video1.gif';
export default function Index (){
  const [loading,setLoading] = useState(false);
  const [show,setShow] = useState(false);
  const goBack =()=>{
    // Taro.showLoading({
    //   title: '加载中',
    //   content: '机器人原地掉头中,请稍候…',
    // })
    setLoading(true)
    setTimeout(()=>{
      Taro.reLaunch({
        url:'qrcodeCharge'
      })
    },3000)
  }
  const details = ()=>{
    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    Taro.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    Taro.hideLoading()
  }
  return (
      <View className='BotChargePage'>
        <Image src={carPark} className='imgBanner'/>
       {
          show ? <View className='Swiper'>
          <Image src={video1} className='gif'/>
          <Icon size='30' type='clear' className='close' onClick={()=>setShow(false)}/>
           </View> : null
        }
        <View className='openDetail'>
          <Text className='tips'>请从机器人后方取下充电枪，将充电枪插入车辆充电口</Text>
          <Text className='tips'>如果充电枪与车辆充电口不在同一方向请点击一键调头</Text>
          <Button size='mini' type='primary' className='open' onClick={()=>setShow(true)}>查看示意</Button>
        </View>
        <View className='pageBottom'>
          <Button  size='mini' className='warn' onClick={goBack}>一键调头</Button>
          <Text className='tips'>120秒后未操作机器人将自动返回</Text>
        </View>
        {loading ? <View className='noBot'>
          <Image src={LoadPic}  className='loading'/>
          <Text>机器人原地掉头中</Text>
          <Text>请稍候…</Text>
        </View>: null}
      </View> 
    )
}
