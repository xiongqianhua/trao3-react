import {Component} from 'react';
import {Swiper, SwiperItem, Image, View} from '@tarojs/components';
import './swiper.scss';
import video1 from '../../assets/video/video1.gif';
export default class SwiperBanner extends Component {

  static defaultProps = {
    list: [
      video1
    ]
  }
  state = {
    currentIndex:0
  }
  onChange(e){
    this.setState({currentIndex:e.detail.current})
  }
  render() {
    const {list} = this.props
    const {currentIndex} = this.state
    return (
      <View>
        <Swiper
          className='swiper-body'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          current={currentIndex}
          duration={5000}
          interval={5000}
          circular
          autoplay
          // indicatorDots //隐藏原始指示点
          onChange={this.onChange.bind(this)}
        >
          {list.map((item, index) => (
            <SwiperItem key={index}>
              <Image 
              src={item} 
              className='slide-image' 
              mode='widthFix' 
              />
            </SwiperItem>
          ))}
        </Swiper>
        <View className='spot-pagination'>
          {list.map((item, index) => (
            <View key={index} className={'spot-pagination-bullet ' + ((currentIndex==index)?'spot-pagination-bullet-active':'')}></View>
          ))}
        </View>
      </View>
    )
  }
}

