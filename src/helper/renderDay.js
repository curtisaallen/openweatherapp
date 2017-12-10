export const renderDay = (value) => {
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
      let timezone = new Date(value);
      let day = timezone;
      return weekday[day.getDay()];
};