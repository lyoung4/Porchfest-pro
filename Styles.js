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
  list: {
    flexDirection: "row",
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
    backgroundColor: "#6FD6F6", // original color: #ffa07a
    alignItems: "center",
    },
  performer: {
    color: "white",
    fontSize: "25",
    fontWeight: "900",
    marginLeft: 15,
    textAlign: 'center',
  },
  favoritedList: {
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 1,
    backgroundColor: "#6FD6F6", // original color: #ffa07a
    alignItems: "center",
  },
  favorited: {
    color: "white",
    fontSize: "25",
    fontWeight: "900",
    textAlign: 'center',
    justifyContent: 'center'
  },
});
