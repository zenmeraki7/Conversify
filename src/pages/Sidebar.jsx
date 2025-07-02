import React, { useState } from 'react';

// Icon components to match the design
const MenuIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const HistoryIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12,6 12,12 16,14"></polyline>
    </svg>
);

const PlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const PawIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.39 5C10.5 5 7.68 5.64 5.17 6.84L3.5 5.17L2 6.67L4.22 8.89C3.24 10.04 2.56 11.43 2.26 12.96L4.24 13.43C4.46 12.33 4.96 11.3 5.68 10.43L7.5 12.25C8.33 11.67 9.32 11.22 10.39 10.96L12 12.58L13.61 10.96C14.68 11.22 15.67 11.67 16.5 12.25L18.32 10.43C19.04 11.3 19.54 12.33 19.76 13.43L21.74 12.96C21.44 11.43 20.76 10.04 19.78 8.89L21 9Z" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);

const LogoutIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16,17 21,12 16,7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        setIsCollapsed(false); // Expand sidebar when any item is clicked
    };

    const menuItems = [
        { id: 'home', icon: MenuIcon, label: 'AI Humanizer' },
        { id: 'detector', icon: HistoryIcon, label: 'AI Detector' },
        { id: 'plagiarism', icon: PlusIcon, label: 'Plagiarism Remover' },
    ];

    const bottomItems = [
        { id: 'settings', icon: SettingsIcon, label: 'Settings' },
        { id: 'logout', icon: LogoutIcon, label: 'Logout' },
    ];

    const sidebarStyles = {
        position: 'fixed',
        left: 0,
        top: 0,
        width: isCollapsed ? '64px' : '280px',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'width 0.3s ease-in-out',
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    };

    const headerStyles = {
        padding: '16px 20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const logoStyles = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#ffffff',
        opacity: isCollapsed ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
        whiteSpace: 'nowrap',
    };

    const collapseButtonStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: 'none',
        borderRadius: '6px',
        color: '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
    };

    const topSectionStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '16px 0',
        flex: 1,
    };

    const menuItemStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: isCollapsed ? '12px' : '12px 20px',
        margin: isCollapsed ? '0 12px' : '0 16px',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '8px',
        color: '#a1a1aa',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        minHeight: '44px',
        fontSize: '14px',
        fontWeight: '500',
    };

    const activeMenuItemStyles = {
        ...menuItemStyles,
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        color: '#ffffff',
        boxShadow: '0 4px 12px rgba(255, 107, 53, 0.4)',
    };

    const menuLabelStyles = {
        opacity: isCollapsed ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
        whiteSpace: 'nowrap',
    };

    const bottomSectionStyles = {
        padding: '16px 0 24px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    };

    const upgradeButtonStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        gap: '12px',
        padding: isCollapsed ? '12px' : '12px 20px',
        margin: isCollapsed ? '0 12px 16px 12px' : '0 16px 16px 16px',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        border: 'none',
        borderRadius: '8px',
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.2s ease-in-out',
        minHeight: '44px',
    };

    return (
        <div style={sidebarStyles}>
            {/* Header */}
            <div style={headerStyles}>
                {!isCollapsed && <div style={logoStyles}>AI Humanizer</div>}
                <button
                    style={collapseButtonStyles}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                >
                    <MenuIcon />
                </button>
            </div>

            {/* Main Menu Items */}
            <div style={topSectionStyles}>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        style={activeItem === item.id ? activeMenuItemStyles : menuItemStyles}
                        onClick={() => handleItemClick(item.id)}
                        onMouseEnter={(e) => {
                            if (activeItem !== item.id) {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.color = '#ffffff';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeItem !== item.id) {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#a1a1aa';
                            }
                        }}
                    >
                        <item.icon />
                        <span style={menuLabelStyles}>{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Bottom Section */}
            <div style={bottomSectionStyles}>
                {/* Upgrade Button */}
                <button
                    style={upgradeButtonStyles}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-1px)';
                        e.target.style.boxShadow = '0 6px 16px rgba(255, 107, 53, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    <PawIcon />
                    <span style={menuLabelStyles}>Upgrade Now</span>
                </button>

                {/* Settings Items */}
                {bottomItems.map((item) => (
                    <button
                        key={item.id}
                        style={menuItemStyles}
                        onClick={() => handleItemClick(item.id)}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#a1a1aa';
                        }}
                    >
                        <item.icon />
                        <span style={menuLabelStyles}>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;