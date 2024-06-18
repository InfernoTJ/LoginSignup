import React from 'react'
import logo from '../Images/test.png'
import Tweeter from '../Images/Icons/tweeter.png'
import Facebook from '../Images/Icons/facebook.png'
import weebly from '../Images/Icons/weebly.png'
import linkedin from '../Images/Icons/linkedin.png'
import Instagram from '../Images/Icons/instagram.png'

import { Link } from 'react-router-dom'
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{
                width: "50%", height: "100vh", bgcolor: "dodgerblue", justifyContent: 'center', display: "flex", flexDirection: 'column',
                alignItems: 'center',
            }} >
                <img src={logo} width='auto' height='100px' alt='logo' />
                <Typography variant='h1' sx={{
                    color: "white", fontSize: "50px",
                    fontWeight: '700'

                }}>Welcome Back</Typography>
                <Typography variant='p' sx={{ color: "white", width: '500px', textAlign: 'center', fontSize: '20px', fontWeight: '500' }}>
                    "Welcome to 'SNP Tax & Financials', where tax management meets simplicity. Our advanced software streamlines tax processes for individuals, businesses, and professionals, ensuring accuracy and efficiency. Experience a new era of financial ease with SNP Tax & Financials."</Typography>
                <Typography variant='p' sx={{ color: "white", width: '500px', textAlign: 'center', fontSize: '20px', mb: '100px' }}>
                    Please Login to access your account</Typography>
                <div className='loginas'>
                    <Link target='blank' to="https://x.com/?lang=en"><img width='60px' height='60px' src={Tweeter} /></Link>
                    <Link target='blank' to="https://www.facebook.com"><img width='60px' height='60px' src={Facebook} /></Link>
                    <Link target='blank' to="https://www.weebly.com/in"><img width='40px' height='40px' src={weebly} /></Link>
                    <Link target='blank' to="https://www.linkedin.com/feed/"><img width='40px' height='40px' src={linkedin} /></Link>
                    <Link target='blank' to="https://www.instagram.com"><img width='40px' height='40px' src={Instagram} /></Link>
                </div>
            </Box>
            <Box className='logininput' sx={{ width: "50%", height: "100vh", bgcolor: "#f2f2f2" }} >
                <Box className='loginalign'>
                 <Typography variant='h1' sx={{
                        color: "black", fontSize: "35px",
                        fontWeight: '700', mb: '50px'

                    }}>Login Account</Typography>
                    <InputLabel htmlFor="outlined-required">Email</InputLabel>
                    <TextField required
                        sx={{ width: '300px' ,bgcolor:'white' }}
                        id="outlined-required"
                        placeholder="Email" />
                    <br />

                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput sx={{ width: '300px',bgcolor:'white' }}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }

                        placeholder="Password"
                    />
                    <Link href='/' style={{ marginTop: '25px', marginBottom: '25px' }}>Forgot Password</Link>

                    <InputLabel id="demo-simple-select-label">Stay Signed In For</InputLabel>
                    <Select sx={{bgcolor:'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder='Select'


                    >
                        <MenuItem value={10}>8 Hours</MenuItem>
                        <MenuItem value={20}>1 Day</MenuItem>
                        <MenuItem value={30}>10 Days</MenuItem>
                    </Select>
                    <FormControlLabel sx={{marginTop:'12px' }} required control={<Checkbox />} label={
                        <span className='termncond'>
                            "Agree to
                            <Link href="/" onClick={(e) => e.preventDefault()}>
                                Terms and Conditions"
                            </Link>
                        </span>
                    } />
                    <Button variant="contained" sx={{
                        borderColor:'primary.main',
                        borderWidth: '2px',borderStyle: 'solid',fontSize:'15px',fontWeight:'600',borderRadius:'100px',mt:'15px',
                        ':hover': {
                            backgroundColor: 'transparent',
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            boxShadow: 'none',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                        },
                    }}>Login</Button>
    <p className='donthaveacc'>Don't have an account?<Link href='/'>Sign Up</Link></p>
                </Box>
            </Box>

        </Box>
    )
}

export default Login