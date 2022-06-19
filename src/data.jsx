import {
    FaCode, FaFacebookSquare, FaGithubSquare
    , FaLinkedin, FaServer, FaPhoneAlt, FaMapMarkerAlt, FaLaptopCode, FaHome,
    FaBook, FaTv
    , FaCar, FaDownload, FaSun, FaMoon, FaPaintBrush, FaMusic,
    FaUniversity, FaBriefcase, FaThLarge, FaRegUser, FaRegFileCode, FaEnvelope, FaHiking
    , FaHeadphonesAlt
} from 'react-icons/fa';
import React from 'react';


export const menu = [

    {
        id: 1,
        title: 'Home',
        url: '#',
        icon: <FaHome />
    }, {
        id: 2,
        title: 'Profile',
        url: '#',
        icon: <FaRegUser />
    }, {
        id: 3,
        title: 'Education',
        url: '#',
        icon: <FaUniversity />
    }, {
        id: 4,
        title: 'Work',
        url: '#',
        icon: <FaBriefcase />
    }, {
        id: 5,
        title: 'Skills',
        url: '#',
        icon: <FaRegFileCode />
    }, {
        id: 6,
        title: 'Projects',
        url: '#',
        icon: <FaEnvelope />
    }

]

export const data = [
    {
        id: 1,
        icon: <FaBook />,
        hobby: 'Reading'
    },
    {
        id: 2,
        icon: <FaPaintBrush />,
        hobby: 'Painting'
    }, {
        id: 3,
        icon: <FaTv />,
        hobby: 'Movies'
    }, {
        id: 4,
        icon: <FaMusic />,
        hobby: 'Dancing'
    }, {
        id: 5,
        icon: <FaHeadphonesAlt />,
        hobby: 'Music'
    }, {
        id: 6,
        icon: <FaHiking />,
        hobby: 'Hiking'
    }
]





export const collegeinfo = [
    {
        id: 1,
        course: 'BACHELOR OF ENGINEERING',
        college: 'NAGPUR UNIVERSITY',
        year: '2009-2013'
    },
    {
        id: 2,
        course: 'HSC',
        college: 'PUNE BOARD',
        year: '2007-2009'
    },
    {
        id: 3,
        course: 'SSC',
        college: 'PUNE BOARD',
        year: '2007'
    }
]

export const work = [
    {
        id: 1,
        designation: 'SERVICE DELIVERY EXECUTIVE',
        company: 'NEEYAMO ENTERPRISE',
        year: 'JUL 2018 - JAN 2020',
        jobDesc: [
            'Neeyamo, a leading provider of HR technology, HR operations, and HR process consulting services.Reviewing and checking applications and supporting documents.Maintaining complete activity log and Preparing reports.',
            'Responding to mails coming from other teams. Initiate Background verification checks according to client requirements and attach all documents according to checks and push it to the next level'
        ]
    },
    {
        id: 2,
        designation: 'ELECTRICAL SUPERVISOR',
        company: 'SANJAY UMAP NETERPRISES',
        year: 'JUL 2014 - JAN 2016',
        jobDesc: [
            'MIDC water treatment plant is the main source of pure water for all the companies comes under Butibori MIDC.',
            'Supervise and coordinate activities of workers engaged in operating and maintaining equipment in water treatment plant.',
            'Plan a daily work schedule and assign tasks to workers based upon the priority of work expertise of individual workers. Improving the operations of all the phases of production , quality and maintenance'
        ]
    },

]

export const skills = [
    {
        id: 1,
        icon: <FaCode />,
        techology: 'FRONTEND development',
        exeperience: 'Arount 6 months',
        techno: [
            {
                id: 11,
                lang: 'html',
                perc: '90%'
            },
            {
                id: 12,
                lang: 'css',
                perc: '75%'
            },
            {
                id: 13,
                lang: 'javascript',
                perc: '70%'
            },
            {
                id: 14,
                lang: 'react js',
                perc: '70%'
            },
            {
                id: 15,
                lang: 'bootstrap',
                perc: '70%'
            }
        ]

    }, {
        id: 2,
        icon: <FaServer />,
        techology: 'backend development',
        exeperience: 'Arount 6 months',
        techno: [
            {
                id: 21,
                lang: 'node js',
                perc: '65%'
            },
            {
                id: 22,
                lang: 'express js',
                perc: '70%'
            },
            {
                id: 23,
                lang: 'mongo db',
                perc: '65%'
            },
            {
                id: 24,
                lang: 'python',
                perc: '60%'
            }
        ]
    }, {
        id: 3,
        icon: <FaLaptopCode />,
        techology: 'Other',
        exeperience: 'Arount 6 months (Basic)',
        techno: [
            {
                id: 31,
                lang: 'linux',
                perc: '60%'
            },
            {
                id: 32,
                lang: 'git/github',
                perc: '60%'
            },
            {
                id: 33,
                lang: 'sql',
                perc: '55%'
            }
        ]

    }
]




export const projects = [

    {
        id: 1,
        title: "WEBSITE",
        img: "img/kari-shea-1SAnrIxw5OY-unsplash.jpg",
        link: "https://nareshrepairs.in"
    }, {
        id: 2,
        title: "TO-DO-LIST",
        img: "img/alexandar-todov-AMzC2RVurO4-unsplash.jpg",
        link: "https://sourabh-ingle.github.io/Grocery-Bud/"
    }, {
        id: 3,
        title: "COUNTER",
        img: "img/workshop-2Kqhw3qST0o-unsplash.jpg",
        link: "https://sourabh-ingle.github.io/Start-Stop-Counter/"
    }, {
        id: 4,
        title: "COUNTER",
        img: "img/workshop-2Kqhw3qST0o-unsplash.jpg",
        link: "https://sourabh-ingle.github.io/Start-Stop-Counter/"
    }, {
        id: 5,
        title: "COUNTER",
        img: "img/workshop-2Kqhw3qST0o-unsplash.jpg",
        link: "https://sourabh-ingle.github.io/Start-Stop-Counter/"
    }

]
