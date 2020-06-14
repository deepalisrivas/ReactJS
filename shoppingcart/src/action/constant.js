import Item1 from "../Images/camera.jpeg";
import Item2 from "../Images/mobile.jpeg";
import Item3 from "../Images/mic.jpeg";
import Item4 from "../Images/ipad.jpeg";
import Item5 from "../Images/laptop.jpeg";
import Item6 from "../Images/smart-watch.jpeg";
import Item7 from "../Images/headphone.jpeg";
import Item8 from "../Images/mouse.jpeg";
import Item9 from "../Images/speaker.jpeg";
import Item10 from '../Images/img1.jpeg';
import Item11 from '../Images/mic2.jpeg';
import Item12 from "../Images/item12.jpeg";
import Item13 from '../Images/ipad2.jpeg';
import Item14 from '../Images/laptop2.jpeg';
import Item15 from '../Images/smart-watch2.jpeg';
import Item16 from '../Images/headphone2.jpeg';
import Item17 from '../Images/mouse2.jpeg';
import Item18 from '../Images/speaker2.jpeg';

export const items = [
    {
        id: 1,
        title: "Canon EOS 1500D DSLR Camera",
        price: 110,
        img: Item1,
        img1: Item10,
        tax: 2.5,
        review: 2,
        ratingName: "rating1",
        models: [
            {id: 0, name: "Canon EOS 1500D DSLR Camera", price: 110},
            {
                id: 1,
                name: "Canon EOS EOS 1501D DSLR Camera",
                price: 100,
            },
            {id: 2, name: "Canon EOS EOS 1602D DSLR Camera", price: 120},
            {id: 3, name: "Canon EOS EOS 1703D DSLR Camera", price: 140},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam",
        reviewDescription1: {
            name: "John Doe",
            Date: "June 18,2016",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Jimmy Val",
            Date: "November 16,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
                " aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 2,
        title: "Redmi Dual 8A Mobile",
        price: 80,
        img: Item2,
        img1: Item12,
        tax: 1.6,
        review: 2,
        ratingName: "rating2",
        models: [
            {id: 0, name: "Redmi Dual 8A Mobile", price: 80},
            {id: 1, name: "Redmi Pro", price: 102},
            {id: 2, name: "Redmi Note5", price: 122},
            {id: 3, name: "Redmi Note9 Pro", price: 142},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
            "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Deepali Srivastava",
            Date: "March 10,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Astha Singh",
            Date: "September 14,2016",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 3,
        title: "Sony F-V420 Vocal Microphone",
        price: 120,
        img: Item3,
        tax: 1.3,
        img1: Item11,
        review: 2,
        ratingName: "rating3",
        models: [
            {id: 0, name: "Sony F-V420 Vocal Microphone", price: 120},
            {id: 1, name: "Sony F-V823 Vocal Microphone", price: 101},
            {id: 2, name: "Sony F-V432 Vocal Microphone", price: 121},
            {id: 3, name: "Sony F-V348 Vocal Microphone", price: 141},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Medha Gupta",
            Date: "December 14,2017",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Shailly Ghosh",
            Date: "December 14,2014",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 4,
        title: "Apple Ipad-Pro",
        price: 260,
        img: Item4,
        img1:Item13,
        tax: 6.2,
        review: 2,
        ratingName: "rating4",
        models: [
            {id: 0, name: "Apple Ipad-Pro", price: 260},
            {id: 1, name: "Apple Ipad-Pro-5", price: 205},
            {id: 2, name: "Apple Ipad-Pro-6", price: 228},
            {id: 3, name: "Apple Ipad-Pro-7", price: 290},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Aman Patel",
            Date: "September 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Deepak Jain",
            Date: "February 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 5,
        title: "Microsoft Surface Laptop 3",
        price: 160,
        img: Item5,
        img1:Item14,
        tax: 2.2,
        review: 2,
        ratingName: "rating5",
        models: [
            {id: 0, name: "Microsoft Surface Laptop 3", price: 160},
            {id: 1, name: "Version 4", price: 115},
            {id: 2, name: "Version 5", price: 119},
            {id: 3, name: "Version 6", price: 139},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
            "Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Ujjawal Chikara",
            Date: "August 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Bharat Saxena",
            Date: "January 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "" +
                "ut aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 6,
        title: "DZO9 TF 16G Bluetooth Smart Watch",
        price: 90,
        img: Item6,
        img1:Item15,
        tax: 1.5,
        review: 2,
        ratingName: "rating6",
        models: [
            {id: 0, name: "DZO9 TF 16G Bluetooth Smart Watch", price: 90},
            {id: 1, name: "DZO3 TF 16G Bluetooth Smart Watch", price: 132},
            {id: 2, name: "DZO5 TF 16G Bluetooth Smart Watch", price: 134},
            {id: 3, name: "DZO6 TF 16G Bluetooth Smart Watch", price: 138},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Akanksha Gupta",
            Date: "April 14,2018",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Priya Patel",
            Date: "July 14,2017",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 7,
        title: "Wemake Bluetooth Wireless Earphones",
        price: 150,
        img: Item7,
        img1:Item16,
        tax: 1.7,
        review: 2,
        ratingName: "rating7",
        models: [
            {id: 0, name: "Wemake Bluetooth Wireless Earphones", price: 150},
            {
                id: 1,
                name: "Wemake Bluetooth Wireless Earphones ZE6-B",
                price: 151,
            },
            {
                id: 2,
                name: "Wemake Bluetooth Wireless Earphones ZE6-A",
                price: 152,
            },
            {
                id: 3,
                name: "Wemake Bluetooth Wireless Earphones ZE6-Q",
                price: 153,
            },
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Johny Deo",
            Date: "October 14,2015",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
                " ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Winny James",
            Date: "July 14,2016",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 8,
        title: "HP X-3000 Wireless Mouse",
        price: 175,
        img: Item8,
        img1:Item17,
        tax: 1.4,
        review: 2,
        ratingName: "rating8",
        models: [
            {id: 0, name: "HP X-3000 Wireless Mouse", price: 175},
            {id: 1, name: "HP X-3001 Wireless Mouse", price: 176},
            {id: 2, name: "HP X-3002 Wireless Mouse", price: 178},
            {id: 3, name: "HP X-3004 Wireless Mouse", price: 179},
        ],

        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Salmon",
            Date: "June 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
                " ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Maximilian",
            Date: "May 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
                "aliquip ex ea commodo consequat.",
        },
    },
    {
        id: 9,
        title: "SONY SRS-XB12 Portable Bluetooth Speaker",
        price: 130,
        img: Item9,
        img1:Item18,
        tax: 1.2,
        review: 5,
        ratingName: "rating9",
        models: [
            {id: 0, name: "SONY SRS-XB12 Portable Bluetooth Speaker", price: 130},
            {id: 1, name: "SONY SRS-XB14 Portable Bluetooth Speaker", price: 163},
            {id: 2, name: "SONY SRS-XB16 Portable Bluetooth Speaker", price: 167},
            {id: 3, name: "SONY SRS-XB17 Portable Bluetooth Speaker", price: 166},
        ],
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            " Ut enim ad minim veniam",

        reviewDescription1: {
            name: "Dia Sharma",
            Date: "August 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
                " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },

        reviewDescription2: {
            name: "Ravi Vats",
            Date: "September 14,2019",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat.",
        },
    },
]