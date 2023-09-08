export const DateFormat = (values: any) => {
    //@ts-ignore
    const DateFormating =
        values?.trip_flights?.DateFormating.length &&
        //@ts-ignore
        values?.trip_flights?.DateFormating.map((data: any, i: number) => {
            return {
                ...data,
                depart_date: data.depart_date.format("YYYY-MM-DD"),
            };
        });

};
