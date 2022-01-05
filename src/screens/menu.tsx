import React, { Component,useCallback } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Linking,
  Alert
} from "react-native";
import { Navigation } from "react-native-navigation";
import testIDs from "../testIDs";
//@ts-expect-error
import appIcon from "../img/app-icon-120x120.png";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Octicons } from "@expo/vector-icons";

interface Props {
  componentId?: string;
  weekView?: boolean;
}
const url ="https://github.com/CT-HTrieu/App-Calender.git";
export default function MenuScreen({ navigation }) {

    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
  // const pushScreen = (screen: string, props?: Props) =>{
  //    Navigation.push(this.props.componentId, {
  //      component: {
  //        name: screen,
  //        passProps: props,
  //        options: {
  //          topBar: {
  //            title: {
  //              text: props?.weekView ? 'WeekCalendar' : screen
  //            }
  //          }
  //        }
  //      }
  //    });
  //  }
  const onCalendarsPress = () => {
    navigation.navigate("Calendars");
  };

  const onCalendarListPress = () => {
    navigation.navigate("CalendarsList");
  };

  const onHorizontalCalendarListPress = () => {
    navigation.navigate("HorizontalCalendarList");
  };

  const onAgendaPress = () => {
    navigation.navigate("Agenda");
  };

  const onExpandablePress = () => {
    navigation.navigate("ExpandableCalendar");
  };

  const onTimelinePress = () => {
    navigation.navigate("TimelineCalendar");
  };

  const onWeekPress = () => {
      handlePress();
  };
  return (
    <ScrollView>
      <View style={styles.container} testID={testIDs.menu.CONTAINER}>
        <Image source={appIcon} style={styles.image} />
        {/* <TouchableOpacity
          testID={testIDs.menu.CALENDARS}
          style={styles.menu}
          onPress={() => onCalendarsPress()}
        >
          <Text style={styles.menuText}>Calendars</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          testID={testIDs.menu.CALENDAR_LIST}
          style={styles.menu}
          onPress={() => onCalendarListPress()}
        >
          <Text style={styles.menuText}>Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={testIDs.menu.HORIZONTAL_LIST}
          style={styles.menu}
          onPress={() => onHorizontalCalendarListPress()}
        >
          <Text style={styles.menuText}>Horizontal Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={testIDs.menu.AGENDA}
          style={styles.menu}
          onPress={() => onAgendaPress()}
        >
          <Text style={styles.menuText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={testIDs.menu.EXPANDABLE_CALENDAR}
          style={styles.menu}
          onPress={() => onExpandablePress()}
        >
          <Text style={styles.menuText}>Expandable Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={() => onTimelinePress()}>
          <Text style={styles.menuText}>Timeline Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={testIDs.menu.WEEK_CALENDAR}
          style={styles.menu}
          onPress={() => onWeekPress()}
        >
          <Text style={styles.menuText}>
            <Octicons name="mark-github" size={28} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    margin: 30,
    width: 90,
    height: 90
  },
  menu: {
    width: 300,
    padding: 10,
    margin: 10,
    // backgroundColor: '#f2F4f5',
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#7a92a5"
  },
  menuText: {
    fontSize: 18,
    color: "#2d4150"
  }
});
