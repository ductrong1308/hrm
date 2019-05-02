export const adminLteConf = {
    skin: 'blue',
    // isSidebarLeftCollapsed: false,
    // isSidebarLeftExpandOnOver: false,
    // isSidebarLeftMouseOver: false,
    // isSidebarLeftMini: true,
    // sidebarRightSkin: 'dark',
    // isSidebarRightCollapsed: true,
    // isSidebarRightOverContent: true,
    // layout: 'normal',
    sidebarLeftMenu: [
        { label: 'PERSONAL', separator: true },
        { label: 'My Dashboard', route: '/', iconClasses: 'fa fa-road' },
        {
            label: 'My Requests', iconClasses: 'fa fa-th-list', children: [
                { label: 'Late-in / Early-out', route: 'layout/configuration' },
                { label: 'Leave', route: 'layout/custom' }
            ]
        },
        { label: 'COMPANY', separator: true },
        { label: 'Employees', route: 'alert', iconClasses: 'fa fa-exclamation-triangle' },
        {
            label: 'Requests', iconClasses: 'fa fa-files-o', children: [
                { label: 'Late-in / Early-out', route: 'boxs/box' },
            ]
        },
    ]
}; // font awesome
