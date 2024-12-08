import React from "react";

import DatePicker from "./DatePicker";
import ErrorField from "./ErrorField";

type ModalPropsType = {
  from: Date | undefined;
  to: Date | undefined;
  setFrom: (value: Date | undefined) => void;
  setTo: (value: Date | undefined) => void;
};

const DateStep = ({ from, to, setFrom, setTo }: ModalPropsType) => {
  const isInvalidPeriod = from && to ? from > to : false;

  const disableEndDate = (day: Date) => day < (from ?? new Date());

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 text-white items-center">
        <DatePicker selectedDate={from} onChange={setFrom} label="Start Date" />

        <DatePicker selectedDate={to} onChange={setTo} disable={disableEndDate} label="End Date" />
      </div>

      {isInvalidPeriod && <ErrorField message={"Incorrect period"} />}
    </div>
  );
};

export default DateStep;