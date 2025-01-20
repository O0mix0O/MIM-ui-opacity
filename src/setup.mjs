export function setup(ctx) {
    // Add the settings section and input
    ctx.settings.section('UI Opacity Settings').add({
        type: 'number',
        name: 'ui-opacity',
        label: 'UI Opacity',
        hint: 'Type a number between 0 and 10 to set your opacity (0 = transparent).',
        default: -1, // Default value: no changes (-1 means "disabled")
        min: -1, // Minimum value
        max: 10, // Maximum value
        onChange: (value, previousValue) => {
            console.log(`UI opacity changed from ${previousValue} to ${value}`);
            applyOpacitySetting(value); // Apply the new opacity setting
        }
    });

    // Apply the opacity setting
    const applyOpacitySetting = (opacitySetting) => {

        let bgColor;

        let hexTable;

        const darkModeHexColours = [
            "#00000000", // Key 1: Fully transparent black
            "#04101A1C", // Key 2: ~10% opacity, ~10% of RGB
            "#08203338", // Key 3: ~20% opacity, ~20% of RGB
            "#0C304D55", // Key 4: ~30% opacity, ~30% of RGB
            "#10406671", // Key 5: ~40% opacity, ~40% of RGB
            "#1450808D", // Key 6: ~50% opacity, ~50% of RGB
            "#186099AA", // Key 7: ~60% opacity, ~60% of RGB
            "#1C70B3C6", // Key 8: ~70% opacity, ~70% of RGB
            "#2080CCE3", // Key 9: ~80% opacity, ~80% of RGB
            "#2490E6FF", // Key 10: ~90% opacity, ~90% of RGB
            "#232A35FF"  // Key 11: Fully opaque target color
        ]

        const superDarkModeColours = [
            "#00000000", // Key 1: Fully transparent black
            "#0000001C", // Key 2: ~10% opacity
            "#00000038", // Key 3: ~20% opacity
            "#00000055", // Key 4: ~30% opacity
            "#00000071", // Key 5: ~40% opacity
            "#0000008D", // Key 6: ~50% opacity
            "#000000AA", // Key 7: ~60% opacity
            "#000000C6", // Key 8: ~70% opacity
            "#000000E3", // Key 9: ~80% opacity
            "#000000FF", // Key 10: Fully opaque black
            "#000000FF"  // Key 11: Solid black (unchanged from Key 10)
        ]

        const darkModeColour = '#232a35';
        const superDarkModeColour = 'black';

        const isSuperDarkMode = game.settings.boolData.superDarkMode.currentValue;
        const appropriateDarkModeColour = isSuperDarkMode ? superDarkModeColour : darkModeColour;
        const appropriateDarkModeHexColours = isSuperDarkMode ? superDarkModeColours : darkModeHexColours;

        // If the setting is -1, do nothing
        if (opacitySetting === -1) {
            console.log('UI opacity setting is disabled (-1).');

            bgColor = appropriateDarkModeColour;
        }
        else {

            // Ensure the setting value is within bounds
            if (opacitySetting < 0 || opacitySetting > 10) {
                console.error('Invalid UI opacity setting value. Must be between 0 and 10.');
                return;
            }

            hexTable = appropriateDarkModeHexColours;
            bgColor = hexTable[opacitySetting];


        }
        const headerColour = hexTable[opacitySetting + 1]

        // Apply the background color styling to all target classes + the page header
        const targetClasses = [
            '.block',
            '.block-header',
            '.block-header-default',
            '.bg-light',
            '.simplebar-content-wrapper',
            '.list-group-item',
            '.bg-combat-inner-dark'
        ];

        // Apply opacity to each class
        targetClasses.forEach((className) => {
            const elements = document.querySelectorAll(`body.darkMode ${className}`);
            elements.forEach((element) => {
                if (element.id !== 'header-user-options-dropdown') {
                    element.style.setProperty('background-color', `${bgColor}`, 'important');
                }
            });
        });

        // Apply opacity to the page-header element
        const pageHeader = document.getElementById('page-header');
        if (pageHeader) {
            pageHeader.style.setProperty('background-color', `${headerColour}`, 'important');
        }
        const headerTheme = document.getElementById('header-theme');
        if (headerTheme) {
            headerTheme.style.setProperty('background-color', `${headerColour}`, 'important');
        }
        const sideBar = document.getElementById('sidebar');
        if (sideBar) {
            sideBar.style.setProperty('background-color', `${appropriateDarkModeColour}`, 'important');
        }


        console.log(`UI opacity set to ${opacitySetting}: ${bgColor}`);
    };

    // Apply the opacity setting once the DOM is fully loaded (initial application)
    ctx.onInterfaceReady(() => {
        const initialOpacitySetting = ctx.settings.section('UI Opacity Settings').get('ui-opacity');
        console.log('Applying UI opacity setting...');
        applyOpacitySetting(initialOpacitySetting); // Apply the initial opacity setting
    });
}
