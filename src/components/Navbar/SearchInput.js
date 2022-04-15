import React, { useContext } from "react";
import { styled, alpha } from '@mui/material/styles';
import { Context } from "./Context";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

function SearchInput() {

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),

            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20cd',
                },
            },
        },
    }));

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0, 25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));



    //* handler input so it can reset



    const [query, setQuery] = useContext(Context);


    return (
        <Box sx={{ flexGrow: 1 }} >
            <Search>
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <StyledInputBase
                    type="text"
                    name="query"
                    className="input"
                    placeholder="Search..."
                    autoComplete=""
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={null}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            setQuery(e.target.value)
                            
                        }
                    }
                    }
                />
            </Search>
        </Box>
    )

}

export default SearchInput;
