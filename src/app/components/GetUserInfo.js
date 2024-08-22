import React from 'react';


async function GetUserInfo() {
    const response = await fetch(`https://traino.nu/php/testgetuser.php?id=175`)
    const data = await response.json();
    return data;
}

export default GetUserInfo;