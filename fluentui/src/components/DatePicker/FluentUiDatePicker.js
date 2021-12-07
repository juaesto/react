import {
    DatePicker,
    DayOfWeek, defaultDatePickerStrings, Dropdown, mergeStyles
} from '@fluentui/react';
import * as React from 'react';

const days = [
    { text: 'Sunday', key: DayOfWeek.Sunday },
    { text: 'Monday', key: DayOfWeek.Monday },
    { text: 'Tuesday', key: DayOfWeek.Tuesday },
    { text: 'Wednesday', key: DayOfWeek.Wednesday },
    { text: 'Thursday', key: DayOfWeek.Thursday },
    { text: 'Friday', key: DayOfWeek.Friday },
    { text: 'Saturday', key: DayOfWeek.Saturday },
];
const rootClass = mergeStyles({ maxWidth: 300, selectors: { '> *': { marginBottom: 15 } } });

export default function FluentUiDatePicker() {
    const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

    const onDropdownChange = React.useCallback((event, option) => {
        setFirstDayOfWeek(option.key);
    }, []);

    return (
        <div className={rootClass}>
            <DatePicker
                firstDayOfWeek={firstDayOfWeek}
                placeholder="Select a date..."
                ariaLabel="Select a date"
                // DatePicker uses English strings by default. For localized apps, you must override this prop.
                strings={defaultDatePickerStrings}
            />
            <Dropdown
                label="Select the first day of the week"
                options={days}
                selectedKey={firstDayOfWeek}
                onChange={onDropdownChange}
            />
        </div>
    );
};
