function Appointments() {
    const userName = "Abubakar";
    const appointments = [
        {
            reason: "Lorem Ipsum",
            day: "monday",
            start: "8 AM",
            end: "10 AM",
            totalTime: 3,
        },
        {
            reason: "Lorem Ipsum",
            day: "wednesday",
            start: "11 AM",
            end: "12 PM",
            totalTime: 2,
        },
    ];

    const daysOfWeek = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];

    const timings = [8, 9, 10, 11, 12, 13, 14];

    return (
        <div className="flex flex-col justify-between items-center">
            <header className="flex flex-row justify-around pb-8 items-center shadow-md w-full my-3">
                <h1 className="text-emerald-500 text-6xl font-medium text-2xl md:text-4xl lg:text-6xl xs:-ml-40 sm:-ml-60 md:-ml-72">
                    cↄript
                </h1>
                <svg
                    className="h-8 w-8 text-white bg-red-500 rounded xs:-mr-40 sm:-mr-60 md-mr-64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    {" "}
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />{" "}
                    <polyline points="16 17 21 12 16 7" />{" "}
                    <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
            </header>
            <table className="min-w-[50px] sm:1/6 md:w-5/6 border-collapse border border-slate-400 mt-4">
                <thead className="w-full">
                    <tr>
                        <th className="border-2 border-gray-300">Time</th>
                        {daysOfWeek.map((day) => (
                            <th key={day} className="border-2 border-gray-300">
                                {day.charAt(0).toUpperCase() + day.slice(1)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timings.map((time) => (
                        <tr key={time}>
                            <td className="border-2 border-gray-300 w-1/12 md:w-2/12 h-[50px]">
                                {time > 12 ? `${time - 12} PM` : `${time} AM`}
                            </td>
                            {daysOfWeek.map((day) => {
                                const matchingAppointment = appointments.find(
                                    (appointment) =>
                                        appointment.day === day &&
                                        time === parseInt(appointment.start) &&
                                        time < parseInt(appointment.end)

                                );
                                console.log("found=", matchingAppointment)
                                return (
                                    <td rowspan={matchingAppointment?.totalTime} key={`${day}-${time}`} className="border-2 border-gray-300 h-[50px]">
                                        {matchingAppointment ?
                                            <div className="bg-emerald-200 rounded w-full h-full rounded-2xl flex flex-col justify-center">
                                                <p className="font-bold">{userName}</p>
                                                <p className="text-sm">Reason</p>
                                                <p> {matchingAppointment.reason}</p>
                                            </div>
                                            : ""}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Appointments;
