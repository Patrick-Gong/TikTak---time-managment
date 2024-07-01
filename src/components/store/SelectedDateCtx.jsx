import { createContext, useState } from 'react';

const SelectedDateContext = createContext({
  selectedDate: new Date(),
  selectDate: (date) => {},
});

export function SelectedDateContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function selectDate(date) {
    setSelectedDate(date);
  }

  const ctxValue = {
    selectedDate,
    selectDate,
  };

  return (
    <SelectedDateContext.Provider value={ctxValue}>
      {children}
    </SelectedDateContext.Provider>
  );
}

export default SelectedDateContext;
