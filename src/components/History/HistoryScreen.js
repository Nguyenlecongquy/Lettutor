import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import Gift from "../Common/Gift";
import Message from "../Common/Message";
import Header from "../Common/Header";
import Introduce from "./ChildComponents/Introduce";
import PageSegmentation from "../Common/PageSegmentation";
import ListClass from "./ChildComponents/ListClass";

const windowHeight = Dimensions.get("window").height;

const HistoryScreen = (props) => {
  const listClass = [
    {
      key: 1,
      value: {
        date: "Sun, 26 Nov 23",
        time: "00:30 - 00:55",
        lesson: '1 lesson',
        timePass: '16 hours ago',
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/450px-Style_-_Wouldn%27t_It_Be_Nice.png",
        name: "Keegan",
        countryImg:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAh1BMVEXnABP////6yc3//Pz++fnyd4HqIjL2oajnBRj97u/pGSr72NvxZnH83uD70dTsMkHuSFb4sbf+9fb5w8fwXmroCx3wYW396+zvV2TpEiTsMD/ycn3zf4ntO0ryeoTuR1X0ipPuT1z5ur/71djpFyjrJzf0j5f2nKP3rrT2pKv1lZ30hY7tQE6SJapdAAAEJklEQVR4nO2c63aqMBCFuYsKeANFscdrq1bf//mO6CrJhICXuoTQ/f0r4Fp7SDIzGSbVNAAAAAAAAAAAAAAAAAAAAAAAAACABuI6/dizbduL+45btZiX44StjaUzrKAVdqoW9To+j11dRnf+WbW0V+CGI6l5V0ah6vPVDeXDx/CTqGqRv2Hl37DvYmNctcyncQZ32JcycKqW+hyr9p0G6npbxWF0v+62L6Wl3Gqcyj2o1fbblvTOaFq15MfoBKIFpnGMZ9eBimbx0TDFBzZKZQCO4EPNdSjOwmm4Foz0FfI3UxoEh99y7c43nbD+9s06nyaiU7RVPP06LfJkoMpaJGFw81H67IkM9+BNCn+JTQZQEgWiXpzYdhL30nvRjn88ebvaJ+hxi8v08reXzI2axrKnaR7ncazyEa8FLjftLDFVcccbXSAYu6sh+7Nb/73GnDOwL9yTJ+L+qs8N+79KVD+Aw41HSG9tCxPxATdRh3WPinume07vfEyKDDwPI+duDtUIv5dPNhgjuqL4xZbHYiHUrHdpg0XwNo3zK2Z6YEhMNNkL2FWk/S46zGXQyPbBjaDhyDaO7JdWnVNwFuwDMken/Bo0tFg6UQteTr1gq2lFrhMvavCTWcamIvV30MtEdsl1OmZnC6PyCtysIv23YdGeZGsuDfRnC0lql6e+UT+rXFhkGzSm+lMLtYS/YAslj3U18m/jZg6T7oKEXPRi4c/SNEe2I74CfVjX5PQkn6Q9Qf/Vwu0kNS9JI4OTSwbqusPwMoUkLVlKLdQWg/F1Lru5qpWe33TVg6xCOiGXRQOMop8xlu+S/CDrH4Ej/mok1g0FC/t5A2tbzcg8CskshWXYbi3Ij7ayLUfwVt33k4U9sm+KiXkr0U2uJQbq/htVP0KWUJPEMot8k7x5QtkqY5J7rh5keQpxhf+uo/IljQAFuY31HsEP03wLmz9Lm+9pnooWHZWiRfMjfkHWJhaeFM7amp95f8gVNmj3VLQDDmQWKrkDZq7mwSpGokoV4w9UomaZRlpNXIkWKltNfFFFuK7xPqWwqs/PU6Wr+s3/MtP8r2ua8+QX0qEyX0i1A1MtfuUu6RdW6Cs3ycDG9Na0sFNhr1KnQvO7TW50DIW5fUQQqtYxdKvra3bku76OM/W6vmhSrR/knXteevzp2rl34B+vc7DnIB6leyp9lnZf7t+k8LdENKSXddCSAdQNZRr2hS5oq6gLekf3UF1luqBlnexjscF5Ola5k11+GmF5dS0XT7NU/TTCHzhRcg7uYhGxnJ0CkT5H0092nensb9t2Ya/YEuQ43TpBmuKLCbpS3HNKVsUVyOPGpSedY9Xtu+DM5QO5mSsV48vphK2AL9QMg12T/uPAD84i9hI78eJFg8YOAAAAAAAAAAAAAAAAAAAAAAAAAIDjP/mqOWAGtSxgAAAAAElFTkSuQmCC",
        countryName: "Tunisia",
        request:
          "Currently there are no requests for this class. Please write down any requests for the teacher.",
      },
    },
    {
      key: 2,
      value: {
        date: "Mon, 27 Nov 23",
        time: "02:00 - 02:35",
        lesson: '1 lesson',
        timePass: '16 hours ago',
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Style_-_Wouldn%27t_It_Be_Nice.png/450px-Style_-_Wouldn%27t_It_Be_Nice.png",
        name: "Keegan",
        countryImg:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAh1BMVEXnABP////6yc3//Pz++fnyd4HqIjL2oajnBRj97u/pGSr72NvxZnH83uD70dTsMkHuSFb4sbf+9fb5w8fwXmroCx3wYW396+zvV2TpEiTsMD/ycn3zf4ntO0ryeoTuR1X0ipPuT1z5ur/71djpFyjrJzf0j5f2nKP3rrT2pKv1lZ30hY7tQE6SJapdAAAEJklEQVR4nO2c63aqMBCFuYsKeANFscdrq1bf//mO6CrJhICXuoTQ/f0r4Fp7SDIzGSbVNAAAAAAAAAAAAAAAAAAAAAAAAACABuI6/dizbduL+45btZiX44StjaUzrKAVdqoW9To+j11dRnf+WbW0V+CGI6l5V0ah6vPVDeXDx/CTqGqRv2Hl37DvYmNctcyncQZ32JcycKqW+hyr9p0G6npbxWF0v+62L6Wl3Gqcyj2o1fbblvTOaFq15MfoBKIFpnGMZ9eBimbx0TDFBzZKZQCO4EPNdSjOwmm4Foz0FfI3UxoEh99y7c43nbD+9s06nyaiU7RVPP06LfJkoMpaJGFw81H67IkM9+BNCn+JTQZQEgWiXpzYdhL30nvRjn88ebvaJ+hxi8v08reXzI2axrKnaR7ncazyEa8FLjftLDFVcccbXSAYu6sh+7Nb/73GnDOwL9yTJ+L+qs8N+79KVD+Aw41HSG9tCxPxATdRh3WPinume07vfEyKDDwPI+duDtUIv5dPNhgjuqL4xZbHYiHUrHdpg0XwNo3zK2Z6YEhMNNkL2FWk/S46zGXQyPbBjaDhyDaO7JdWnVNwFuwDMken/Bo0tFg6UQteTr1gq2lFrhMvavCTWcamIvV30MtEdsl1OmZnC6PyCtysIv23YdGeZGsuDfRnC0lql6e+UT+rXFhkGzSm+lMLtYS/YAslj3U18m/jZg6T7oKEXPRi4c/SNEe2I74CfVjX5PQkn6Q9Qf/Vwu0kNS9JI4OTSwbqusPwMoUkLVlKLdQWg/F1Lru5qpWe33TVg6xCOiGXRQOMop8xlu+S/CDrH4Ej/mok1g0FC/t5A2tbzcg8CskshWXYbi3Ij7ayLUfwVt33k4U9sm+KiXkr0U2uJQbq/htVP0KWUJPEMot8k7x5QtkqY5J7rh5keQpxhf+uo/IljQAFuY31HsEP03wLmz9Lm+9pnooWHZWiRfMjfkHWJhaeFM7amp95f8gVNmj3VLQDDmQWKrkDZq7mwSpGokoV4w9UomaZRlpNXIkWKltNfFFFuK7xPqWwqs/PU6Wr+s3/MtP8r2ua8+QX0qEyX0i1A1MtfuUu6RdW6Cs3ycDG9Na0sFNhr1KnQvO7TW50DIW5fUQQqtYxdKvra3bku76OM/W6vmhSrR/knXteevzp2rl34B+vc7DnIB6leyp9lnZf7t+k8LdENKSXddCSAdQNZRr2hS5oq6gLekf3UF1luqBlnexjscF5Ola5k11+GmF5dS0XT7NU/TTCHzhRcg7uYhGxnJ0CkT5H0092nensb9t2Ya/YEuQ43TpBmuKLCbpS3HNKVsUVyOPGpSedY9Xtu+DM5QO5mSsV48vphK2AL9QMg12T/uPAD84i9hI78eJFg8YOAAAAAAAAAAAAAAAAAAAAAAAAAIDjP/mqOWAGtSxgAAAAAElFTkSuQmCC",
        countryName: "Tunisia",
        request:
          "Currently there are no requests for this class. Please write down any requests for the teacher.",
      },
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

      <Header navigation={props.navigation}/>
      <ScrollView style={styles.body}>
        <Introduce />
        <ListClass data={listClass} />
        <PageSegmentation />
      </ScrollView>

      <Gift />
      <Message />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: windowHeight - 50,
    position: "absolute",
    left: 0,
    top: 50,
    backgroundColor: "#fff",
  },
});

export default HistoryScreen;
