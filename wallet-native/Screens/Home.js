import { 
  View, Text, SafeAreaView, TouchableOpacity, FlatList, Image
} from 'react-native'
import {COLORS, SIZES, FONTS, icons, images} from "../constansts"
import React from 'react'

const Home = () => {
  const featuresData = [
    {
        id: 1,
        icon: icons.reload,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "Top Up"
    },
    {
        id: 2,
        icon: icons.send,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Transfer"
    },
    {
        id: 3,
        icon: icons.internet,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Internet"
    },
    {
        id: 4,
        icon: icons.wallet,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Wallet"
    },
    {
        id: 5,
        icon: icons.bill,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Bill"
    },
    {
        id: 6,
        icon: icons.game,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Games"
    },
    {
        id: 7,
        icon: icons.phone,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Mobile Prepaid"
    },
    {
        id: 8,
        icon: icons.more,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "More"
    },
]

const specialPromoData = [
    {
        id: 1,
        img: images.promoBanner,
        title: "Bonus Cashback1",
        description: "Don't miss it. Grab it now!"
    },
    {
        id: 2,
        img: images.promoBanner,
        title: "Bonus Cashback2",
        description: "Don't miss it. Grab it now!"
    },
    {
        id: 3,
        img: images.promoBanner,
        title: "Bonus Cashback3",
        description: "Don't miss it. Grab it now!"
    },
    {
        id: 4,
        img: images.promoBanner,
        title: "Bonus Cashback4",
        description: "Don't miss it. Grab it now!"
    },
]
const [features, setFeatures] = React.useState(featuresData);
const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);

function renderHeader(){
  return(
    <View style={{flexDirection: 'row', marginVertical: SIZES.padding*2}}>
        <View style={{flex:1}}>
            <Text style={{...FONTS.h1}}>Hello!</Text>
            <Text style={{...FONTS.body2, color: COLORS.gray}}>Tran Minh Hieu</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                style={{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    source={icons.bell}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.secondary
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        top: -5,
                        right: -5,
                        height: 10,
                        width: 10,
                        backgroundColor: COLORS.red,
                        borderRadius: 5
                    }}
                >
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}
function renderPromos() {
  
  const renderItem = ({ item }) => (
      <TouchableOpacity
          style={{
              marginVertical: SIZES.base,
              width: SIZES.width / 2.5
          }}
          onPress={() => console.log(item.title)}
      >
          <View
              style={{
                  height: 80,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: COLORS.primary
              }}
          >
              <Image
                  source={images.promoBanner}
                  resizeMode="cover"
                  style={{
                      width: "100%",
                      height: "100%",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                  }}
              />
          </View>

          <View
              style={{
                  padding: SIZES.padding,
                  backgroundColor: COLORS.lightGray,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20
              }}
          >
          <Text style={{...FONTS.h4}}>{item.title}</Text>
          <Text style={{...FONTS.body4}}>{item.description}</Text>
          </View>
      </TouchableOpacity>
  )

  
  return (
      <FlatList
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={specialPromos}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
      />
  )
}
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
      {renderPromos()}
    </SafeAreaView>
  )
}

export default Home