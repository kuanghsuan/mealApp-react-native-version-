import React from 'react';
import { View,FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';

const MealList = props => {

    const renderMealItem = itemData => {
        return (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: "MealDetail",
                params: {
                  mealId: itemData.item.id,
                },
              });
            }}
          />
        );
    }
return (
  <View>
    <FlatList
      style={styles.list}
      keyExtractor={(item, index) => item.id}
      data={props.listData}
      renderItem={renderMealItem}
      style={{ width: "100%" }}
    />
  </View>
);
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default MealList;