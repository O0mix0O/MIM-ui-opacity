# Melvor Idle Mod - UI Opacity

This mod allows users to customize the opacity of various UI elements in the game **Melvor Idle**. The opacity is adjustable through a setting in the game’s settings menu. Users can choose a value between 0 and 10 to control the transparency of key UI elements, making the game interface more personalized.

## Features
- **Customizable Opacity**: Set the opacity of different UI elements using a slider (value range: 0 to 10).
- **Real-Time Updates**: The UI opacity updates instantly when the setting is changed.
- **Disabled Option**: Set the opacity setting to `-1` to disable any changes to UI opacity.
- **Element Support**: The opacity setting applies to various UI elements, including blocks, headers, modals, and the page header.

## Installation
1. Ensure you have the latest version of **Melvor Idle** installed.
2. Download and install the **UI Opacity Mod** as per your mod manager’s instructions.
3. The mod will automatically add a new setting to the game’s settings menu.

## Usage
1. Open the settings menu in Melvor Idle.
2. Scroll to the **UI Opacity Settings** section.
3. Adjust the **UI Opacity** slider to a value between `0` (fully transparent) and `10` (fully opaque).
4. Optionally, set the opacity to `-1` to disable opacity changes.
5. The changes will take effect immediately across various UI elements like blocks, headers, and the page header.

## Settings Options
- **UI Opacity**: 
  - Value range: `0` (transparent) to `10` (opaque)
  - Default value: `0` (transparent)
  - Hint: "Type a number between 0 and 10 to set your opacity (0 = transparent). Restart the game to apply."

## Elements Affected by Opacity
The opacity setting will apply to the following UI elements:
- `.block`
- `.block-header`
- `.block-header-default`
- `.bg-light`
- `.simplebar-content-wrapper`
- `.list-group-item`
- `.bg-combat-inner-dark`
- `#page-header`
- `#header-theme`

### Exclusions
- The opacity setting **does not apply** to elements with the class `.modal` (such as modals) or elements with the id `#header-user-options-dropdown`.

## Development Notes
- The opacity value is mapped to a set of hex codes that define varying levels of transparency.
- The mod uses an `onChange` event to instantly apply changes when the opacity setting is adjusted.
- The mod is designed to be easy to modify if additional elements need to be targeted in the future.

---

If you have any issues or suggestions, feel free to open an issue or contribute to the project!
