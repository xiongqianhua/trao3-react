/*
 * @Author: qianhua.xiong
 */
/*
 * @Author: qianhua.xiong
 */
/*
 * @Author: qianhua.xiong
 */
import React, { useState } from 'react'
import { View,Button,Image,Text} from '@tarojs/components';
import Taro from '@tarojs/taro'
import './index.scss';
import indexBG from "../../../assets/images/indexBG.png";
import scanIcon from '../../../assets/images/icon-scan.png';
export default function Index (){

  // 扫描二维码
  const handleScanCode = async () => {
    Taro.reLaunch({
      url:'callBot'
    })
    try {
      const res = await Taro.scanCode({
        onlyFromCamera: true, // 只从相机扫码（禁止从相册选择二维码）
        success: (scanRes) => {
          Taro.showToast({
            title: `扫描结果: ${scanRes.result}`,
            icon: 'none',
          });
        },
        fail: (err) => {
          Taro.showToast({
            title: '扫码失败',
            icon: 'none',
          });
          console.error('扫码失败', err);
        },
      });
      console.log(res,'------')
    } catch (error) {
      console.error('扫码过程出错', error);
    }
  };
  return (
      <View className='indexPage'>
        <Image src={indexBG} className='imgBg'/>
        <Button className='scanQrButton' onClick={handleScanCode} type='primary' >
          <Image className='scanIcon' src={scanIcon}></Image>
          <Text>扫描车位二维码</Text>
        </Button>
      </View>
    )
}
