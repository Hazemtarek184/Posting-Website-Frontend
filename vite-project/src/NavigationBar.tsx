import searchLogo from './Image/search-analytics.png';
import IconButton from '@mui/material/IconButton';

export default function NavigationBar() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            width: "100%",
            height: 70,
            backgroundColor: 'White',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
            zIndex: 1000
        }}>
            {/* <button style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer'
            }}>
                <img src={searchLogo} style={{
                    height: '40px', width: 'auto'
                }} />
            </button> */}

            <IconButton
                sx={{
                    padding: 0,
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <img
                    src={searchLogo}
                    style={{
                        height: '40px',
                        width: 'auto'
                    }}
                />
            </IconButton>
        </div>

    )
}
