import { useState } from 'react';

const useOpenNavMenu = () => {

    const [openNavMenu, setOnpenNavMenu] = useState(false);

    return { openNavMenu, setOnpenNavMenu };
};

export default useOpenNavMenu;