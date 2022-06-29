import { technologiesIcons } from 'technologies';

let wrappedIcons = [];

for (const icon in technologiesIcons) {
    wrappedIcons.push(
        <div className="circle-icon__wrapper">
            {technologiesIcons[icon]}
        </div>
    );
}

export const renderTechnologiesIcons = wrappedIcons;
