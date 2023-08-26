import {Image, TouchableOpacity, View} from 'react-native';

import {IC_MM} from '../icons';

export default function MyTouch(): JSX.Element {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          borderRadius: 50,
        }}
      >
        <Image
          source={IC_MM}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
