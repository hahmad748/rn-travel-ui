import React,{useState} from 'react';
import { View, Text,StyleSheet, SafeAreaView,Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import {Adventures,Colors,Theme,Tours,Categories} from '../config/index'
const WIDTH = Dimensions.get("screen").width;
import Ionicons from "@expo/vector-icons/Ionicons";





const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const renderCategoryBar = () => (
    <>
      <ScrollView horizontal style={styles.categoriesBar} showsHorizontalScrollIndicator={false}>
        {Categories.map((category,index) => 
        <TouchableOpacity onPress={()=> setActiveCategory(index)} key={category.id} style={styles.categoriesBarBtn}>
          <Text 
          style={
            [styles.categoryBarTitle,
            activeCategory === index && {color:Colors.primary,fontWeight:'bold'}]}>{category.title}</Text>
        </TouchableOpacity>)}
      </ScrollView>
      <Text style={styles.subHeading}>
              { Categories[activeCategory].tours.length + " " }
              {Categories[activeCategory].title}
        </Text>
    </>
  );
  const renderHeader = () =>(
    <View style={styles.header}>
      <Text style={styles.navBarHeading}>Discover</Text>
      <Image style={styles.navBarImage} source={require('../assets/images/Avatar.png')}></Image>
  </View>
  )
  const renderTours = () => (
    <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={WIDTH * 0.7}
            decelerationRate="fast"
            pagingEnabled
            style={styles.toursView}
          >
          {Categories[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity
              style={styles.tourImgBtn}
              key={index}
              onPress={()=> alert(tour.description)}
            >
              <View
                style={styles.tourBtnView}
              >
                <TouchableOpacity
                  style={styles.wishlistBtn}
                  onPress={()=> alert("Marked as Favorite")}
                >
                  <Ionicons
                    name="heart-outline"
                    color={Colors.primary}
                    size={Theme.spacing * 3}
                  />
                </TouchableOpacity>
                <Text
                  style={styles.tourTitle}
                  numberOfLines={2}
                >
                  {tour.title}
                </Text>
              </View>
              <Image
                source={tour.image}
                style={styles.tourImg}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
  )
  const renderAdventures = () => (
    <>
      <View
        style={styles.advView}
      >
        <Text
          style={styles.advHeading}
        >
          Feeling Adventurous?
        </Text>
        <TouchableOpacity>
          <Text
            style={styles.advShowAll}
          >
            Show all
          </Text>
        </TouchableOpacity>
    </View>
    <ScrollView
      horizontal
      pagingEnabled
      style={styles.advScrollView}
      showsHorizontalScrollIndicator={false}
    >
      {Adventures.map((adventure) => (
        <TouchableOpacity
          key={adventure.id}
          style={styles.advBtn}
        >
          <View style={styles.advMainView}>
            <Image
              source={adventure.image}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text
            style={styles.advTitle}
          >
            {adventure.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </>
  )
  return (
    <SafeAreaView>
        <View style={styles.navBarView}>
            {renderHeader()}
            {renderCategoryBar()}
            {renderTours()}
            {renderAdventures()}
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    navBarHeading:{
        fontSize: Theme.h1.fontSize ,
        fontWeight:'bold',
        color:Colors.dark
    },
    navBarView:{
        padding:Theme.spacing * 2
    },
    navBarImage:{
      height:Theme.spacing * 4,
      width:Theme.spacing * 4,
      borderRadius: Theme.spacing * 4
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    categoriesBar:{
      marginVertical: Theme.spacing * 2
    },
    categoriesBarBtn:{
      marginRight:Theme.spacing
    },
    categoryBarTitle:{
      fontSize:Theme.h2.fontSize ,
      color:Colors.dark
    },
    subHeading:{
      fontSize: Theme.h3.fontSize,
      color:Colors.dark
    },
    toursView:{ marginVertical: Theme.spacing * 2 },
    tourImgBtn:{
      width: WIDTH * 0.7,
      height: WIDTH * 0.9,
      overflow: "hidden",
      borderRadius: Theme.spacing * 2,
      marginRight: Theme.spacing * 2,
    },
    tourBtnView:{
        position: "absolute",
        zIndex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: Colors.transparent,
        justifyContent: "space-between",
        padding: Theme.spacing,
    },
    wishlistBtn:{
      alignSelf: "flex-end",
      padding: Theme.spacing / 2,
      backgroundColor: Colors.white,
      borderRadius: Theme.spacing * 5,
      justifyContent: "center",
      alignItems: "center",
    },
    tourTitle:{
        fontSize: Theme.spacing * 2,
        color: Colors.white,
        fontWeight: "700",
        marginHorizontal:Theme.spacing
    },
    tourImg:{ width: "100%", height: "100%" },
    advView:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    advHeading:{
      fontSize: Theme.spacing * 2,
      fontWeight: "bold",
      color: Colors.dark,
    },
    advShowAll:{
      fontSize: Theme.spacing * 1.4,
      fontWeight: "500",
      color: Colors.primary,
    },
    advScrollView:{ marginVertical: Theme.spacing * 2 },
    advBtn:{
      marginRight: Theme.spacing * 3,
      padding: Theme.spacing,
      alignItems: "center",
    },
    advMainView:{ width: Theme.spacing * 3, height: Theme.spacing * 3 },
    advTitle:{
      textTransform: "uppercase",
      fontSize: Theme.spacing,
      marginTop: Theme.spacing,
    }

})

export default HomeScreen;