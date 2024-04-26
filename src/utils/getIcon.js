import { IconMouse } from "@tabler/icons-react";

export const getIcon = (label, { color, size, stroke }) => {
    const icons = {
        'mouse': <IconMouse color={color} size={size} stroke={stroke} />,
    };

    return icons[label.toLowerCase()] || null; // Returns the icon or null if not found
};