import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,

  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center",
    backgroundColor: "#6FD6F6",
    padding: 10,
    margin: 50,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
  },
  result: {
    color: "red",
  },
  map: {
    flex: 1,
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
  },
  openButton: {
    marginTop: 0,
    backgroundColor: "#F194FF",
    textAlign: "centered",
    borderRadius: 2,
    padding: 10,
    elevation: 2
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 1
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
mapButton: {
    marginTop: 0,
    backgroundColor: "#6FD6F6",
    borderRadius: 2,
    padding: 10,
    elevation: 2,
    marginBottom: 5
}
});
