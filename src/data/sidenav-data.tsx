import { FaAddressCard, FaClipboardList, FaProjectDiagram, FaRegCalendarCheck, FaRegCalendarPlus, FaRegStar, FaUmbrellaBeach, FaUsers } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiClockUserBold } from "react-icons/pi";
import { SiHelpdesk, SiPagespeedinsights } from "react-icons/si";
import { TfiCommentsSmiley } from "react-icons/tfi";

export const MenuList = [
    {
        "title": "Dashboard",
        "path": "/dashboard",
        "icon": <MdDashboard />,
        "id": "dashboard"
    },
    {
        "title": "PMS",
        "path": "/dashboard/pms",
        "icon": <FaProjectDiagram />,
        "id": "pms"
    },
    {
        "title": "LMS",
        "path": "/dashboard/lms",
        "icon": <TfiCommentsSmiley />,
        "id": "lms",
        "subItems": [
            {
                "title": "Request New Leave",
                "path": "/dashboard/request-new-leave",
                "icon": <FaRegCalendarPlus />,
                "id": "request-new-leave"
            },
            {
                "title": "General Leave",
                "path": "/dashboard/general-leave",
                "icon": <FaClipboardList />,
                "id": "general-leave"
            },
            {
                "title": "Compensatory Leave",
                "path": "/dashboard/compensatory-leave",
                "icon": <FaClipboardList />,
                "id": "compensatory-leave"
            },
            {
                "title": "Request Compensatory Leave",
                "path": "/dashboard/request-compensatory-leave",
                "icon": <FaRegCalendarPlus />,
                "id": "request-compensatory-leave"
            }
        ],
    }, {
        "title": "Helpdesk Portal",
        "path": "/dashboard/helpdesk-portal",
        "icon": <SiHelpdesk />,
        "id": "helpdesk-portal"
    },
    {
        "title": "Page Speed",
        "path": "/dashboard/pagespeed",
        "icon": <SiPagespeedinsights />,
        "id": "pagespeed"
    },
    {
        "title": "Work Log",
        "path": "/dashboard/worklog",
        "icon": <FaClipboardList />,
        "id": "worklog"
    },
    {
        "title": "My Documents",
        "path": "/dashboard/mydocuments",
        "icon": <IoDocumentText />,
        "id": "mydocuments"
    },
    {
        "title": "My Team",
        "path": "/dashboard/myteam",
        "icon": <FaUsers />,
        "id": "myteam"
    },
    {
        "title": "Holiday",
        "path": "/dashboard/holiday",
        "icon": <FaUmbrellaBeach />,
        "id": "holiday"
    },
    {
        "title": "Working Days",
        "path": "/dashboard/workingdays",
        "icon": <FaRegCalendarCheck />,
        "id": "workingdays"
    },
    {
        "title": "Time Tracker",
        "path": "/dashboard/timetracker",
        "icon": <PiClockUserBold />,
        "id": "timetracker"
    },
    {
        "title": "Rating",
        "path": "/dashboard/rating",
        "icon": <FaRegStar />,
        "id": "rating"
    },
    {
        "title": "My Profile",
        "path": "/dashboard/myprofile",
        "icon": <FaAddressCard />,
        "id": "myprofile"
    },

];
