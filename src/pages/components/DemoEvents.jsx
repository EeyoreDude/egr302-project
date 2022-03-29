/**
 * just a temporary static list of "events" purely for testing purposes. Feel free to modify.
 * DemoEvents is global to App.js, so any page can accept it as a prop with the same data.
 * in order for the calendar to function, "events" need to have AT LEAST a title, start and end (start and end must a Date).
 * feel free to add other fields if you need them for testing, we can eventually have the database mimic whatever structure we need.
 */

const DemoEvents = [
    {
        title: "INDIV UPDATE 2: Sprint 3/4",
        start: new Date(2022,2,30),
        end: new Date(2022,2,30),
        course: "EGR302"
    },
    {
        title: "PRES 5: Sprint 4",
        start: new Date(2022,2,30),
        end: new Date(2022,2,30),
        course: "EGR302"

    },
    {
        title: "zyBooks(10.1-10.3)",
        start: new Date(2022,2,29),
        end: new Date(2022,2,29),
        course: "EGR325"
    }
]

export default DemoEvents