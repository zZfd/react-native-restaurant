import React, { useState } from 'react';
import { View, StatusBar, Button, Text, StyleSheet } from 'react-native';

export default function RootContainer(): JSX.Element {
  //#region 
  // 状态栏文本颜色
  // const textColors: string[] = ['default', 'dark-content', 'light-content']
  // const bgColors: string[] = ['red', 'blue', 'yellow']

  // const [visibleStatusBar, setVisibleStatusBar] = useState(false)

  // const [textBarColor, setTextBarColor] = useState(textColors[0])

  // const [backgroundColor, setBackgroundColor] = useState(bgColors[0])

  // const changeVisibilityStatusBar = (): void => {
  //   setVisibleStatusBar(!visibleStatusBar)
  // }

  // const changeTextBarColor = (): void => {
  //   const colorId = textColors.indexOf(textBarColor) + 1
  //   if (colorId === textColors.length) {
  //     return setTextBarColor(textColors[0])
  //   }
  //   return setTextBarColor(textColors[colorId])
  // }
  // const changeBgColor = (): void => {
  //   const colorId = bgColors.indexOf(backgroundColor) + 1
  //   if (colorId === bgColors.length) {
  //     return setBackgroundColor(bgColors[0])
  //   }
  //   return setBackgroundColor(bgColors[colorId])
  // }
  //#endregion
  return (
    <View>
      {/* 状态栏 */}
      <StatusBar backgroundColor='#ff005d' barStyle='dark-content' />
      {/* <Text>状态栏背景色：{backgroundColor}</Text>
      <Text>状态栏颜色：{textBarColor}</Text>
      <Text>状态栏是否显示：{!visibleStatusBar ? 'Visible' : 'hidden'}</Text>

      <StatusBar backgroundColor={backgroundColor} barStyle={textBarColor} hidden={visibleStatusBar} />
     
      <View>
        <Button title='开闭状态栏' onPress={(): void => changeVisibilityStatusBar()} />
      </View>
      <View>
        <Button title='改变背景色' onPress={(): void => changeBgColor()} />
      </View>
      <View>
        <Button title='改变文本颜色' onPress={changeTextBarColor} />
      </View> */}
    </View>
  );
}
