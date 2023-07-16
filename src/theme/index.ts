// Define the tokens function
export const tokens = (themeType: string) => {
    // Implement your logic here to retrieve colors based on the themeType
    // For simplicity, we'll use a dummy color object as an example
    interface Colors {
        [key: string]: {
            [key: string]: {
                [key: number]: string;
            };
        };
    }


    const colors: Colors = {
        dark: {
            greenAccent: {
                500: "#00FF00", // Replace this with the actual color value for "dark" theme
            },
            // Add more colors for the "dark" theme as needed
        },
        light: {
            greenAccent: {
                500: "#00CC00", // Replace this with the actual color value for "light" theme
            },
            // Add more colors for the "light" theme as needed
        },
        // Add more theme types if required
    };

    const tokens = (themeType: string) => {
        return colors[themeType];
    };

    // Example usage
    const darkGreenAccent500 = tokens("dark").greenAccent[500];
    const lightGreenAccent500 = tokens("light").greenAccent[500];

    console.log(darkGreenAccent500); // Output: "#00FF00" (or the actual color value for "dark" theme)
    console.log(lightGreenAccent500); // Output: "#00CC00" (or the actual color value for "light" theme)      

}