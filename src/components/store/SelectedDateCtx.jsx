import { createContext, useState } from 'react';

const SelectedDateContext = createContext({
  selectedDate: new Date(),
  changeDate: (date) => {},
});

export function SelectedDateContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function changeDate(dateObj) {
    console.log('Updating to', dateObj);
    setSelectedDate(dateObj);
  }

  const ctxValue = {
    selectedDate,
    changeDate,
  };

  return (
    <SelectedDateContext.Provider value={ctxValue}>{children}</SelectedDateContext.Provider>
  );
}

export default SelectedDateContext;