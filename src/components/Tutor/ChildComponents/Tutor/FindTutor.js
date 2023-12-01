import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import TagFilter from "./TagFilter";
import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, setNationalityFilter } from "../../../../redux/reducers/filter";

const FindTutor = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.filter.data.name);
  const [tutorNationality, setTutorNationality] = useState([])

  const data = [
    { key: "1", value: "Foreign Tutor" },
    { key: "2", value: "Native English Tutor" },
    { key: "3", value: "Vietnamese Tutor" },
  ];

  const [date, setDate] = useState(new Date(1598051700000));
  const [startTime, setStartTime] = useState(new Date(1598051700000));
  const [endTime, setEndTime] = useState(new Date(1598051700000));

  const [showDate, setShowDate] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const [showDateWatch, setShowDateWatch] = useState(false);
  const [showStartTimeWatch, setShowStartTimeWatch] = useState(false);
  const [showEndTimeWatch, setShowEndTimeWatch] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDateWatch(false);
    setDate(currentDate);
    setShowDate(true);
  };
  const onChangeStartTime = (event, selectedTime) => {
    const currentTime = selectedTime;
    setShowStartTimeWatch(false);
    setStartTime(currentTime);
    setShowStartTime(true);
  };
  const onChangeEndTime = (event, selectedTime) => {
    const currentTime = selectedTime;
    setShowEndTimeWatch(false);
    setEndTime(currentTime);
    setShowEndTime(true);
  };

  const showDatepicker = () => {
    setShowDateWatch(true);
  };

  const showStartTimepicker = () => {
    setShowStartTimeWatch(true);
  };

  const showEndTimepicker = () => {
    setShowEndTimeWatch(true);
  };

  const nationalityFilter = (val) => {
    setTutorNationality(val)
    dispatch(setNationalityFilter(tutorNationality))
  }

  return (
    <View style={styles.findTutor}>
      <Text style={{ fontSize: 26, fontWeight: "bold", letterSpacing: 1 }}>
        Find a tutor
      </Text>
      <TextInput
        placeholder="Enter tutor name"
        placeholderTextColor="#e7afaf"
        style={styles.inputText}
        onChangeText={(val) => dispatch(setNameFilter(val))}
        value={name}
      />
      <MultipleSelectList
        setSelected={nationalityFilter}
        data={data}
        save="value"
        label="Tutor nationality"
        placeholder="Select tutor nationality"
        boxStyles={styles.multipleSelectList}
      />
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Select available tutoring time:
      </Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.inputText}>
        {!showDate && <Text style={{ color: "#e7afaf" }}>Select a day</Text>}
        {showDate && <Text>{date.toDateString()}</Text>}
      </TouchableOpacity>
      {showDateWatch && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}

      <View style={[styles.inputText, styles.timeContainer]}>
        <TouchableOpacity
          onPress={showStartTimepicker}
          style={[styles.timeBtn]}
        >
          {!showStartTime && (
            <Text style={{ color: "#e7afaf" }}>Start time</Text>
          )}
          {showStartTime && <Text>{startTime.toTimeString()}</Text>}
        </TouchableOpacity>
        {showStartTimeWatch && (
          <DateTimePicker
            testID="dateTimePicker"
            value={startTime}
            mode="time"
            is24Hour={true}
            onChange={onChangeStartTime}
          />
        )}
        <FontAwesome name="long-arrow-right" size={24} color="black" />
        <TouchableOpacity onPress={showEndTimepicker} style={[styles.timeBtn]}>
          {!showEndTime && <Text style={{ color: "#e7afaf" }}>End time</Text>}
          {showEndTime && <Text>{endTime.toTimeString()}</Text>}
        </TouchableOpacity>
        {showEndTimeWatch && (
          <DateTimePicker
            testID="dateTimePicker"
            value={endTime}
            mode="time"
            is24Hour={true}
            onChange={onChangeEndTime}
          />
        )}
      </View>

      <TagFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  findTutor: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
    flex: 1,
  },
  inputText: {
    width: "100%",
    height: 46,
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: "center",
  },
  multipleSelectList: {
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  timeBtn: {
    width: 150,
    borderWidth: 0,
    alignItems: "center",
  },
});

export default FindTutor;
