import "./src/wdyr";
import { I18nManager } from "react-native"; // <--- In order to test RTL
import { LocaleConfig } from "react-native-calendars";
import { registerScreens } from "./src/screens";
import MenuScreen from "./src/screens/menu";
import CalendarsScreen from "./src/screens/calendars";
import AgendaScreen from "./src/screens/agenda";
import CalendarsList from "./src/screens/calendarsList";
import HorizontalCalendarList from "./src/screens/horizontalCalendarList";
import ExpandableCalendar from "./src/screens/expandableCalendar";
import TimelineCalendar from "./src/screens/timelineCalendar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//  // <--- In order to test RTL
export default function App() {
    I18nManager.forceRTL(true);
  //registerScreens();
  // eslint-disable-next-line no-console
 // console.ignoredYellowBox = ["Remote debugger"];

  LocaleConfig.locales["en"] = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthNamesShort: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"]
    // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
  };
  LocaleConfig.defaultLocale = "en";

  /*
LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';
*/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Calendars" component={CalendarsScreen} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
        <Stack.Screen name="CalendarsList" component={CalendarsList} />
        <Stack.Screen
          name="HorizontalCalendarList"
          component={HorizontalCalendarList}
        />
        <Stack.Screen
          name="ExpandableCalendar"
          component={ExpandableCalendar}
        />
        <Stack.Screen name="TimelineCalendar" component={TimelineCalendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
