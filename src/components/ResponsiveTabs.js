import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TourHabana from "./TourHabana";
import TourCaribes from "./TourCaribes";
import TourMatanzas from "./TourMatanzas";
import TourTrinCien from "./TourTrinCien";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `indicator-${index}`,
        "aria-controls": `indicator-${index}`
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(`value: ${newValue}`);
    };

    //Use handleChange on Tabs, not handleClick on Tab
    const handleClick = (event) => {
        //setValue(event);
        console.log(event);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="indicator example"
                    TabIndicatorProps={{
                        title: "indicator",
                        //hidden: true,
                        sx: { backgroundColor: "red", height: 4 } //width: "25% !important"
                    }}
                    sx={{
                        "& button": { borderRadius: 2 },
                        "& button:hover": { backgroundColor: "blue" },
                        "& button:focus": { backgroundColor: "gold" },
                        "& button:active": { backgroundColor: "green" }
                    }}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile

                >
                    <Tab onClick={handleClick} label="Гавана" {...a11yProps(0)} />
                    <Tab onClick={handleClick} label="Карибы" {...a11yProps(1)} />
                    <Tab onClick={handleClick} label="Матансас" {...a11yProps(2)} />
                    <Tab onClick={handleClick} label="Тринидад и Сьенфуэгос" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TourHabana />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TourCaribes />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TourMatanzas />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TourTrinCien />
            </TabPanel>
        </Box>
    );
}
