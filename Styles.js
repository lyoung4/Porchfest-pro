import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 50,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "red",
  },
  result: {
    color: "red",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  performerList: {
    flexDirection: "row",
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
    backgroundColor: "#6FD6F6",
    alignItems: "center",
  },
  performer: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    textAlign: "center",
  },
  favoritedList: {
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
    backgroundColor: "#6FD6F6",
    alignItems: "center",
  },
  searchbar: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 9,
    padding: 10,
    height: 40,
    margin: 5,
  },
  scheduleList: {
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
    backgroundColor: "#6FD6F6",
    alignItems: "center",
  },
  scheduled: {
    marginTop: 10,
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 5,
  }
});
