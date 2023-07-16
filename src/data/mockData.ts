
interface TeamMember {
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    access: "admin" | "manager" | "user";
}

export const mockDataTeam: TeamMember[] = [
    {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        age: 35,
        phone: "(665)121-5454",
        access: "admin",
    },
    // ... (other team members)
];

interface ContactInfo {
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    registrarId: number;
}

export const mockDataContacts: ContactInfo[] = [
    {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        age: 35,
        phone: "(665)121-5454",
        address: "0912 Won Street, Alabama, SY 10001",
        city: "New York",
        zipCode: "10001",
        registrarId: 123512,
    },
    // ... (other contact info)
];

interface Invoice {
    id: number;
    name: string;
    email: string;
    cost: string;
    phone: string;
    date: string;
}

export const mockDataInvoices: Invoice[] = [
    {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        cost: "21.24",
        phone: "(665)121-5454",
        date: "03/12/2022",
    },
    // ... (other invoices)
];

interface Transaction {
    txId: string;
    user: string;
    date: string;
    cost: string;
}

export const mockTransactions: Transaction[] = [
    {
        txId: "01e4dsa",
        user: "johndoe",
        date: "2021-09-01",
        cost: "43.95",
    },
    // ... (other transactions)
];

interface BarData {
    country: string;
    [key: string]: number | string;
}

export const mockBarData: BarData[] = [
    {
        country: "AD",
        "hot dog": 137,
        "hot dogColor": "hsl(229, 70%, 50%)",
        burger: 96,
        "burgerColor": "hsl(296, 70%, 50%)",
        // ... (other properties)
    },
    // ... (other bar data)
];

interface PieData {
    id: string;
    label: string;
    value: number;
    color: string;
}

export const mockPieData: PieData[] = [
    {
        id: "hack",
        label: "hack",
        value: 239,
        color: "hsl(104, 70%, 50%)",
    },
    // ... (other pie data)
];

interface LineData {
    id: string;
    color: string;
    data: { x: string; y: number }[];
}

export const mockLineData: LineData[] = [
    {
        id: "japan",
        color: '#555',
        data: [
            { x: "plane", y: 101 },
            // ... (other data points)
        ],
    },
    // ... (other line data)
];

interface GeographyData {
    id: string;
    value: number;
}

export const mockGeographyData: GeographyData[] = [
    { id: "AFG", value: 520600 },
    // ... (other geography data)
];
