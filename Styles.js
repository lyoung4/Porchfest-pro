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
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  title: {
    borderWidth: 2,
    color: "white",
    padding: 10,
    backgroundColor: "#ffa07a",
    fontSize: 15,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 0
}
});
