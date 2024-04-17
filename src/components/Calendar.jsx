import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// import CloseIcon from "@mui/icons-material/Close";
import { IoCloseSharp } from "react-icons/io5";
import format from "date-fns/format";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Calendar = ({ value, setValue, handleDateChange, booked }) => {
  const [highlightedDays, setHighlightedDays] = useState([]);
  console.log({booked});

  const firstFrom = booked.length >= 0 ? booked[0]?.from : null;

  // Get the 'to' value of the last object
  const lastTo = booked.length >= 0 ? booked[booked.length - 1]?.to : null;

  const startDate = new Date(firstFrom);
  const endDate = new Date(lastTo);
  const Bdates = [];

  // Iterate through the range of dates and push each date to the dates array
  for (
    let currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    // Convert the current date to the desired format (YYYY-MM-DD)
    const formattedDate = currentDate.toISOString().split("T")[0];

    // Push the formatted date to the dates array
    Bdates.push(formattedDate);
  }

  const dates = Bdates;

  useEffect(() => {
    // Convert date strings to Date objects and extract day and month numbers
    const dayAndMonthNumbers = dates.map((dateString) => {
      const date = new Date(dateString);
      return { day: date.getDate(), month: date.getMonth() };
    });

    setHighlightedDays(dayAndMonthNumbers);
  }, []);

  const formattedDate =
    value !== "YYYY-MM-DD" ? format(value, "yyyy-MM-dd") : "";

  return (
    <div className="csd">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          variant=""
          orientation="portrait"
          value={formattedDate}
          //   disableFuture
          onChange={(newValue) => {
            const selectedDate = format(newValue, "yyyy-MM-dd");
            if (Bdates.includes(selectedDate)) {
              toast.error("Is not available");
            } else {
              setValue(newValue);
              handleDateChange(newValue);
            }
          }}
          renderInput={(params) => (
            // Corrected: Use parentheses to return the TextField component
            <TextField {...params} />
          )}
          renderDay={(day, _value, DayComponentProps) => {
            const isHighlighted = highlightedDays.some(
              (highlightedDay) =>
                highlightedDay.day === day.getDate() &&
                highlightedDay.month === day.getMonth()
            );

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={
                  isHighlighted ? (
                    <IoCloseSharp className="cls-cnn" />
                  ) : undefined
                }
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
      <ToastContainer />
    </div>
  );
};

export default Calendar;
