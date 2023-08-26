import {Image, TouchableOpacity, View} from 'react-native';
import {css} from '@emotion/native';

import {IC_MM} from '../src/icons';
import MyTouch from '../src/uis/MyTouch';

export default function Index(): JSX.Element {
  return (
    <View
      style={css`
        flex: 1;
        align-self: stretch;
        background-color: #ffffff;
      `}
    >
      <MyTouch />
      <Image
        source={{
          uri: 'https://images.ctfassets.net/sfnkq8lmu5d7/7oZxV67zss1p11WN17Ttjj/e0a7f7d681d8614175d804aa21cae732/The-Wildest_Editorial_Peeved-Pups_Hero_v01.jpg',
        }}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          borderRadius: 50,
        }}
      />
      <View
        style={css`
          position: absolute;
          top: 80px;
          right: 50px;
        `}
      >
        <View
          style={css`
            width: 50px;
            height: 50px;
            background-color: aliceblue;
          `}
        />
        <View
          style={css`
            width: 50px;
            height: 50px;
            background-color: #325e83;
          `}
        />
      </View>
    </View>
  );
}
